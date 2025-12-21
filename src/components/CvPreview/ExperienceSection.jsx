function ExperienceSection({ experienceInfo }) {
  const hasEducationInfo =
    experienceInfo.jobTitle ||
    experienceInfo.company ||
    experienceInfo.location ||
    experienceInfo.startDate ||
    experienceInfo.endDate ||
    experienceInfo.description;

  if (!hasEducationInfo) return null;

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Work Experience</h2>
      <div className="flex flex-col gap-1">
        {experienceInfo.jobTitle && <p>{experienceInfo.jobTitle}</p>}
        {experienceInfo.company && (
          <p>
            {experienceInfo.company}, {experienceInfo.startDate} -{" "}
            {experienceInfo.endDate}
          </p>
        )}
        {experienceInfo.description && <p>{experienceInfo.description}</p>}
      </div>
    </div>
  );
}

export default ExperienceSection;
