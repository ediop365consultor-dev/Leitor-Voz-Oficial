import React from 'react';

export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  progress: number;
  content: string;
}

export interface Category {
  title: string;
  books: Book[];
}

export interface OnboardingSlide {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  imageUrl: string;
}

export enum AuthMode {
  Login = 'login',
  Signup = 'signup'
}