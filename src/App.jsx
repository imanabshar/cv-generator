import { useState } from "react";

import PersonalInfo from "./components/InfoForms/PersonalInfo";
import EducationInfo from "./components/InfoForms/EducationInfo";
import ExperienceInfo from "./components/InfoForms/ExperienceInfo";
import ContactInfo from "./components/InfoForms/ContactInfo";
import Skills from "./components/InfoForms/Skills";
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
    location: "",
    startDate: "",
    endDate: "",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    jobTitle: "",
    company: "",
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
    <div className="w-full p-10 flex gap-12">
      {/* Forms Column */}
      <div className="w-[30%]">
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

      {/*CV Preview */}
      <div className="w-[70%]">
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
