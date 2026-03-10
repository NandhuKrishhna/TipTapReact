import { editOptions } from "@/lib/edit-options";
import { cn } from "@/lib/utils";
import { Sparkles, ChevronDown } from "lucide-react";
import React from "react";

const EditorMenuOptions = ({ editor }) => {
  const options = editOptions(editor);

  return (
    <div className="flex items-center flex-wrap gap-1 bg-[#242424] p-1.5 rounded-[12px] shadow-2xl border border-white/10 max-w-xl">
      {/* AI Button matching the screenshot */}
      <button
        type="button"
        onClick={() => {}}
        className="flex items-center gap-1.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white p-1.5 px-2.5 rounded-[8px] transition-colors shadow-sm cursor-pointer"
      >
        <Sparkles className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 opacity-80" />
      </button>

      <div className="w-px-1 h-5 bg-white/20 mx-1" />

      {options.map((option) => (
        <button
          type="button"
          key={option.label}
          onClick={option.onClick}
          title={option.label}
          className={cn(
            "p-1.5 rounded-[8px] transition-all duration-200 cursor-pointer",
            option.isActive
              ? "bg-white/15 text-white shadow-sm"
              : "text-gray-400 hover:bg-white/10 hover:text-white",
          )}
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
};

export default EditorMenuOptions;
