function ContactSection({ contactInfo }) {
  const hasContactInfo =
    contactInfo.phone ||
    contactInfo.email ||
    contactInfo.location ||
    contactInfo.linkedin;

  if (!hasContactInfo) return null;

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Contact</h2>
      <div className="flex flex-col gap-1">
        {contactInfo.phone && <p>Phone: {contactInfo.phone}</p>}
        {contactInfo.email && <p>Email: {contactInfo.email}</p>}
        {contactInfo.location && <p>Location: {contactInfo.location}</p>}
        {contactInfo.linkedin && <p>LinkedIn: {contactInfo.linkedin}</p>}
      </div>
    </div>
  );
}

export default ContactSection;
