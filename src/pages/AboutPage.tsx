import React from 'react';
import { Container, Box, Typography, Paper, Divider } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    // --- Main Content Area ---
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          About EnviroCast
        </Typography>
        <Typography variant="body1" paragraph>
          EnviroCast is a project designed to provide accessible and accurate environmental health forecasts. By integrating weather data with air quality measurements through advanced machine learning models, we aim to deliver actionable insights that help users make informed decisions about their health and well-being.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          Our Technology
        </Typography>
        <Typography variant="body1" paragraph>
          Our predictive system is built on machine learning algorithms trained on vast historical datasets of weather patterns and pollutant levels. The front-end is developed with React and Material-UI (MUI) for a clean, responsive, and intuitive user experience.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          The Team
        </Typography>
        <Typography variant="body1" paragraph>
          This project is developed by a dedicated team of students as part of the Computing Technology Innovation Project. Our goal is to apply modern technology to solve real-world environmental and public health challenges.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;