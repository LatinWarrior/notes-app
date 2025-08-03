import { useState } from 'react';

const NoteForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className='mb-6 '>
      <div className='mb-4'>
        <label className='block font-semibold' htmlFor='title'>
          Title
        </label>
        <input
          name='title'
          type='text'
          id='title'
          value={formData.title}
          onChange={handleChange}
          className='w-full p-2 border border-gray-300 rounded-lg'
        />
      </div>
      <div className='mb-4'>
        <label className='block font-semibold' htmlFor='priority'>
          Priority
        </label>
        <select
          name='priority'
          type='text'
          id='priority'
          value={formData.priority}
          onChange={handleChange}
          className='w-full p-2 border border-gray-300 rounded-lg'>
          <option value='High'>🔴 High</option>
          <option value='Medium'>🟠 Medium</option>
          <option value='Low'>🟢 Low</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block font-semibold'>Category:</label>
        <select
          name='category'
          value={formData.category}
          onChange={handleChange}
          className='w-full p-2 border rounded-lg'>
          <option value='Work'>📂 Work</option>
          <option value='Personal'>🏠 Personal</option>
          <option value='Ideas'>💡 Ideas</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block font-semibold' htmlFor='title'>
          Description
        </label>
        <textarea
          name='description'
          type='text'
          id='description'
          value={formData.description}
          onChange={handleChange}
          className='w-full p-2 border border-gray-300 rounded-lg'></textarea>
      </div>
      <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600'>
        Submit
      </button>
    </form>
  );
};

export default NoteForm;
