import { useState } from 'react';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('Work');
  const [description, setDescription] = useState('');

  return (
    <form className='mb-6 '>
      <div className='mb-4'>
        <label className='block font-semibold' htmlFor='title'>
          Title
        </label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded-lg'
        />
      </div>
      <div className='mb-4'>
        <label className='block font-semibold' htmlFor='priority'>
          Priority
        </label>
        <select
          type='text'
          id='priority'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
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
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          type='text'
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded-lg'></textarea>
      </div>
      <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600'>
        Submit
      </button>
    </form>
  );
};

export default NoteForm;
