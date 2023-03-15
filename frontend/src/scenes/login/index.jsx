import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Card, CardContent, useTheme } from '@mui/material'

export default function Login() {
  const theme=useTheme()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <>
    <Box
        display='flex'
        justifyContent="center"
        alignItems="center"
        pt='5rem'
    >
        <Typography variant="h1" fontWeight='bold' fontSize='40px' sx={{
            color:theme.palette.primary[200]
        }}>
            SI PENERIMAAN
        </Typography>
    </Box>
    <Box
        display='flex'
        justifyContent="center"
        alignItems="center"
    >
        <Card sx={{
            minWidth: 400,
            ml: '45rem',
            mr: '45rem',
            mt: '1rem',
            pt:'0.1rem'
        }}>
            <CardContent>
                <Box
                    sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    <Avatar sx={{
                        m: 1,
                        backgroundColor: theme.palette.primary[400]
                        }}>
                        <LockOutlinedIcon 
                            sx={{
                                color: theme.palette.secondary[900],
                            }}
                        />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        sx={{
                            '& label.Mui-focused': {
                                color: theme.palette.primary[200],
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                borderColor: theme.palette.primary[200],
                                },
                            },
                            }}
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        sx={{
                            '& label.Mui-focused': {
                                color: theme.palette.primary[200],
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                borderColor: theme.palette.primary[200],
                                },
                            },
                            }}
                        />
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary" 
                        sx={{
                                '&.Mui-checked': {
                                    color: theme.palette.primary[400]
                                }
                        }}
                        />}
                        label="Remember me"
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.primary[400],
                            color: theme.palette.neutral[1000],
                            mt: 3,
                            mb: 2,
                            '&:hover':{
                                backgroundColor: theme.palette.primary[100],
                                color: theme.palette.neutral[800]
                            }
                        }}
                        >
                        Log In
                        </Button>
                        <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="primary" sx={{
                                color:theme.palette.primary[400]
                            }}>
                            Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="primary" sx={{
                                color:theme.palette.primary[400]
                            }}>
                            {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                        </Grid>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    </Box>
    </>
    
  );
}