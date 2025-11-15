
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MOCK_BOOKS } from '../constants';
import Modal from '../components/base/Modal';
import Button from '../components/base/Button';
import useLocalStorage from '../hooks/useLocalStorage';
import { generateSummary, askQuestionAboutText, generateTextToSpeech } from '../services/geminiService';
import { Book } from '../types';

const CHARS_PER_PAGE = 1500;

const ReaderPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [uploadedBooks] = useLocalStorage<Book[]>('bibliotecaLivros', []);
  const book = useMemo(() => {
    const allBooks = [...MOCK_BOOKS, ...uploadedBooks];
    return allBooks.find(b => b.id === Number(id));
  }, [id, uploadedBooks]);

  const [progress, setProgress] = useLocalStorage(`book-progress-${id}`, { page: 0 });
  const [currentPage, setCurrentPage] = useState(progress.page);

  const [fontSize, setFontSize] = useLocalStorage('reader-font-size', 16);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);

  const isUploadedFile = useMemo(() => book?.content.startsWith('data:') ?? false, [book]);

  const pages = useMemo(() => {
    if (!book || isUploadedFile) return [];
    const pagesArray = [];
    for (let i = 0; i < book.content.length; i += CHARS_PER_PAGE) {
      pagesArray.push(book.content.substring(i, i + CHARS_PER_PAGE));
    }
    return pagesArray;
  }, [book, isUploadedFile]);
  
  useEffect(() => {
      setProgress({ page: currentPage });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  
  if (!book) {
    return <div className="p-4 text-text-primary">Livro não encontrado.</div>;
  }

  if (isUploadedFile) {
    return (
      <div className="flex flex-col h-screen bg-background text-text-primary">
        <header className="flex items-center justify-between p-4 bg-card shadow-md z-10">
          <button onClick={() => navigate(-1)} className="text-highlight">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="text-center">
            <h1 className="text-lg font-bold truncate max-w-[200px]">{book.title}</h1>
            <p className="text-sm text-gray-400">{book.author}</p>
          </div>
          <div className="w-6" />
        </header>
        <main className="flex-grow p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-display text-highlight mb-4">Em Breve!</h2>
          <p>A visualização de arquivos PDF e EPUB está em desenvolvimento.</p>
          <p className="text-sm text-gray-400 mt-2">Você adicionou este livro da sua máquina local.</p>
        </main>
      </div>
    );
  }


  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSummarize = async () => {
    setIsLoading(true);
    setModalContent({ title: 'Resumo ✨', content: 'Gerando resumo...' });
    setIsModalOpen(true);
    const summary = await generateSummary(pages[currentPage]);
    setModalContent({ title: 'Resumo ✨', content: summary });
    setIsLoading(false);
  };

  const handleAsk = async () => {
    if (!question) return;
    setIsLoading(true);
    setModalContent({ title: 'Pergunta 💬', content: 'Pensando...' });
    setIsModalOpen(true);
    const answer = await askQuestionAboutText(question, pages[currentPage]);
    setModalContent({ title: 'Pergunta 💬', content: answer });
    setQuestion('');
    setIsLoading(false);
  };

  const handleListen = async () => {
    if (isPlaying && audioSource) {
      audioSource.stop();
      setIsPlaying(false);
      setAudioSource(null);
      return;
    }
    setIsLoading(true);
    const audioBuffer = await generateTextToSpeech(pages[currentPage]);
    setIsLoading(false);
    if (audioBuffer) {
      const audioContext = new (window.AudioContext)({ sampleRate: 24000 });
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.onended = () => setIsPlaying(false);
      source.start();
      setAudioSource(source);
      setIsPlaying(true);
    }
  };


  const bookProgress = ((currentPage + 1) / pages.length) * 100;

  return (
    <div className="flex flex-col h-screen bg-background text-text-primary">
      <header className="flex items-center justify-between p-4 bg-card shadow-md z-10">
        <button onClick={() => navigate(-1)} className="text-highlight">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="text-center">
          <h1 className="text-lg font-bold truncate max-w-[200px]">{book.title}</h1>
          <p className="text-sm text-gray-400">{book.author}</p>
        </div>
        <div className="flex items-center gap-4">
            <button onClick={() => setFontSize(s => Math.max(12, s - 2))} className="text-highlight text-sm">A-</button>
            <button onClick={() => setFontSize(s => Math.min(24, s + 2))} className="text-highlight text-lg">A+</button>
        </div>
      </header>

      <main className="flex-grow p-6 overflow-y-auto" style={{ fontSize: `${fontSize}px` }}>
        <p className="whitespace-pre-wrap leading-relaxed">{pages[currentPage]}</p>
      </main>

      <footer className="bg-card shadow-inner p-4 z-10">
        <div className="flex justify-center items-center gap-4 mb-4">
            <Button onClick={handleListen} disabled={isLoading} variant="secondary">
                {isLoading && isPlaying === false ? 'Carregando...' : isPlaying ? 'Parar 🔊' : 'Ouvir 🔊'}
            </Button>
            <Button onClick={handleSummarize} disabled={isLoading} variant="secondary">Resumo ✨</Button>
        </div>
        <div className="flex gap-2 mb-4">
            <input type="text" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Pergunte sobre o texto..." className="flex-grow bg-card-light border border-gray-600 rounded-lg py-2 px-3 text-text-primary focus:outline-none focus:ring-1 focus:ring-highlight" />
            <Button onClick={handleAsk} disabled={isLoading || !question}>💬</Button>
        </div>
        <div className="w-full bg-card-light rounded-full h-1.5 mb-2">
            <motion.div className="bg-highlight h-1.5 rounded-full" style={{ width: `${bookProgress}%` }} />
        </div>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <Button onClick={handlePrevPage} disabled={currentPage === 0}>Anterior</Button>
          <span>Página {currentPage + 1} de {pages.length}</span>
          <Button onClick={handleNextPage} disabled={currentPage === pages.length - 1}>Próxima</Button>
        </div>
      </footer>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalContent.title}>
        <div className="whitespace-pre-wrap">{modalContent.content}</div>
      </Modal>
    </div>
  );
};

export default ReaderPage;