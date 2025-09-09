import React from 'react';
import { Container, Typography, Box, Paper, TextField, Tabs, Tab, LinearProgress } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for charts
const tempData = [
  { name: 'Mon', temp: 22 }, { name: 'Tue', temp: 24 }, { name: 'Wed', temp: 23 }, { name: 'Thu', temp: 25 }, { name: 'Fri', temp: 27 }, { name: 'Sat', temp: 28 }, { name: 'Sun', temp: 26 },
];
const aqiData = [
  { name: 'Mon', aqi: 45 }, { name: 'Tue', aqi: 48 }, { name: 'Wed', aqi: 52 }, { name: 'Thu', aqi: 50 }, { name: 'Fri', aqi: 47 }, { name: 'Sat', aqi: 55 }, { name: 'Sun', aqi: 53 },
];

const DashboardPage: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <Container maxWidth="lg">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter a location or use current location"
        sx={{ mb: 4, bgcolor: 'background.paper' }}
      />

      <Typography variant="h5" gutterBottom>14-Day Forecast</Typography>
      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} sx={{ mb: 2 }}>
        <Tab label="Weather" />
        <Tab label="Air Quality" />
      </Tabs>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Weather Forecast</Typography>
        <Box display="flex" alignItems="baseline" gap={2} mb={2}>
            <Typography variant="h3" component="span">25°C</Typography>
            <Typography color="success.main" component="span">+2% Next 14 Days</Typography>
        </Box>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={tempData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="temp" stroke="#007BFF" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Air Quality Forecast</Typography>
        <Box display="flex" alignItems="baseline" gap={2} mb={2}>
            <Typography variant="h3" component="span">50</Typography>
            <Typography color="error.main" component="span">-5% Next 14 Days</Typography>
        </Box>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={aqiData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="aqi" stroke="#007BFF" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>Environmental Health Risk Index</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">Overall Risk</Typography>
            <Typography variant="body2" color="text.secondary">75%</Typography>
        </Box>
        <LinearProgress variant="determinate" value={75} sx={{ height: 10, borderRadius: 5, mb: 1 }} />
         <Typography variant="caption" color="text.secondary">High</Typography>
        <Box sx={{ mt: 2, height: 400, borderRadius: 1, overflow: 'hidden' }}>
            {/* Replace with a real map component like Mapbox or Google Maps for a real project */}
            <img src="https://i.imgur.com/3Z6SfqF.png" alt="Map of San Francisco" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
         <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            This map shows the current environmental health risk levels across the region. Darker areas indicate higher risk.
        </Typography>
      </Paper>
    </Container>
  );
};

export default DashboardPage;