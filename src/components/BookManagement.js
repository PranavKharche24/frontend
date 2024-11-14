import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import BookForm from './BookForm';
import BookList from './BookList';
import ContactForm from './ContactForm';

export default function BookManagement() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [activeTab, setActiveTab] = useState('books');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleAddBook = async (newBook) => {
    try {
      await axios.post('http://localhost:5000/api/books', newBook);
      fetchBooks();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleUpdateBook = async (updatedBook) => {
    try {
      await axios.put(`http://localhost:5000/api/books/${updatedBook.id}`, updatedBook);
      fetchBooks();
      setEditingBook(null);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-gray-800"
      >
        Book Management System
      </motion.h1>

      <div className="mb-8 flex justify-center space-x-4">
        <button
          onClick={() => setActiveTab('books')}
          className={`px-4 py-2 rounded transition duration-300 ${
            activeTab === 'books' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Books
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className={`px-4 py-2 rounded transition duration-300 ${
            activeTab === 'contact' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Contact
        </button>
      </div>

      {activeTab === 'books' ? (
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {editingBook ? 'Edit Book' : 'Add New Book'}
            </h2>
            <BookForm
              onSubmit={editingBook ? handleUpdateBook : handleAddBook}
              initialBook={editingBook}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Book List</h2>
            <BookList
              books={books}
              onEdit={setEditingBook}
              onDelete={handleDeleteBook}
            />
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <ContactForm />
        </motion.div>
      )}
    </div>
  );
}