import { useState } from "react";
import RichTextEditor from "./rich-text-editor";

function App() {
  const [content, setContent] = useState("Hello World!");
  return (
    <div className="flex p-2 h-screen max-w-3xl bg-gray-200 border rounded-2xl mt-3.5 mx-auto max-h-[calc(100vh-4rem)]">
      <RichTextEditor content={content} setContent={setContent} />
    </div>
  );
}

export default App;
