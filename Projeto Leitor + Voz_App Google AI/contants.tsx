import { Book, Category, OnboardingSlide } from './types';
import React from 'react';

// Icons
export const LibraryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  </svg>
);

export const VoiceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.636 5.636a9 9 0 0112.728 0M8.464 15.536a5 5 0 010-7.072" />
  </svg>
);

export const CustomizeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    title: 'Sua Biblioteca Digital',
    description: 'Acesse todos os seus livros em um só lugar, a qualquer hora.',
    Icon: LibraryIcon,
    imageUrl: 'https://images.unsplash.com/photo-1558901357-ca42132d0752?auto=format&fit=crop&q=80&w=1920',
  },
  {
    title: 'Leitura em Voz Alta',
    description: 'Ouça seus livros com vozes naturais potencializadas por IA.',
    Icon: VoiceIcon,
    imageUrl: 'https://images.unsplash.com/photo-1593998066526-65fcab3021f2?auto=format&fit=crop&q=80&w=1920',
  },
  {
    title: 'Personalize sua Experiência',
    description: 'Ajuste a aparência e a leitura para o seu conforto.',
    Icon: CustomizeIcon,
    imageUrl: 'https://images.unsplash.com/photo-1512403754433-2829a239f3a5?auto=format&fit=crop&q=80&w=1920',
  },
];

const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Proin sed quam. Sed scelerisque scelerisque urna. ";

export const MOCK_BOOKS: Book[] = [
    { id: 1, title: 'A Arte da Guerra', author: 'Sun Tzu', cover: 'https://picsum.photos/seed/1/300/450', progress: 75, content: LOREM_IPSUM.repeat(50) },
    { id: 2, title: 'O Príncipe', author: 'Maquiavel', cover: 'https://picsum.photos/seed/2/300/450', progress: 40, content: LOREM_IPSUM.repeat(40) },
    { id: 3, title: '1984', author: 'George Orwell', cover: 'https://picsum.photos/seed/3/300/450', progress: 90, content: LOREM_IPSUM.repeat(60) },
    { id: 4, title: 'O Poder do Hábito', author: 'Charles Duhigg', cover: 'https://picsum.photos/seed/4/300/450', progress: 15, content: LOREM_IPSUM.repeat(30) },
    { id: 5, title: 'Sapiens', author: 'Yuval Noah Harari', cover: 'https://picsum.photos/seed/5/300/450', progress: 0, content: LOREM_IPSUM.repeat(70) },
    { id: 6, title: 'Mindset', author: 'Carol S. Dweck', cover: 'https://picsum.photos/seed/6/300/450', progress: 100, content: LOREM_IPSUM.repeat(25) },
    { id: 7, title: 'Rápido e Devagar', author: 'Daniel Kahneman', cover: 'https://picsum.photos/seed/7/300/450', progress: 25, content: LOREM_IPSUM.repeat(45) },
    { id: 8, title: 'O Hobbit', author: 'J.R.R. Tolkien', cover: 'https://picsum.photos/seed/8/300/450', progress: 5, content: LOREM_IPSUM.repeat(55) },
];

export const MOCK_CATEGORIES: Category[] = [
    { title: 'Em andamento', books: MOCK_BOOKS.filter(b => b.progress > 0 && b.progress < 100) },
    { title: 'Recomendados para você', books: [...MOCK_BOOKS].sort(() => 0.5 - Math.random()).slice(0, 4) },
    { title: 'Autoajuda', books: [MOCK_BOOKS[3], MOCK_BOOKS[5], MOCK_BOOKS[6]] },
    { title: 'Ficção Clássica', books: [MOCK_BOOKS[2], MOCK_BOOKS[7]] },
];