import Input from "./Input";

function ExperienceInfo({ experienceInfo, setExperienceInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceInfo({
      ...experienceInfo,
      [name]: value,
    });
  };

  return (
    <div className="p-4 border w-full max-w-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>

      <Input
        label="Job Title"
        name="jobTitle"
        type="text"
        placeholder="Enter Job Title"
        value={experienceInfo.jobTitle}
        onChange={handleChange}
      />

      <Input
        label="Company"
        name="company"
        type="text"
        placeholder="Enter Company"
        value={experienceInfo.company}
        onChange={handleChange}
      />

      <Input
        label="Location"
        name="location"
        type="text"
        placeholder="Enter Location"
        value={experienceInfo.location}
        onChange={handleChange}
      />

      <div className="flex gap-4 mb-4">
        <Input
          label="Start Date"
          name="startDate"
          type="date"
          value={experienceInfo.startDate}
          onChange={handleChange}
        />
        <Input
          label="End Date"
          name="endDate"
          type="date"
          value={experienceInfo.endDate}
          onChange={handleChange}
        />
      </div>

      <Input
        label="Description"
        name="description"
        type="textarea"
        placeholder="Enter Job Description"
        value={experienceInfo.description}
        onChange={handleChange}
        rows={3}
      />
    </div>
  );
}

export default ExperienceInfo;
