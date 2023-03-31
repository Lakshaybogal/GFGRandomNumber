import React, { useState } from "react";
import "./App.css";
import "./styleDisplayTask.css";
import { AppBar, Toolbar, Typography, Card, Button, CardContent, Link, BottomNavigation} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PrintTaskDetails from './PrintTask';
import logo from "./GFGLOGOBLACK.svg";

export default function App() {
  const [randomnum, setnum] = useState(0);

  const getNumber = () => {
    setnum(Math.ceil(Math.random() * 14));
  };


  let data = [
    {
      sno: 1,
      des: "Stand on a dot with 1 leg for a min"
    },
    {
      sno: 2,
      des: "Bottle Flip"
    },
    {
      sno: 3,
      des: "Flip the bottle + tic tac toe"
    },
    {
      sno: 4,
      des: "Guess the song from tune"
    },
    {
      sno: 5,
      des: "Pick up line or Shayari"
    },
    {
      sno: 6,
      des: "Kick the ball in bucket "
    },
    {
      sno: 7,
      des: "Brand / Technical language antakshari"
    },
    {
      sno: 8,
      des: "Count to 30 (clap on multiples of 3 and jump on multiples of 5)"
    },
    {
      sno: 9,
      des: "Take a pic of this stall and your friend doing  a task and put it on your insta story and use #geeksummercarnival2023 and tag @geeks_for_geeks"
    },
    {
      sno: 10,
      des: "Heads up"
    },
    {
      sno: 11,
      des: "Forehead balancing"
    },
    {
      sno: 12,
      des: "Speak for 1 minute on a topic given by a stall volunteer"
    },
    {
      sno: 13,
      des: "Show us your go to dance step when a song plays "
    },
    {
      sno: 14,
      des: "Summersault or Cartwheel"
    }
  ];

  return (
    <>
      <AppBar position="relative" gutterBottom>
        <Toolbar className="nav">
          <Typography variant="title">
            <Link href="https://gfgrcoem.netlify.app/">
              <img src={logo} alt="GFG" height={90} />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Card className="card" style={{
        borderRadius:"0",
      }}>
        <CardContent className="cardContent">
          <Typography className="heading" variant="h3" gutterBottom>
            Generate Task Number
          </Typography>

          <Typography variant="h1">{randomnum}</Typography>
          <Button
            size="large"
            variant="outlined"
            color="success"
            onClick={getNumber}
            style={{
              borderRadius: "30px",
            }}
          >
            Generate
          </Button>
        </CardContent>
      </Card>

      <Card style={{
        borderRadius:"0",
      }}>
        <PrintTaskDetails taskData={data} />
      </Card>

      <BottomNavigation className="footer" >
        <Typography
          style={{
            padding: "2%",
          }}
          variant="title"
        >
          <Link href="https://www.instagram.com/gfg_rcoem_chapter/?igshid=MmIxOGMzMTU%3D">
            <InstagramIcon
              color="success"
              sx={{ fontSize: 35 }}
            ></InstagramIcon>
          </Link>
        </Typography>
        <Typography
          style={{
            padding: "2%",
          }}
          variant="title"
        >
          <Link href="https://www.linkedin.com/in/geeksforgeeks-rcoem-chapter-b6b4121bb/?original_referer=https%3A%2F%2Flinktr.ee%2F">
            <LinkedInIcon color="success" sx={{ fontSize: 35 }}></LinkedInIcon>
          </Link>
        </Typography>
        <Typography
          style={{
            padding: "2%",
          }}
          variant="title"
        >
          <Link href="https://m.youtube.com/channel/UCo8rSfTC-3qxSbEVe8zVVFQ?sub_confirmation=1/">
            <YouTubeIcon color="success" sx={{ fontSize: 35 }}></YouTubeIcon>
          </Link>
        </Typography>
        <Typography
          style={{
            padding: "2.5%",
          }}
          variant="title"
        >
          <Link href="https://discord.com/invite/DZgFKumKAm">
            <i id="icon" class="fa-brands fa-discord"></i>
          </Link>
        </Typography>
      </BottomNavigation>

    </>
  );
};
