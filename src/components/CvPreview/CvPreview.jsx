import ProfilePhoto from "./ProfilePhoto";
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
    <div className="w-full min-h-96 md:min-h-screen flex shadow rounded-md">
      {/* Left Column */}

      <div className="py-6 px-4 sm:px-6 w-[45%] sm:w-[30%] bg-gray-950">
        <ProfilePhoto photo={personalInfo.photo} />
        <ContactSection contactInfo={contactInfo} />
        <SkillsSection skills={skills} />
      </div>

      {/* Right Column */}
      <div className="py-8 px-4 md:px-10 w-[65%] sm:w-[70%] border bg-white">
        <PersonalInfoSection personalInfo={personalInfo} />
        <EducationSection educationInfo={educationInfo} />
        <ExperienceSection experienceInfo={experienceInfo} />
      </div>
    </div>
  );
}

export default CvPreview;
