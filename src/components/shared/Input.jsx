function Input({ label, name, type, placeholder, value, onChange, rows }) {
  // for textarea in experience and personal Info
  if (type === "textarea") {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block mb-1 font-medium">
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full border rounded px-2 py-1"
          rows={rows}
        />
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border rounded px-2 py-1"
      />
    </div>
  );
}

export default Input;
