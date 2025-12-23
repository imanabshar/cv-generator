import DropDown from "./DropDown";

function FormBlock({ title, icon, children }) {
  return (
    <div className="w-[90%] px-6 py-6 rounded-xl bg-white shadow">
      <DropDown title={title} icon={icon}>
        {children}
      </DropDown>
    </div>
  );
}

export default FormBlock;
