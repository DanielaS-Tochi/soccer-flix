import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Box, Chip } from '@mui/material';
import { MdEdit, MdDelete, MdPlayCircle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit-video/${video.id}`);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      onDelete(video.id);
    }
  };

  const handlePlay = () => {
    window.open(video.videoUrl, '_blank');
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="220"
          image={video.imageUrl || 'https://via.placeholder.com/400x220?text=No+Image'}
          alt={video.title}
          sx={{
            objectFit: 'cover',
          }}
        />
        <IconButton
          onClick={handlePlay}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <MdPlayCircle size={48} />
        </IconButton>
        <Chip
          label={video.category}
          color="primary"
          size="small"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'rgba(46, 125, 50, 0.85)',
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div" 
          sx={{
            fontSize: '1.1rem',
            fontWeight: 600,
            mb: 1,
          }}
        >
          {video.title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            mb: 1,
            lineHeight: 1.5,
          }}
        >
          {video.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', p: 2, pt: 0 }}>
        <IconButton 
          onClick={handleEdit} 
          color="primary" 
          aria-label="edit"
          sx={{ '&:hover': { transform: 'scale(1.1)' } }}
        >
          <MdEdit size={20} />
        </IconButton>
        <IconButton 
          onClick={handleDelete} 
          color="error" 
          aria-label="delete"
          sx={{ '&:hover': { transform: 'scale(1.1)' } }}
        >
          <MdDelete size={20} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default VideoCard;
