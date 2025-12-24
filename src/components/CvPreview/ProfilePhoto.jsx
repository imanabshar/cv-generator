function ProfilePhoto({ photo }) {
  if (!photo) return null;

  return (
    <div className="mb-6">
      <img
        src={photo}
        alt="Profile"
        className="w-56 h-48 object-cover"
      />
    </div>
  );
}

export default ProfilePhoto;
