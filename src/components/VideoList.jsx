import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos, onDelete }) => {
    return (
        <div className="grid-container">
            {videos.map((video) => (
                <VideoCard key={video.id} video={video} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default VideoList;
