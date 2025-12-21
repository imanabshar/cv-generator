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
    <div className="flex gap-6 p-6 border">
  {/* Left Column */}
  <div className="flex-1 border-r border-gray-300 pr-4">
    <ContactSection contactInfo={contactInfo} />
    <SkillsSection skills={skills} />
  </div>

  {/* Right Column */}
  <div className="flex-2 pl-4">
    <PersonalInfoSection personalInfo={personalInfo} />
    <EducationSection educationInfo={educationInfo} />
    <ExperienceSection experienceInfo={experienceInfo} />
  </div>
</div>

  );
}

export default CvPreview;
