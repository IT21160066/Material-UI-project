import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name] : event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  }

  const resetState = () => {
    setIsSignup(!isSignup);
    setInput({name: '', email: '', password:''});
  }
  
  // console.log("is signup " +isSignup);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
          display="flex" 
          flexDirection="column"
          maxWidth={400} 
          alignItems="center" 
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{":hover": {
            boxShadow:'10px 10px 20px #ccc'
          }}}
        >
          <Typography variant='h3' padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>

          { isSignup && (
            <TextField 
              onChange={handleChange}
              value={input.name}
              name='name'
              margin='normal' 
              type={"text"} 
              variant='outlined' 
              placeholder='Name'
            />
          )}
          <TextField
            onChange={handleChange}
            value={input.email} 
            name='email'
            margin='normal' 
            type={"email"} 
            variant="outlined" 
            placeholder='Email'
          />
          <TextField 
            onChange={handleChange}
            value={input.password}
            name='password'
            margin='normal' 
            type={"password"} 
            variant="outlined" 
            placeholder='Password'           
          />
          
          <Button endIcon={isSignup ? <HowToRegOutlinedIcon/> :<LoginOutlinedIcon/>}
            type='submit' 
            sx={{marginTop: 3, borderRadius: 3}} 
            variant='contained' 
            color='warning'
          >
            {isSignup ? "Signup" : "Login"}
          </Button>

          <Button endIcon={isSignup ? <LoginOutlinedIcon/> :<HowToRegOutlinedIcon/>}
            onClick={resetState}

            sx={{marginTop: 3, borderRadius: 3}} 
           >
            Change to {isSignup ? "Login" : "Signup"}
          </Button>
        
        </Box>
      </form>
    </div>
  );
};


export default Auth