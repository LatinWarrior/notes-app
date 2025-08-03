const TextAreaInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className='mb-4'>
      <label className='block font-semibold' htmlFor={name}>
        {label}
      </label>
      <textarea
        name={name}
        type='text'
        value={value}
        required={required}
        onChange={onChange}
        className='w-full p-2 border border-gray-300 rounded-lg'></textarea>
    </div>
  );
};

export default TextAreaInput;
