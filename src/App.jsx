import { useState } from "react";

import PersonalInfo from "./components/InfoForms/PersonalInfo";
import EducationInfo from "./components/InfoForms/EducationInfo";
import ExperienceInfo from "./components/InfoForms/ExperienceInfo";
import ContactInfo from "./components/InfoForms/ContactInfo";
import Skills from "./components/InfoForms/Skills";
import CvPreview from "./components/CvPreview/CvPreview";
import logoImg from "./assets/logo.png";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    title: "",
    objective: "",
    photo: null,
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
    <div className="w-full p-10 flex gap-10 bg-gray-100">
      {/* Forms Column */}
      <div className="w-[30%] flex flex-col gap-4 items-center">
        <div className="flex items-center justify-center mb-4">
          <img src={logoImg} alt="" className="w-[60px]" />
          <h1
            className="text-4xl font-extrabold text-center mb-2
               bg-gradient-to-r from-slate-600 to-blue-600
               bg-clip-text text-transparent"
          >
            CV GENERATOR
          </h1>
        </div>

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
