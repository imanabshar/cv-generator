import { useState } from "react";

function PersonalInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="p-4 border w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-medium">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1 font-medium">
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block mb-1 font-medium">
          Address
        </label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
