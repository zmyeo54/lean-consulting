import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Heading3,
  Code,
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo2,
  Redo2,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
  };

  return (
    <div className="border-2 border-[#E6DFD5] rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="bg-[#FAF7F2] border-b-2 border-[#E6DFD5] p-3 flex gap-2 flex-wrap">
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "bg-[#D4AF37]" : "bg-[#E6DFD5]"}
          size="sm"
          title="Bold"
        >
          <Bold size={16} />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "bg-[#D4AF37]" : "bg-[#E6DFD5]"}
          size="sm"
          title="Italic"
        >
          <Italic size={16} />
        </Button>

        <div className="w-px bg-[#D4AF37]" />

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "bg-[#D4AF37]" : "bg-[#E6DFD5]"}
          size="sm"
          title="Heading 2"
        >
          <Heading2 size={16} />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive("heading", { level: 3 }) ? "bg-[#D4AF37]" : "bg-[#E6DFD5]"}
          size="sm"
          title="Heading 3"
        >
          <Heading3 size={16} />
        </Button>

        <div className="w-px bg-[#D4AF37]" />

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "bg-[#D4AF37]" : "bg-[#E6DFD5]"}
          size="sm"
          title="Bullet List"
        >
          <List size={16} />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "bg-[#D4AF37]" : "bg-[#E6DFD5]"}
          size="sm"
          title="Ordered List"
        >
          <ListOrdered size={16} />
        </Button>

        <div className="w-px bg-[#D4AF37]" />

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "bg-[#D4AF37]" : "bg-[#E6DFD5]"}
          size="sm"
          title="Code Block"
        >
          <Code size={16} />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "bg-[#D4AF37]" : "bg-[#E6DFD5]"}
          size="sm"
          title="Blockquote"
        >
          <Quote size={16} />
        </Button>

        <div className="w-px bg-[#D4AF37]" />

        <Button
          type="button"
          onClick={addLink}
          className="bg-[#E6DFD5] hover:bg-[#D4AF37]"
          size="sm"
          title="Add Link"
        >
          <LinkIcon size={16} />
        </Button>

        <Button
          type="button"
          onClick={addImage}
          className="bg-[#E6DFD5] hover:bg-[#D4AF37]"
          size="sm"
          title="Add Image"
        >
          <ImageIcon size={16} />
        </Button>

        <div className="w-px bg-[#D4AF37]" />

        <Button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className="bg-[#E6DFD5]"
          size="sm"
          title="Undo"
        >
          <Undo2 size={16} />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className="bg-[#E6DFD5]"
          size="sm"
          title="Redo"
        >
          <Redo2 size={16} />
        </Button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none p-4 min-h-96 focus:outline-none"
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#1A1513",
        }}
      />
    </div>
  );
}
