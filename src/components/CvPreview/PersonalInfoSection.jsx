function PersonalInfoSection({ personalInfo }) {
  const hasPersonalInfo =
    personalInfo.name || 
    personalInfo.title || 
    personalInfo.objective;

  if (!hasPersonalInfo) return null;

  return (
    <div>
      <h1 className="font-semibold">{personalInfo.name}</h1>
      <h3>{personalInfo.title}</h3>
      <p>{personalInfo.objective}</p>
    </div>
  );
}

export default PersonalInfoSection;
