import React, { useState } from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, Card, Button, CardContent, Link, BottomNavigation } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import logo from './GFGLOGOBLACK.svg';

export default function App() {

  const [randomnum, setnum] = useState(0);

  const getNumber = () => {
    setnum(Math.ceil((Math.random() * 14)))
  };
  return (

    <>
      <AppBar position="relative" gutterBottom>
        <Toolbar className='nav'>
          <Typography variant="title"  >
            <Link href="https://gfgrcoem.netlify.app/"><img src={logo} alt='GFG' height={90} /></Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Card className='card'>
        <CardContent className='cardContent'>
          <Typography className="heading" variant='h3' gutterBottom>
            Random Number Generator
          </Typography>

          <Typography variant="h1" >
            {randomnum}
          </Typography>
          <Button size='large' variant="outlined" color='success' onClick={getNumber} style={{
            borderRadius: "30px",
          }}>Generate</Button>
        </CardContent>
      </Card>
      <BottomNavigation ><Typography style={{
        padding: "2%"
      }} variant="title"  >
        <Link href="https://www.instagram.com/gfg_rcoem_chapter/?igshid=MmIxOGMzMTU%3D"><InstagramIcon color='success' sx={{ fontSize: 35 }}></InstagramIcon></Link>
      </Typography>
        <Typography style={{
          padding: "2%"
        }} variant="title"  >
          <Link href="https://www.linkedin.com/in/geeksforgeeks-rcoem-chapter-b6b4121bb/?original_referer=https%3A%2F%2Flinktr.ee%2F"><LinkedInIcon color='success' sx={{ fontSize: 35 }} ></LinkedInIcon></Link>
        </Typography>
        <Typography style={{
          padding: "2%"
        }} variant="title"  >
          <Link href="https://m.youtube.com/channel/UCo8rSfTC-3qxSbEVe8zVVFQ?sub_confirmation=1/"><YouTubeIcon color='success' sx={{ fontSize: 35 }}></YouTubeIcon></Link>
        </Typography>
        <Typography style={{
          padding: "2.5%"
        }} variant="title"  >
          <Link 
          href="https://discord.com/invite/DZgFKumKAm"><i id = "icon"class="fa-brands fa-discord"></i></Link>
        </Typography>
        
        </BottomNavigation>
    </>
  );
}
