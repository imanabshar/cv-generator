import { useState } from "react";

import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    field: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    jobTitle: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  return (
    <div>
      <PersonalInfo
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />

      <EducationInfo
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />

      <ExperienceInfo
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
      />
    </div>
  );
}

export default App;
