import { useState } from "react";

function Experience() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="p-4 border w-full max-w-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>

      <div className="mb-4">
        <label htmlFor="jobTitle" className="block mb-1 font-medium">
          Job Title
        </label>
        <input
          id="jobTitle"
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="block mb-1 font-medium">
          Company
        </label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="location" className="block mb-1 font-medium">
          Location
        </label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label htmlFor="startDate" className="block mb-1 font-medium">
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="endDate" className="block mb-1 font-medium">
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-1 font-medium">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded px-2 py-1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
}

export default Experience;
