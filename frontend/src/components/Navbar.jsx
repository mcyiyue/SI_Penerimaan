import React, {useState} from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
} from '@mui/icons-material'
import {Button, IconButton, InputBase,useTheme,styled } from '@mui/material';
import FlexBetween from 'components/FlexBetween'
import { useDispatch } from 'react-redux';
import { setMode } from 'state';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(20% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar = ({isSidebarOpen, setIsSidebarOpen}) => {
  const dispatch = useDispatch()
  const theme = useTheme()
  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none'
      }}>
        <Toolbar sx={{ justifyContent: 'space-between'}}>
          <FlexBetween className='Flex'>
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <MenuIcon />
            </IconButton>
            {/* <FlexBetween
              backgroundColor={theme.palette.background.alt}
              borderRadius='9px'
              p='0.1rem 1.5rem'
            >
              <InputBase placeholder='Search...' />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween> */}
          </FlexBetween>
          <FlexBetween>
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === 'light' ? (
                <LightModeOutlined sx={{ fontSize:'25px'}} />

              ) : (
                <DarkModeOutlined sx={{ fontSize:'25px'}} />
              )}
            </IconButton>
            <FlexBetween mr='2rem'>
              <Button color='secondary'>Logout</Button>
            </FlexBetween>
          </FlexBetween>
          
        </Toolbar>
    </AppBar>
  )
}
 
export default Navbar