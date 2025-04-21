import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const RatingSystem = () => {
  const ratings = [
    { label: 'Excellent', value: 85 },
    { label: 'Very Good', value: 70 },
    { label: 'Good', value: 55 },
    { label: 'Average', value: 40 },
    { label: 'Poor', value: 15 }
  ];

  const getColorForRating = (label) => {
    switch(label.toLowerCase()) {
      case 'excellent': return '#4caf50';
      case 'very good': return '#8bc34a';
      case 'good': return '#ffc107';
      case 'average': return '#ff9800';
      case 'poor': return '#f44336';
      default: return '#9e9e9e';
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '600px', margin: '20px auto' }}>
      <Typography variant="h6" gutterBottom>
        Customer Ratings
      </Typography>
      
      {ratings.map((rating, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box sx={{ width: '100px', mr: 2 }}>
            <Typography variant="body2">{rating.label}</Typography>
          </Box>
          <Box sx={{ width: '100%', mr: 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={rating.value} 
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 5,
                  backgroundColor: getColorForRating(rating.label),
                }
              }}
            />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${rating.value}%`}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default RatingSystem;