
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/feature/Header';
import BookCard from '../components/feature/BookCard';
import { MOCK_CATEGORIES } from '../constants';
import useLocalStorage from '../hooks/useLocalStorage';
import { Book } from '../types';

const BackButton = () => {
    const navigate = useNavigate();
    return (
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-highlight opacity-80 hover:opacity-100 transition-opacity mb-4"
        aria-label="Voltar para a página inicial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline font-medium">Voltar</span>
      </button>
    );
};

const LibraryPage: React.FC = () => {
    const navigate = useNavigate();
    const [uploadedBooks, setUploadedBooks] = useLocalStorage<Book[]>('bibliotecaLivros', []);

    const handleUpload = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target?.result) {
                const newBook: Book = {
                    id: Date.now(),
                    title: file.name.replace(/\.(pdf|epub)$/i, ''),
                    author: 'Arquivo Local',
                    cover: `https://picsum.photos/seed/${file.name}/300/450`,
                    progress: 0,
                    content: e.target.result as string, // Storing as Data URL
                };
                setUploadedBooks(prevBooks => [newBook, ...prevBooks]);
            }
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="relative pb-24">
            <div className="p-4 md:p-6">
                <BackButton />
                <Header onFileUpload={handleUpload} />
            </div>

            <main className="flex flex-col gap-8 px-4 md:px-6">
                {uploadedBooks.length > 0 && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 }}
                    >
                        <h2 className="text-2xl font-display text-text-primary mb-4">Meus Livros</h2>
                        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
                            {uploadedBooks.map(book => (
                                <BookCard key={book.id} book={book} onClick={() => navigate(`/reader/${book.id}`)} />
                            ))}
                        </div>
                    </motion.section>
                )}

                {MOCK_CATEGORIES.map((category, index) => (
                    <motion.section 
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (uploadedBooks.length > 0 ? 0.1 : 0) + index * 0.1 }}
                    >
                        <h2 className="text-2xl font-display text-text-primary mb-4">{category.title}</h2>
                        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
                            {category.books.map(book => (
                                <BookCard key={book.id} book={book} onClick={() => navigate(`/reader/${book.id}`)} />
                            ))}
                        </div>
                    </motion.section>
                ))}
            </main>
        </div>
    );
};

export default LibraryPage;