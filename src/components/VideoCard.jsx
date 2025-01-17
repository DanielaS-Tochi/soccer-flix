import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Box } from '@mui/material';
import { MdEdit, MdDelete } from 'react-icons/md';
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

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={video.imageUrl || 'https://via.placeholder.com/300x140?text=No+Image'}
        alt={video.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {video.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        }}>
          {video.description}
        </Typography>
        <Box mt={1}>
          <Typography variant="caption" color="primary">
            {video.category}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleEdit} color="primary" aria-label="edit">
          <MdEdit />
        </IconButton>
        <IconButton onClick={handleDelete} color="error" aria-label="delete">
          <MdDelete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default VideoCard;
