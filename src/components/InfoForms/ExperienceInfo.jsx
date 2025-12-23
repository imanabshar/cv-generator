import FormBlock from "../shared/FormBlock";
import Input from "../shared/Input";
import { FaBriefcase } from "react-icons/fa";

function ExperienceInfo({ experienceInfo, setExperienceInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceInfo({
      ...experienceInfo,
      [name]: value,
    });
  };

  return (
    <FormBlock title="Experience" icon={<FaBriefcase />}>
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

      <div className="flex gap-4 mb-4">
        <Input
          label="Start Date"
          name="startDate"
          type="text"
          value={experienceInfo.startDate}
          onChange={handleChange}
        />
        <Input
          label="End Date"
          name="endDate"
          type="text"
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
    </FormBlock>
  );
}

export default ExperienceInfo;
