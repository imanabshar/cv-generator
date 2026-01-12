import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

function ContactSection({ contactInfo }) {
  const hasContactInfo =
    contactInfo.phone ||
    contactInfo.email ||
    contactInfo.location ||
    contactInfo.linkedin;

  if (!hasContactInfo) return null;

  const itemClass = "flex items-center gap-2";

  return (
    <div className="mt-4 text-white">
      <h2 className="text-xl sm:text-2xl font-semibold mb-5">Contact</h2>
      <div className="flex flex-col gap-4 sm:gap-5 text-sm sm:text-base">
        {contactInfo.phone && (
          <p className={itemClass}>
            <FaPhone /> {contactInfo.phone}
          </p>
        )}
        {contactInfo.email && (
          <p className={itemClass}>
            <FaEnvelope /> {contactInfo.email}
          </p>
        )}
        {contactInfo.location && (
          <p className={itemClass}>
            <FaMapMarkerAlt /> {contactInfo.location}
          </p>
        )}
        {contactInfo.linkedin && (
          <p className={itemClass}>
            <FaLinkedin /> {contactInfo.linkedin}
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactSection;
