import { useState } from "react";
import { FaTools } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function Skills({ skills, setSkills }) {
  const [skillInput, setSkillInput] = useState("");

  function addSkill() {
    if (skillInput.trim() !== "") {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  }

  function removeSkill(index) {
    const newSkills = skills.filter((value, i) => i !== index);
    setSkills(newSkills);
  }

  return (
    <div className="w-[90%] px-6 py-6 border rounded-xl bg-white">
      <div className="flex items-center gap-3 mb-3">
        <FaTools className="text-xl" />
        <span className="text-[22px] font-bold">Skills</span>
      </div>

      <div className="flex gap-2 mb-2">
        <input
          type="text"
          placeholder="Enter a skill"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          className="flex-1 border bg-gray-100 placeholder-gray-500 focus:border-black  outline-none p-2 rounded"
        />
        <button
          type="button"
          onClick={addSkill}
          className="bg-blue-400
             hover:from-slate-500 hover:to-blue-500 
             text-white px-4 py-2 rounded-md transition"
        >
          <FaPlus />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-200 mt-2 px-2 py-1 rounded flex items-center gap-1"
          >
            <span>{skill}</span>
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="text-red-500 font-bold"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
