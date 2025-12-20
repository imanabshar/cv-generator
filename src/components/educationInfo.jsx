import { useState } from "react";

function Education() {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="p-4 border w-full max-w-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Education</h2>

      <div className="mb-4">
        <label htmlFor="school" className="block mb-1 font-medium">
          School/College
        </label>
        <input
          id="school"
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="degree" className="block mb-1 font-medium">
          Degree
        </label>
        <input
          id="degree"
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="field" className="block mb-1 font-medium">
          Field of Study
        </label>
        <input
          id="field"
          type="text"
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label htmlFor="city" className="block mb-1 font-medium">
            City
          </label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="country" className="block mb-1 font-medium">
            Country
          </label>
          <input
            id="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        </div>
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
    </div>
  );
}

export default Education;
