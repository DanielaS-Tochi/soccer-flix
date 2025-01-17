// src/pages/NewVideo.jsx
import React from 'react';
import VideoForm from '../components/VideoForm';

const NewVideo = () => {
    const handleSave = (videoData) => {
        console.log(videoData);
    };

    return (
        <div>
            <VideoForm onSave={handleSave} />
        </div>
    );
};

export default NewVideo;