import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ONBOARDING_SLIDES } from '../constants';
import Button from '../components/base/Button';

const OnboardingPage: React.FC = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < ONBOARDING_SLIDES.length - 1) {
      setStep(step + 1);
    } else {
      handleStart();
    }
  };

  const handleSkip = () => {
    handleStart();
  };

  const handleStart = () => {
    localStorage.setItem('onboardingComplete', 'true');
    navigate('/auth');
  };

  const currentSlide = ONBOARDING_SLIDES[step];

  return (
    <div className="relative min-h-screen bg-background text-text-primary flex flex-col justify-between p-6 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={step}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentSlide.imageUrl})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>

      <div className="relative z-10 flex justify-end">
        {step < ONBOARDING_SLIDES.length - 1 && (
          <Button variant="ghost" onClick={handleSkip}>Pular</Button>
        )}
      </div>

      <div className="relative z-10 flex-grow flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-black/20 p-6 rounded-full inline-block">
              <currentSlide.Icon />
            </div>
            <h1 className="text-3xl font-display text-highlight mt-8 mb-4">{currentSlide.title}</h1>
            <p className="text-gray-300 max-w-sm mx-auto">{currentSlide.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex space-x-2 my-6">
          {ONBOARDING_SLIDES.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${step === index ? 'bg-highlight w-6' : 'bg-card-light'}`}
            />
          ))}
        </div>
        <div className="w-full max-w-xs">
          <Button onClick={handleNext} className="w-full">
            {step < ONBOARDING_SLIDES.length - 1 ? 'Próximo' : 'Começar'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;