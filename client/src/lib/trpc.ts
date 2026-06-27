import { httpBatchLink } from "@trpc/client";
// ... keep your other existing imports exactly as they are

// 1. Add this safe fallback helper near the top of the file
function getBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "https://lean-consulting.vercel.app";
}

// 2. Update the trpcClient configuration block to look like this:
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
