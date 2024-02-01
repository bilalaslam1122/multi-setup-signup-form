import React, { useState,useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { signUpDataState } from '../atoms';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../Firebase/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';

const SignUp = () => {
  const signUpData = useRecoilValue(signUpDataState);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleComplete = async () => {
    try {
      const { email, password } = signUpData;

      if (!isValidEmail(email)) {
        console.error('Invalid email format');
        return;
      }

      const docRef = await addDoc(collection(db, 'users'), signUpData);
      console.log('Document written with ID: ', docRef.id);

      await createUserWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating user or adding document: ', error);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
      {step === 3 && <Step3 onNext={handleNext} onPrev={handlePrev} />}
      {step === 4 && <Step4 onComplete={handleComplete} onPrev={handlePrev} />}
    </div>
  );
};

export default SignUp;
