// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import VideoCard from '../components/VideoCard';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [videosByCategory, setVideosByCategory] = useState({});

  useEffect(() => {
    const loadVideos = () => {
      const savedVideos = JSON.parse(localStorage.getItem('videos') || '[]');
      setVideos(savedVideos);

      // Group videos by category
      const grouped = savedVideos.reduce((acc, video) => {
        if (!acc[video.category]) {
          acc[video.category] = [];
        }
        acc[video.category].push(video);
        return acc;
      }, {});
      setVideosByCategory(grouped);
    };

    loadVideos();
  }, []);

  const handleDelete = (videoId) => {
    const updatedVideos = videos.filter(video => video.id !== videoId);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
    setVideos(updatedVideos);
    
    // Update categorized videos
    const grouped = updatedVideos.reduce((acc, video) => {
      if (!acc[video.category]) {
        acc[video.category] = [];
      }
      acc[video.category].push(video);
      return acc;
    }, {});
    setVideosByCategory(grouped);
  };

  return (
    <Container>
      {Object.entries(videosByCategory).length === 0 ? (
        <Box sx={{ 
          textAlign: 'center', 
          py: 8,
          backgroundColor: 'background.paper',
          borderRadius: 1,
          mb: 3
        }}>
          <Typography variant="h5" color="text.secondary">
            No videos added yet. Click on "New Video" to add your first video!
          </Typography>
        </Box>
      ) : (
        Object.entries(videosByCategory).map(([category, categoryVideos]) => (
          <Box key={category} sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
              {category}
            </Typography>
            <Grid container spacing={3}>
              {categoryVideos.map((video) => (
                <Grid item xs={12} sm={6} md={4} key={video.id}>
                  <VideoCard video={video} onDelete={handleDelete} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))
      )}
    </Container>
  );
};

export default Home;