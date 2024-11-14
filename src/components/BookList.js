import React from 'react';
import { motion } from 'framer-motion';

export default function BookList({ books, onEdit, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <motion.div
          key={book.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="border rounded p-4 shadow-sm bg-white"
        >
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <p className="text-gray-600">By {book.author}</p>
          <p className="text-gray-500">Published: {book.year}</p>
          <div className="mt-4 space-x-2">
            <button
              onClick={() => onEdit(book)}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-300"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(book.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}