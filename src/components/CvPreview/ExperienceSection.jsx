function ExperienceSection({ experienceInfo }) {
  const hasExperienceInfo =
    experienceInfo.jobTitle ||
    experienceInfo.company ||
    experienceInfo.location ||
    experienceInfo.startDate ||
    experienceInfo.endDate ||
    experienceInfo.description;

  if (!hasExperienceInfo) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-white bg-black py-2 px-6 rounded">
        Work Experience
      </h2>
      <div className="flex flex-col gap-4 text-gray-500">
        {experienceInfo.jobTitle && (
          <p className="font-medium text-gray-800 text-lg">
            {experienceInfo.jobTitle}
          </p>
        )}

        {(experienceInfo.company ||
          experienceInfo.startDate ||
          experienceInfo.endDate) && (
          <p>
            {experienceInfo.company}
            {experienceInfo.company &&
              (experienceInfo.startDate || experienceInfo.endDate) &&
              " | "}
            {experienceInfo.startDate}
            {experienceInfo.startDate && experienceInfo.endDate && " - "}
            {experienceInfo.endDate}
          </p>
        )}

        {experienceInfo.location && <p>{experienceInfo.location}</p>}

        {experienceInfo.description && <p>{experienceInfo.description}</p>}
      </div>
    </div>
  );
}

export default ExperienceSection;
