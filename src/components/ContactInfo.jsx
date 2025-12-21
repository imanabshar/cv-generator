import Input from "./Input";

function ContactInfo({ contactInfo, setContactInfo }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  }

  return (
    <div className="p-4 border w-full max-w-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Contact</h2>

      <Input
        label="Phone Number"
        name="phone"
        type="text"
        placeholder="Enter Phone Number"
        value={contactInfo.phone}
        onChange={handleChange}
      />

      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter Email"
        value={contactInfo.email}
        onChange={handleChange}
      />

      <Input
        label="Location"
        name="location"
        type="text"
        placeholder="Enter Location"
        value={contactInfo.location}
        onChange={handleChange}
      />

      <Input
        label="LinkedIn URL"
        name="linkedin"
        type="text"
        placeholder="Enter LinkedIn Profile URL"
        value={contactInfo.linkedin}
        onChange={handleChange}
      />
    </div>
  );
}

export default ContactInfo;
