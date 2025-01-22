import React, { useState } from 'react';
import VideoForm from '../components/VideoForm';
import Confetti from 'react-confetti';
import { Alert } from '@mui/material';

const NewVideo = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSave = (videoData) => {
    console.log('Saved Video:', videoData);

    setShowConfetti(true);
    setSuccessMessage('¡Video creado exitosamente!');

    setTimeout(() => {
      setShowConfetti(false);
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div>
      {showConfetti && <Confetti />}
      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}
      <VideoForm onSave={handleSave} />
    </div>
  );
};

export default NewVideo;
