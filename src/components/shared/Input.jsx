function Input({ label, name, type, placeholder, value, onChange, rows }) {
   // for textarea in experience and personal Info
  if (type === "textarea") {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block mb-2 font-semibold">
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full border bg-gray-100 rounded-md px-3 py-2 outline-none 
         focus:border-black transition-shadow placeholder-gray-500"
          rows={rows}
        />
      </div>
    );
  }

  return (
    <div className="my-4">
      <label htmlFor={name} className="block mb-2 font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border bg-gray-100 rounded-md px-3 py-2 outline-none 
         focus:border-black transition-shadow placeholder-gray-500"
      />
    </div>
  );
}

export default Input;
