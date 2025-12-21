import Input from "./Input";

function PersonalInfo({ personalInfo, setPersonalInfo }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  }

  return (
    <div className="p-4 border w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

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
        type="text"
        placeholder="Enter a short career objective"
        value={personalInfo.objective}
        onChange={handleChange}
      />
    </div>
  );
}

export default PersonalInfo;
