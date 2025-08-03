const SelectInput = ({ label, name, value, onChange, options }) => {
  return (
    <div className='mb-4'>
      <label className='block font-semibold' htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id='{name}'
        value={value}
        onChange={onChange}
        className='w-full p-2 border border-gray-300 rounded-lg'>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
