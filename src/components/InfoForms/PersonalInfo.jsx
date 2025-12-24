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

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const photoURL = URL.createObjectURL(file);

    setPersonalInfo({
      ...personalInfo,
      photo: photoURL,
    });
  };

  return (
    <FormBlock title="Profile" icon={<FaUser />}>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Profile Photo</label>

        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="block w-full 
               file:px-4 file:py-2
               file:bg-blue-700 file:text-white
                file:border-0
                file:mr-3
               file:cursor-pointer
               hover:file:bg-blue-800
               border bg-gray-100  text-gray-500 rounded-md"
        />
      </div>

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
