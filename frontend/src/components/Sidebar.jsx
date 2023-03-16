import React, {useState, useEffect} from 'react';
import {
  Drawer,
  Toolbar,
  IconButton,
  List,
  ListItem,
  Box,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  useTheme
}from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Modules from './Modules/Modules';
import FlexBetween from 'components/FlexBetween'
import { Link } from "react-router-dom";
import { ChevronLeft } from '@mui/icons-material';

const setDrawer = (active, setActive, theme) => { 
  const drawerList = Modules.map((module, i) => {
  return (
    <div  key={module.nama}>
      <Accordion
        disableGutters
        sx={{
          ml:'0.5rem',
          mb:'0.2rem',
          '&.MuiAccordion-root':{
            borderRadius:'8px'
          }
        }} 
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls={"panel"+module.id+"content"}
          id={"panel"+module.id+"header"}
        >
          <Typography alignContent='left'>{module.nama}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            paddingBottom:'1px',
            paddingTop:'1px',
            m:'0.01rem 0.1rem 0.1rem 0.1rem'
          }}
        >
          <List>
            {module.sub_modules.map((sub_module, i) => {
                return (
                  <div key={sub_module.nama}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => setActive(sub_module.nama)}
                      component={Link} to={sub_module.route}
                      sx={{
                        borderRadius:'8px',
                        backgroundColor: active === sub_module.nama 
                        ? theme.palette.secondary[400] 
                        : 'transparent',
                        color: active === sub_module.nama 
                        ? theme.palette.primary[600] 
                        : theme.palette.secondary[200],
                        '&:hover':{
                          backgroundColor: active === sub_module.nama 
                          ? theme.palette.secondary[100]
                          : theme.palette.neutral[700], 
                          color: active === sub_module.nama 
                          ? theme.palette.neutral[1000]
                          : ''
                        }
                      }}
                    >                              
                      <ListItemText primary={sub_module.nama} />
                    </ListItemButton>
                  </ListItem>
                  </div>
                )              
              })
            }
          </List>
        </AccordionDetails>
        </Accordion>
        <Divider />
      </div>
    )
  })
return drawerList
}
      
const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile
}) => {
  const theme = useTheme();
  const [active, setActive] = useState('Dashboard')
  return ( <Box component='nav'>
    {isSidebarOpen && (
      <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        variant={!isNonMobile
          ? 'temporary'
          : 'persistent'
        }
        anchor="left"
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper':{
            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSizing: 'border-box',
            borderWidth: isNonMobile ? 0 : '2px',
            width: drawerWidth
          }
        }} 
      >
        <Box width='100%'>
          <Box m='1.5rem 1rem 1rem 3rem'>
            <FlexBetween color={theme.palette.secondary.main}>
              <Box display='flex' alignItems='center' gap='0.5rem'>
                <Typography variant="h3" fontWeight='bold' sx={{
                  color:theme.palette.secondary[50]
                }}>
                  SI PENERIMAAN
                </Typography>
              </Box>
              {!isNonMobile && (
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ChevronLeft />
                </IconButton>
              )}
            </FlexBetween>
          </Box>
        </Box>
        <Box m='0rem 1rem 1rem 0.2rem'>
          <List>
            <ListItem
              sx={{
                mb:'0.01rem'
              }} 
              disablePadding
            >
              <ListItemButton 
                onClick={() => setActive('Dashboard')}
                component={Link} to='dashboard'
                sx={{
                  ml:'0.5rem',
                  borderRadius:'8px',
                  backgroundColor: active === 'Dashboard' 
                  ? theme.palette.secondary[400] 
                  : theme.palette.neutral[1000],
                  color: active === 'Dashboard' 
                  ? theme.palette.primary[500] 
                  : theme.palette.secondary[50],
                  '&:hover':{
                    backgroundColor: active === 'Dashboard' 
                    ? theme.palette.secondary[100]
                    : theme.palette.neutral[700], 
                    color: active === 'Dashboard' 
                    ? theme.palette.neutral[1000]
                    : theme.palette.secondary[200]
                  }
                }}
              >
                <FlexBetween marginRight='0.5rem'>
                  <DashboardIcon/>
                </FlexBetween>
                <FlexBetween>
                  <ListItemText primary='Dashboard' />
                </FlexBetween>             
              </ListItemButton>
            </ListItem>
          </List>
        { setDrawer(active, setActive, theme) }
        </Box>
      </Drawer>
    )}  
  </Box>
  )
}
 
export default Sidebar