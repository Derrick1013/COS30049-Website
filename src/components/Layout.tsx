import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Avatar, InputBase, alpha } from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom'; // Ensure Outlet is imported
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Layout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" component="header">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" noWrap component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
              EcoHealth
            </Typography>
            <Box sx={{ ml: 4, display: { xs: 'none', md: 'flex' } }}>
              <Button component={RouterLink} to="/" color="inherit">Home</Button>
              <Button component={RouterLink} to="/predict" color="inherit">Forecast</Button>
              <Button component={RouterLink} to="/health-insights" color="inherit">Insights</Button>
              <Button component={RouterLink} to="/about" color="inherit">About</Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* CORRECTED CODE BLOCK: The sx prop is now a function to get access to the theme */}
            <Box sx={(theme) => ({
              position: 'relative',
              borderRadius: theme.shape.borderRadius,
              backgroundColor: alpha(theme.palette.common.black, 0.05),
              '&:hover': {
                backgroundColor: alpha(theme.palette.common.black, 0.1),
              },
            })}>
              <Box sx={{ p: '0 12px', height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SearchIcon fontSize="small" />
              </Box>
              <InputBase
                placeholder="Search…"
                sx={{
                  color: 'inherit',
                  '& .MuiInputBase-input': {
                    p: '8px 8px 8px 32px',
                    width: '200px',
                  },
                }}
              />
            </Box>
            <IconButton color="inherit">
              <NotificationsNoneIcon />
            </IconButton>
            <Avatar sx={{ width: 32, height: 32 }} alt="User" src="https://i.pravatar.cc/32" />
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;