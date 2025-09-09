import React from 'react';
import { Container, Typography, Grid, Paper, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const pollutants = [
  { title: 'Particulate Matter (PM2.5)', description: 'Learn about the health risks of fine particulate matter, including respiratory and cardiovascular diseases.', image: 'https://i.imgur.com/uN22IVJ.png' },
  { title: 'Nitrogen Dioxide (NO2)', description: 'Discover how nitrogen dioxide, a common air pollutant, impacts respiratory health, especially in children.', image: 'https://i.imgur.com/jA8wH2E.png' },
  { title: 'Ozone (O3)', description: 'Understand the effects of ground-level ozone on lung function and respiratory symptoms.', image: 'https://i.imgur.com/c6xT7G5.png' },
];

const protection = [
    { title: 'Protecting Children', description: 'Learn strategies to minimize children\'s exposure to pollutants, including indoor air quality tips.', image: 'https://i.imgur.com/rX9bY5K.png' },
    { title: 'Protecting the Elderly', description: 'Discover ways to safeguard the health of older adults, who may be more susceptible.', image: 'https://i.imgur.com/n1fVwO9.png' },
    { title: 'Managing Respiratory Conditions', description: 'Get tips for managing asthma, COPD, and other respiratory conditions in areas with high pollution.', image: 'https://i.imgur.com/iJ5T4Hj.png' },
];


const HealthInfoPage: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>Environmental Health Education Center</Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
                Explore in-depth articles on various pollutants and their effects on human health.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Understanding Pollutant Health Impacts</Typography>
            <Grid container spacing={4}>
                {pollutants.map((item, index) => (
                    // CORRECTED: Replaced `item xs={12}` with `size={12}`
                    <Grid size={12} key={index}>
                        <Paper sx={{ display: 'flex', alignItems: 'center', p: 2, gap: 3 }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                            </Box>
                            <Box sx={{ width: 150, height: 100, borderRadius: 1, overflow: 'hidden' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h5" gutterBottom sx={{ mt: 6, mb: 3 }}>Prevention and Protection</Typography>
            <Grid container spacing={4}>
                {protection.map((item, index) => (
                     // CORRECTED: Replaced `item xs={12}` with `size={12}`
                     <Grid size={12} key={index}>
                        <Paper sx={{ display: 'flex', alignItems: 'center', p: 2, gap: 3 }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                            </Box>
                            <Box sx={{ width: 150, height: 100, borderRadius: 1, overflow: 'hidden' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 6, mb: 3 }}>Frequently Asked Questions (FAQ)</Typography>
             <Box>
                <Accordion sx={{ boxShadow: 'none', border: '1px solid #E9ECEF', bgcolor: 'transparent', '&:before': { display: 'none' } }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography>What are the most common environmental pollutants?</Typography></AccordionSummary>
                    <AccordionDetails><Typography>The most common are Particulate Matter (PM2.5, PM10), Nitrogen Dioxide (NO2), Ground-level Ozone (O3), Sulfur Dioxide (SO2), and Carbon Monoxide (CO).</Typography></AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 'none', border: '1px solid #E9ECEF', bgcolor: 'transparent', '&:before': { display: 'none' } }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography>How can I reduce my exposure to pollutants?</Typography></AccordionSummary>
                    <AccordionDetails><Typography>Check daily air quality forecasts, avoid outdoor exercise on high-pollution days, use indoor air purifiers, and keep windows closed when outdoor air quality is poor.</Typography></AccordionDetails>
                </Accordion>
             </Box>
        </Container>
    );
};

export default HealthInfoPage;