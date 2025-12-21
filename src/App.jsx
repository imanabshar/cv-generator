import { useState } from "react";

import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import ContactInfo from "./components/contactInfo";
import Skills from "./components/Skills";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    title: "",
    objective: "",
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

  const [contactInfo, setContactInfo] = useState({
    phone: "",
    email: "",
    location: "",
    linkedin: "",
  });

  const [skills, setSkills] = useState([]);

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

      <ContactInfo 
      contactInfo={contactInfo} 
      setContactInfo={setContactInfo} />

      <Skills 
      skills={skills} 
      setSkills={setSkills} />
    </div>
  );
}

export default App;
