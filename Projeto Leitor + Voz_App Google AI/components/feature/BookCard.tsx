
import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../../types';

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="flex-shrink-0 w-36 cursor-pointer group"
      onClick={onClick}
    >
      <div className="rounded-lg overflow-hidden shadow-lg bg-card-light mb-2 relative">
        <img src={book.cover} alt={book.title} className="w-full h-52 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
            <motion.div 
                className="h-1 bg-highlight"
                initial={{ width: 0 }}
                animate={{ width: `${book.progress}%`}}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            />
        </div>
      </div>
      <h3 className="text-sm font-bold text-text-primary truncate group-hover:text-highlight transition-colors">{book.title}</h3>
      <p className="text-xs text-gray-400 truncate">{book.author}</p>
    </motion.div>
  );
};

export default BookCard;
