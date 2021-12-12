import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from '../../hooks/useAuth';

const theme = createTheme();

export default function Registration () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitTypeSignUp, setSubmitTypeSignUp] = useState(true);
    const [toastStatus, setToastStatus] = useState({
        open: false,
        message: ''
    });
    const { register, login, currentUser, addDocument } = useAuth();

    const changeEmail = ev => setEmail(ev.target.value);
    const changePassword = ev => setPassword(ev.target.value);
    const changeSubmitType = ev => setSubmitTypeSignUp(submitType => !submitType);
    const showError = error => setToastStatus({ open: true, message: error.message });

    const handleToastClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setToastStatus({
            open: false,
            message: ''
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            return showError({ message: 'Please fill all the fields!' });
        }

        if (submitTypeSignUp) {
            register(email, password)
            .then(user => {
                console.log('user', user)
                addDocument('users', {
                        uid: user.user.uid,
                        email,
                        groups: []
                    })
                    .then(doc => {
                        console.log('Users document', doc);
                    })
                    .catch(err => {
                        showError(err);
                    });
            })
            .catch(err => {
                console.log('error signup', err);
                showError(err);
            });
        } else {
            login(email, password)
            .then(user => console.log('user', user))
            .catch(err => {
                console.log('error login', err);
                showError(err);
            });
        }
    };

    return (
        <>
            {
                currentUser?
                    <Navigate to='/' />
                :
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    { submitTypeSignUp? 'Sign Up' : 'Log In' }
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        value={email}
                                        onChange={changeEmail}
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        value={password}
                                        onChange={changePassword}
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        { submitTypeSignUp? 'Sign Up' : 'Log In' }
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Box 
                                                onClick={changeSubmitType}
                                                sx={{ 
                                                    textAlign: 'center',
                                                    color: 'blue',
                                                    cursor: 'pointer',
                                                    textDecoration: 'underline'
                                                }}
                                            >
                                                {
                                                    submitTypeSignUp? 
                                                        "Already have an account? Log In" 
                                                    :
                                                        "Don't have an account? Sign Up"
                                                }
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                            <Snackbar
                                open={toastStatus.open}
                                autoHideDuration={5000}
                                onClose={handleToastClose}
                            >
                                <Alert severity='error' onClose={handleToastClose} sx={{ width: '100%' }}>
                                    {toastStatus.message || 'Oops! something went wrong!'}
                                </Alert>
                            </Snackbar>
                        </Container>
                    </ThemeProvider>
            }
        </>
    );
}