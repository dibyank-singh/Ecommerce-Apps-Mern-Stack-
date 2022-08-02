import {  Container, Grid,Link } from '@material-ui/core';
import React from 'react'
import { Box } from '@mui/material'
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <>
      <footer>
     <Box px={{xs:3 ,sm:8}} py={{xs:4,sm:8}} bgcolor="text.secondary" color="white">
         <Container maxWidth="lg">
             <Grid container spacing={5}>
                 <Grid item xs={12} sm={4}>
                     <Box borderBottom={1}>Help</Box>
                     <Box>
                         <Link href="/" color='inherit'>
                            Contact
                         </Link>
                     </Box>
                     <Box>
                         <Link href="/" color='inherit'>
                            Support
                         </Link>
                     </Box>
                     <Box>
                         <Link href="/" color='inherit'>
                            Privacy Policy
                         </Link>
                     </Box>

                 </Grid>
                 <Grid item xs={12} sm={4}>
                     <Box borderBottom={1}>Account</Box>
                     <Box>
                         <Link href="/" color='inherit'>
                            Login
                         </Link>
                     </Box>
                     <Box>
                         <Link href="/" color='inherit'>
                            Register
                         </Link>
                     </Box>
                     <Box>
                         <Link href="/" color='inherit'>
                            My Profile
                         </Link>
                     </Box>

                 </Grid>
                 <Grid item xs={12} sm={4}>
                     <Box borderBottom={1}>More info</Box>
                     <Box>
                         <Link href="/" color='inherit'>
                            Career
                         </Link>
                     </Box>
                     <Box>
                         <Link href="/" color='inherit'>
                            Task Box
                         </Link>
                     </Box>
                     <Box>
                         <Link href="/about" color='inherit'>
                            About Us
                         </Link>
                     </Box>

                 </Grid>

             </Grid>
           <Box textAlign="center" pt={{xs:3 ,sm:5}} pb={{xs:0,sm:0}}>
               E-Commerce Website DK &reg;{new Date().getFullYear()}
           </Box>
         </Container>
     </Box>
      <Container></Container>
      
    <Grid/>
      </footer>
    </>
  )
}

export default Footer;