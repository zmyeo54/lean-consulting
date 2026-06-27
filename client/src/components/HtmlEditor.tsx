import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

interface HtmlEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export default function HtmlEditor({ value, onChange, placeholder = "Write your content here..." }: HtmlEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    // Initialize Quill
    const quill = new Quill(editorRef.current, {
      theme: 'snow',
      placeholder,
      modules: {
        toolbar: [
          [{ 'header': [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          ['link', 'image', 'video'],
          [{ 'align': [] }],
          [{ 'color': [] }, { 'background': [] }],
          ['clean']
        ]
      }
    });

    quillRef.current = quill;

    // Set initial content
    if (value) {
      quill.root.innerHTML = value;
    }

    // Handle content changes
    quill.on('text-change', () => {
      const html = quill.root.innerHTML;
      onChange(html);
    });

    return () => {
      quillRef.current = null;
    };
  }, []);

  // Update content when value prop changes (from outside)
  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value;
    }
  }, [value]);

  return (
    <div className="space-y-2">
      <div 
        ref={editorRef} 
        className="bg-white border border-[#E6DFD5] rounded-lg min-h-96 quill-editor"
        style={{
          fontSize: '14px',
          fontFamily: 'Inter, Noto Sans, sans-serif'
        }}
      />
      <style>{`
        .quill-editor .ql-toolbar {
          border-top: 1px solid #E6DFD5;
          border-left: 1px solid #E6DFD5;
          border-right: 1px solid #E6DFD5;
          border-radius: 4px 4px 0 0;
          background-color: #FAF7F2;
        }
        
        .quill-editor .ql-container {
          border-bottom: 1px solid #E6DFD5;
          border-left: 1px solid #E6DFD5;
          border-right: 1px solid #E6DFD5;
          border-radius: 0 0 4px 4px;
          font-family: Inter, Noto Sans, sans-serif;
        }
        
        .quill-editor .ql-editor {
          min-height: 350px;
          padding: 20px;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .quill-editor .ql-editor.ql-blank::before {
          color: #999;
          font-style: italic;
        }
        
        .quill-editor .ql-toolbar button:hover,
        .quill-editor .ql-toolbar button.ql-active,
        .quill-editor .ql-toolbar select:hover,
        .quill-editor .ql-toolbar select.ql-active {
          color: #8b0000;
        }
        
        .quill-editor .ql-toolbar.ql-snow .ql-picker-label {
          color: #1A1513;
        }
        
        .quill-editor .ql-editor h1 {
          font-size: 2em;
          margin: 0.67em 0;
          font-weight: bold;
        }
        
        .quill-editor .ql-editor h2 {
          font-size: 1.5em;
          margin: 0.75em 0;
          font-weight: bold;
        }
        
        .quill-editor .ql-editor h3 {
          font-size: 1.17em;
          margin: 0.83em 0;
          font-weight: bold;
        }
        
        .quill-editor .ql-editor blockquote {
          border-left: 4px solid #8b0000;
          padding-left: 16px;
          margin: 1em 0;
          color: #666;
          font-style: italic;
        }
        
        .quill-editor .ql-editor code,
        .quill-editor .ql-editor pre {
          background-color: #f5f5f5;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
        }
      `}</style>
    </div>
  );
}
