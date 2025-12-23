import FormBlock from "../shared/FormBlock";
import Input from "../shared/Input";
import { FaPhoneAlt } from "react-icons/fa";

function ContactInfo({ contactInfo, setContactInfo }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  }

  return (
    <FormBlock title="Contact" icon={<FaPhoneAlt />}>
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
    </FormBlock>
  );
}

export default ContactInfo;
