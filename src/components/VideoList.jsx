// src/pages/Home.jsx
import React from 'react';
import VideoList from '../components/VideoList';

const Home = () => {
    const [videos, setVideos] = React.useState([
        { id: 1, title: 'Video 1', description: 'Description 1', imageUrl: 'https://example.com/image1.jpg' },
        { id: 2, title: 'Video 2', description: 'Description 2', imageUrl: 'https://example.com/image2.jpg' },
    ]);

    return (
        <div>
            <VideoList videos={videos} />
        </div>
    );
};

export default Home;