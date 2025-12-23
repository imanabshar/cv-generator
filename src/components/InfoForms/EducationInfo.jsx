import Input from "../shared/Input";

function EducationInfo({ educationInfo, setEducationInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo({
      ...educationInfo,
      [name]: value,
    });
  };

  return (
    <div className="p-4 border w-full max-w-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Education</h2>

      <Input
        label="Degree"
        name="degree"
        type="text"
        placeholder="Enter Degree"
        value={educationInfo.degree}
        onChange={handleChange}
      />

      <Input
        label="School / College"
        name="school"
        type="text"
        placeholder="Enter School or College"
        value={educationInfo.school}
        onChange={handleChange}
      />

      <Input
        label="Location"
        name="location"
        type="text"
        placeholder="Enter Location"
        value={educationInfo.location}
        onChange={handleChange}
      />

      <div className="flex gap-4 mb-4">
        <Input
          label="Start Date"
          name="startDate"
          type="text"
          value={educationInfo.startDate}
          onChange={handleChange}
        />
        <Input
          label="End Date"
          name="endDate"
          type="text"
          value={educationInfo.endDate}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default EducationInfo;
