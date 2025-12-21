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
        label="Email"
        name="email"
        type="email"
        placeholder="Enter Email "
        value={personalInfo.email}
        onChange={handleChange}
      />

      <Input
        label="Phone Number"
        name="phone"
        type="text"
        placeholder="Enter Phone Number"
        value={personalInfo.phone}
        onChange={handleChange}
      />

      <Input
        label="Address"
        name="address"
        type="text"
        placeholder="Enter Addresss"
        value={personalInfo.address}
        onChange={handleChange}
      />
    </div>
  );
}

export default PersonalInfo;
