import { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
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
    <Box sx={{ width: '100%' }}>
      {Object.entries(videosByCategory).length === 0 ? (
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 8, md: 12 },
            px: { xs: 2, sm: 4 },
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 1,
            mx: 'auto',
            maxWidth: 'sm',
          }}
        >
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No videos added yet
          </Typography>
          <Typography color="text.secondary">
            Click on "New Video" to add your first video!
          </Typography>
        </Box>
      ) : (
        Object.entries(videosByCategory).map(([category, categoryVideos]) => (
          <Box 
            key={category} 
            sx={{ 
              mb: { xs: 6, md: 8 },
              '&:last-child': { mb: 0 }
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 3, md: 4 },
                color: 'primary.main',
                px: { xs: 1, sm: 0 },
              }}
            >
              {category}
            </Typography>
            <Grid 
              container 
              spacing={{ xs: 2, sm: 3 }}
              columns={{ xs: 1, sm: 8, md: 12, lg: 12 }}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > *': {
                  flex: { xs: '0 0 100%', sm: '0 0 50%', md: '0 0 33.333%', lg: '0 0 25%' },
                  maxWidth: { xs: '100%', sm: '50%', md: '33.333%', lg: '25%' },
                },
              }}
            >
              {categoryVideos.map((video) => (
                <Grid 
                  item 
                  key={video.id}
                  sx={{
                    display: 'flex',
                    p: { xs: 1, sm: 1.5 },
                  }}
                >
                  <VideoCard video={video} onDelete={handleDelete} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Home;