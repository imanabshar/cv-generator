import ContactSection from "./ContactSection";
import SkillsSection from "./SkillsSection";
import PersonalInfoSection from "./PersonalInfoSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

function CvPreview({
  contactInfo,
  skills,
  personalInfo,
  educationInfo,
  experienceInfo,
}) {
  return (
    <div className="w-full min-h-screen flex">
      {/* Left Column */}
      <div className="py-6 px-10 w-[40%] bg-gray-950">
        <ContactSection contactInfo={contactInfo} />
        <SkillsSection skills={skills} />
      </div>

      {/* Right Column */}
      <div className="py-8 px-10 w-[60%] border">
        <PersonalInfoSection personalInfo={personalInfo} />
        <EducationSection educationInfo={educationInfo} />
        <ExperienceSection experienceInfo={experienceInfo} />
      </div>
    </div>
  );
}

export default CvPreview;
