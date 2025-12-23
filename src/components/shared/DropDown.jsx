import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function DropDown({ title, icon, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center justify-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="text-[22px] font-bold">{title}</span>
        </span>
        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
}

export default DropDown;
