function SkillsSection({ skills }) {
  if (skills.length === 0) return null;

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Skills</h2>
      {skills.map((skill) => (
        <li key={skill}>-{skill}</li>
      ))}
    </div>
  );
}

export default SkillsSection;