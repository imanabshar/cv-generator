function SkillsSection({ skills }) {
  if (skills.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5 mt-10 text-white">Skills</h2>
      <ul className="flex flex-col gap-6 list-disc list-inside text-white space-y-1">
        {skills.map((skill) => (
          <li key={skill} className="text-white">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsSection;
