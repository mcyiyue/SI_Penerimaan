import React from 'react'
import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material'

const Header = ({title}) => {
  return (
    <AppBar 
    position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header