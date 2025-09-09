import React from 'react';
import { Container, Typography, Paper, TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const PredictionPage: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>Environmental Health Prediction</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Input the necessary parameters to generate a forecast for environmental health conditions.
            </Typography>

            <Paper sx={{ p: 4 }}>
                <Grid container spacing={3}>
                    {/* CORRECTED: Replaced `item xs={12}` with `size={12}` */}
                    <Grid size={12}>
                        <Typography variant="h6" gutterBottom>Location</Typography>
                        <TextField fullWidth label="Enter location (e.g., city, region)" variant="outlined" />
                    </Grid>

                    {/* CORRECTED: Replaced `item xs={12} sm={6}` with `size={{ xs: 12, sm: 6 }}` */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="h6" gutterBottom>Pollutants</Typography>
                        <FormControl fullWidth>
                            <InputLabel>Pollutant Type</InputLabel>
                            <Select label="Pollutant Type" defaultValue="">
                                <MenuItem value="pm25">PM2.5</MenuItem>
                                <MenuItem value="no2">Nitrogen Dioxide (NO2)</MenuItem>
                                <MenuItem value="o3">Ozone (O3)</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    {/* CORRECTED: Replaced `item xs={12} sm={6}` with `size={{ xs: 12, sm: 6 }}` */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="h6" gutterBottom sx={{color: 'transparent', display: {xs: 'none', sm: 'block'}}}>Source</Typography>
                         <FormControl fullWidth>
                            <InputLabel>Pollutant Source</InputLabel>
                            <Select label="Pollutant Source" defaultValue="">
                                <MenuItem value="traffic">Traffic</MenuItem>
                                <MenuItem value="industrial">Industrial</MenuItem>
                                <MenuItem value="natural">Natural (e.g., Wildfires)</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                     {/* CORRECTED: Replaced `item xs={12} sm={6}` with `size={{ xs: 12, sm: 6 }}` */}
                     <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="h6" gutterBottom>Timeframe</Typography>
                        <TextField fullWidth type="date" label="Start Date" InputLabelProps={{ shrink: true }} />
                    </Grid>
                     {/* CORRECTED: Replaced `item xs={12} sm={6}` with `size={{ xs: 12, sm: 6 }}` */}
                     <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="h6" gutterBottom sx={{color: 'transparent', display: {xs: 'none', sm: 'block'}}}>End Date</Typography>
                        <TextField fullWidth type="date" label="End Date" InputLabelProps={{ shrink: true }} />
                    </Grid>

                    {/* CORRECTED: Replaced `item xs={12}` with `size={12}` */}
                    <Grid size={12}>
                         <Typography variant="h6" gutterBottom>Additional Parameters</Typography>
                        <FormControl fullWidth>
                            <InputLabel>Weather Conditions</InputLabel>
                            <Select label="Weather Conditions" defaultValue="">
                                <MenuItem value="sunny">Sunny</MenuItem>
                                <MenuItem value="rainy">Rainy</MenuItem>
                                <MenuItem value="windy">Windy</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                     {/* CORRECTED: Replaced `item xs={12}` with `size={12}` */}
                     <Grid size={12}>
                         <TextField fullWidth type="number" label="Population Density" variant="outlined" />
                    </Grid>

                    {/* CORRECTED: Replaced `item xs={12}` with `size={12}` */}
                    <Grid size={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained" size="large">Generate Forecast</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default PredictionPage;