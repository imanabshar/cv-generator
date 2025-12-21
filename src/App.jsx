import { useState } from "react";

import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import ContactInfo from "./components/contactInfo";
import Skills from "./components/Skills";
import CvPreview from "./components/CvPreview/CvPreview";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    title: "",
    objective: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    degree: "",
    school: "",
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
    <div className="m-10 flex gap-12">
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
          setContactInfo={setContactInfo}
        />

        <Skills skills={skills} setSkills={setSkills} />
      </div>

      <div>
        <CvPreview
          contactInfo={contactInfo}
          skills={skills}
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </div>
    </div>
  );
}

export default App;
