import FormBlock from "../shared/FormBlock";
import Input from "../shared/Input";
import { FaUser } from "react-icons/fa";

function PersonalInfo({ personalInfo, setPersonalInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  return (
    <FormBlock title="Profile" icon={<FaUser />}>
      <Input
        label="Full Name"
        name="name"
        type="text"
        placeholder="Enter Full Name"
        value={personalInfo.name}
        onChange={handleChange}
      />

      <Input
        label="Position / Title"
        name="title"
        type="text"
        placeholder="Enter Your Position"
        value={personalInfo.title}
        onChange={handleChange}
      />

      <Input
        label="Career Objective"
        name="objective"
        type="textarea"
        placeholder="Enter a short career objective"
        value={personalInfo.objective}
        onChange={handleChange}
        rows={2}
      />
    </FormBlock>
  );
}

export default PersonalInfo;
