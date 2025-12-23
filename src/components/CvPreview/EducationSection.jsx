function EducationSection({ educationInfo }) {
  const hasEducationInfo =
    educationInfo.degree ||
    educationInfo.school ||
    educationInfo.location ||
    educationInfo.startDate ||
    educationInfo.endDate;

  if (!hasEducationInfo) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-white bg-black py-2 px-6 rounded">
        Education
      </h2>
      <div className="flex flex-col gap-4 text-gray-500">
        {(educationInfo.startDate || educationInfo.endDate) && (
          <p>
            {educationInfo.startDate}
            {educationInfo.startDate && educationInfo.endDate && " - "}
            {educationInfo.endDate}
          </p>
        )}

        {educationInfo.degree && (
          <p className="font-medium text-gray-800">{educationInfo.degree}</p>
        )}

        {educationInfo.school && <p>{educationInfo.school}</p>}

        {educationInfo.location && <p>{educationInfo.location}</p>}

        <div className="border-b border-gray-300 mt-2"></div>
      </div>
    </div>
  );
}

export default EducationSection;
