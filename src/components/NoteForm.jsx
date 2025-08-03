import { useState } from 'react';

import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form after submission
    if (!formData.title || !formData.description) {
      alert('Please fill in all fields');
      return;
    }

    // Create notes object.
    const newNote = {
      id: Date.now(), // Unique ID based on timestamp
      ...formData,
    };

    // Add notes to state.
    setNotes([newNote, ...notes]);
    // Reset form data
    setFormData({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
  };

  return (
    <>
      {/* Button to toggle form visibility */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className='w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4'>
        {isFormVisible ? 'Hide Form ✖️' : 'Add New Note ➕'}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className='mb-6 '>
          <TextInput
            label='Title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />

          <SelectInput
            label='Priority'
            name='priority'
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: 'High', label: '🔴 High' },
              { value: 'Medium', label: '🟠 Medium' },
              { value: 'Low', label: '🟢 Low' },
            ]}
          />

          <SelectInput
            label='Category'
            name='category'
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: 'Work', label: '📂 Work' },
              { value: 'Personal', label: '🏠 Personal' },
              { value: 'Ideas', label: '💡 Ideas' },
            ]}
          />
          <TextAreaInput
            label='Description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600'>
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
