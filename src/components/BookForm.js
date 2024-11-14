import React, { useState } from 'react';

export default function BookForm({ onSubmit, initialBook = null }) {
  const [book, setBook] = useState(initialBook || { title: '', author: '', year: '' });

  const handleInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
    if (!initialBook) {
      setBook({ title: '', author: '', year: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={book.title}
        onChange={handleInputChange}
        placeholder="Book Title"
        className="w-full border rounded px-3 py-2 transition duration-300 focus:ring-2 focus:ring-blue-300"
        required
      />
      <input
        type="text"
        name="author"
        value={book.author}
        onChange={handleInputChange}
        placeholder="Author"
        className="w-full border rounded px-3 py-2 transition duration-300 focus:ring-2 focus:ring-blue-300"
        required
      />
      <input
        type="number"
        name="year"
        value={book.year}
        onChange={handleInputChange}
        placeholder="Publication Year"
        className="w-full border rounded px-3 py-2 transition duration-300 focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        {initialBook ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
}