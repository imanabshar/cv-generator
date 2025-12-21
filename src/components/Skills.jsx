import { useState } from "react";

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
    <div className="p-4 border w-full max-w-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>

      <div className="flex gap-2 mb-2">
        <input
          type="text"
          placeholder="Enter a skill"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
        <button
          type="button"
          onClick={addSkill}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-200 px-2 py-1 rounded flex items-center gap-1"
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
