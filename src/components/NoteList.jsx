import Note from './Note';

const NodeList = ({ notes, deleteNote }) => {
  if (!notes || notes.length === 0) {
    return <p className='text-center text-gray-500'>No Notes yes</p>;
  }

  return (
    <div className='space-y-4'>
      {notes.map((note) => {
        return <Note key={note.id} note={note} deleteNote={deleteNote} />;
      })}
    </div>
  );
};

export default NodeList;
