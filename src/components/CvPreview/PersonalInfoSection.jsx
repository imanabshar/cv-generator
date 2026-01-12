function PersonalInfoSection({ personalInfo }) {
  const hasPersonalInfo =
    personalInfo.name || personalInfo.title || personalInfo.objective;

  if (!hasPersonalInfo) return null;

  return (
    <div>
      <h1 className="font-bold text-2xl sm:text-4xl">{personalInfo.name}</h1>
      <h3 className="sm:text-xl text-gray-600 mt-1">{personalInfo.title}</h3>
      <p className="text-gray-700 my-2 sm:my-4 text-xs sm:text-base">{personalInfo.objective}</p>
      <div className="border-b border-gray-300 mt-2"></div>
    </div>
  );
}

export default PersonalInfoSection;
