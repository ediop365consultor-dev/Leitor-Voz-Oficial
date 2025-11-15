
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_BOOKS } from '../constants';
import BookCard from '../components/feature/BookCard';

const WishlistPage: React.FC = () => {
    const navigate = useNavigate();
    // For this mock, we'll just show a few random books as the wishlist
    const wishlistBooks = MOCK_BOOKS.slice(0, 4);

    return (
        <div className="p-4 md:p-6 pb-24">
            <h1 className="text-3xl md:text-4xl font-display text-highlight mb-6">Lista de Desejos</h1>
            {wishlistBooks.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {wishlistBooks.map(book => (
                         <div key={book.id} className="flex flex-col items-center">
                            <BookCard book={book} onClick={() => navigate(`/reader/${book.id}`)} />
                         </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-gray-400">Sua lista de desejos está vazia.</p>
                </div>
            )}
        </div>
    );
};

export default WishlistPage;
