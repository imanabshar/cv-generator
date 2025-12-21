function EducationSection({ educationInfo }) {
  const hasEducationInfo =
    educationInfo.degree ||
    educationInfo.school ||
    educationInfo.city ||
    educationInfo.country ||
    educationInfo.startDate ||
    educationInfo.endDate;

  if (!hasEducationInfo) return null;

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Education</h2>
      <div className="flex flex-col gap-1">
        {educationInfo.degree && <p>{educationInfo.degree}</p>}
        {educationInfo.school && (
          <p>
            {educationInfo.school}, {educationInfo.city}, {educationInfo.country}
          </p>
        )}
        {(educationInfo.startDate || educationInfo.endDate) && (
          <p>
            {educationInfo.startDate} - {educationInfo.endDate}
          </p>
        )}
      </div>
    </div>
  );
}

export default EducationSection;
