import { AlignCenter } from "lucide-react";
import { AlignRight } from "lucide-react";
import { AlignLeft } from "lucide-react";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Eraser,
  RemoveFormatting,
  Pilcrow,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  List,
  ListOrdered,
  SquareTerminal,
  Quote,
  Minus,
  WrapText,
  Undo,
  Redo,
  ImageIcon,
  LinkIcon,
  Unlink,
} from "lucide-react";

export const editOptions = (editor) => {
  return [
    {
      icon: <Bold className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
      label: "Bold",
    },
    {
      icon: <Italic className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
      label: "Italic",
    },
    {
      icon: <Strikethrough className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
      label: "Strike",
    },
    {
      icon: <Code className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleCode().run(),
      isActive: editor.isActive("code"),
      label: "Code",
    },
    {
      icon: <Eraser className="w-4 h-4" />,
      onClick: () => editor.chain().focus().unsetAllMarks().run(),
      label: "Clear marks",
    },
    {
      icon: <RemoveFormatting className="w-4 h-4" />,
      onClick: () => editor.chain().focus().clearNodes().run(),
      label: "Clear nodes",
    },
    {
      icon: <Pilcrow className="w-4 h-4" />,
      onClick: () => editor.chain().focus().setParagraph().run(),
      isActive: editor.isActive("paragraph"),
      label: "Paragraph",
    },
    {
      icon: <Heading1 className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive("heading", { level: 1 }),
      label: "H1",
    },
    {
      icon: <Heading2 className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive("heading", { level: 2 }),
      label: "H2",
    },
    {
      icon: <Heading3 className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: editor.isActive("heading", { level: 3 }),
      label: "H3",
    },
    {
      icon: <Heading4 className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      isActive: editor.isActive("heading", { level: 4 }),
      label: "H4",
    },
    {
      icon: <Heading5 className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
      isActive: editor.isActive("heading", { level: 5 }),
      label: "H5",
    },
    {
      icon: <Heading6 className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
      isActive: editor.isActive("heading", { level: 6 }),
      label: "H6",
    },
    {
      icon: <List className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
      label: "Bullet list",
    },
    {
      icon: <ListOrdered className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
      label: "Ordered list",
    },
    {
      icon: <SquareTerminal className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: editor.isActive("codeBlock"),
      label: "Code block",
    },
    {
      icon: <Quote className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive("blockquote"),
      label: "Blockquote",
    },
    {
      icon: <Minus className="w-4 h-4" />,
      onClick: () => editor.chain().focus().setHorizontalRule().run(),
      label: "Horizontal rule",
    },
    {
      icon: <WrapText className="w-4 h-4" />,
      onClick: () => editor.chain().focus().setHardBreak().run(),
      label: "Hard break",
    },
    {
      icon: <Undo className="w-4 h-4" />,
      onClick: () => editor.chain().focus().undo().run(),
      label: "Undo",
    },
    {
      icon: <Redo className="w-4 h-4" />,
      onClick: () => editor.chain().focus().redo().run(),
      label: "Redo",
    },
    {
      icon: <AlignLeft className="w-4 h-4" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      isActive: editor.isActive("textAlign", { align: "left" }),
      label: "Left align",
    },
    {
      icon: <AlignCenter className="w-4 h-4" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      isActive: editor.isActive("textAlign", { align: "center" }),
      label: "Center align",
    },
    {
      icon: <AlignRight className="w-4 h-4" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      isActive: editor.isActive("textAlign", { align: "right" }),
      label: "Right align",
    },
    {
      icon: <ImageIcon className="w-4 h-4" />,
      onClick: () => {
        const url = window.prompt("Enter Image URL:");
        if (url) {
          editor.chain().focus().setImage({ src: url }).run();
        }
      },
      label: "Add Image",
    },
    {
      icon: <LinkIcon className="w-4 h-4" />,
      onClick: () => {
        const previousUrl = editor.getAttributes("link").href;
        const url = window.prompt("Enter Link URL:", previousUrl);
        if (url === null) {
          return;
        }
        if (url === "") {
          editor.chain().focus().extendMarkRange("link").unsetLink().run();
          return;
        }
        editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
      },
      isActive: editor.isActive("link"),
      label: "Link",
    },
    {
      icon: <Unlink className="w-4 h-4" />,
      onClick: () => editor.chain().focus().unsetLink().run(),
      label: "Unlink",
    },
  ];
};
