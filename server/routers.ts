import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  blog: router({
    list: publicProcedure.query(async () => {
      const { getBlogArticles } = await import("./db");
      return getBlogArticles({ published: true, limit: 10 });
    }),
    getBySlug: publicProcedure.input(z.string()).query(async ({ input }) => {
      const { getBlogArticleBySlug } = await import("./db");
      return getBlogArticleBySlug(input);
    }),
    create: protectedProcedure.input(z.object({
      title: z.string(),
      slug: z.string(),
      category: z.string(),
      excerpt: z.string().optional(),
      content: z.string(),
      readTime: z.number().optional(),
    })).mutation(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized: only admins can create articles");
      }
      const { createBlogArticle } = await import("./db");
      return createBlogArticle({
        ...input,
        authorId: ctx.user.id,
        published: 0,
      });
    }),
    update: protectedProcedure.input(z.object({
      id: z.number(),
      title: z.string().optional(),
      slug: z.string().optional(),
      category: z.string().optional(),
      excerpt: z.string().optional(),
      content: z.string().optional(),
      readTime: z.number().optional(),
      published: z.number().optional(),
    })).mutation(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized: only admins can update articles");
      }
      const { updateBlogArticle } = await import("./db");
      const { id, ...updates } = input;
      return updateBlogArticle(id, updates);
    }),
    delete: protectedProcedure.input(z.number()).mutation(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized: only admins can delete articles");
      }
      const { deleteBlogArticle } = await import("./db");
      await deleteBlogArticle(input);
      return { success: true };
    }),
  }),
});

export type AppRouter = typeof appRouter;
