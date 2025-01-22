import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  Grid,
} from '@mui/material';
import useConfetti from '../hooks/useConfetti';


const categories = [
  'Highlights',
  'Goals',
  'Skills',
  'Matches',
  'Interviews',
  'Training',
  'Analysis',
];

const VideoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    imageUrl: '',
    videoUrl: '',
  });
  const [errors, setErrors] = useState({});
  const { triggerConfetti } = useConfetti();

  useEffect(() => {
    if (id) {
      // Fetch video data if editing
      const videos = JSON.parse(localStorage.getItem('videos') || '[]');
      const video = videos.find((v) => v.id === id);
      if (video) {
        setFormData(video);
      }
    }
  }, [id]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.videoUrl) newErrors.videoUrl = 'Video URL is required';
    if (formData.videoUrl && !formData.videoUrl.includes('youtube.com')) {
      newErrors.videoUrl = 'Must be a valid YouTube URL';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const videos = JSON.parse(localStorage.getItem('videos') || '[]');

    if (id) {
      // Update existing video
      const index = videos.findIndex((v) => v.id === id);
      if (index !== -1) {
        videos[index] = { ...formData, id };
      }
    } else {
      // Add new video
      videos.push({
        ...formData,
        id: Date.now().toString(),
      });
    }

    localStorage.setItem('videos', JSON.stringify(videos));

    // Show alert and confetti, then redirect
    triggerConfetti();
    alert(id ? 'Video updated successfully!' : 'Video created successfully!');
    setTimeout(() => {
      navigate('/');
    }, 1000); // Delay for a smooth confetti effect
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleClear = () => {
    setFormData({
      category: '',
      title: '',
      description: '',
      imageUrl: '',
      videoUrl: '',
    });
    setErrors({});
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          {id ? 'Edit Video' : 'Add New Video'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                error={!!errors.category}
                helperText={errors.category}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                error={!!errors.title}
                helperText={errors.title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                helperText="Optional: Add a thumbnail image URL"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Video URL"
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handleChange}
                error={!!errors.videoUrl}
                helperText={errors.videoUrl || 'Enter YouTube video URL'}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button
              variant="outlined"
              onClick={handleClear}
              sx={{ minWidth: 100 }}
            >
              Clear
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ minWidth: 100 }}
            >
              Save
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default VideoForm;
