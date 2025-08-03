const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className='mb-4'>
      <label className='block font-semibold' htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        required={required}
        id={name}
        value={value}
        onChange={onChange}
        className='w-full p-2 border border-gray-300 rounded-lg'
      />
    </div>
  );
};

export default TextInput;
