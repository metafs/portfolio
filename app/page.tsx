"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <Button color="inherit" onClick={() => handleNavigation("/dance-performance")}>
            Dance Performance
          </Button>
          <Button color="inherit" onClick={() => handleNavigation("/lighting")}>
            Lighting
          </Button>
          <Button color="inherit" onClick={() => handleNavigation("/photography-video")}>
            Photography / Video
          </Button>
          <Button color="inherit" onClick={() => handleNavigation("/cv")}>
            CV
          </Button>
          <Button color="inherit" onClick={() => handleNavigation("/contact")}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1" align="center">
          Explore my work in dance performance, lighting design, photography, and video. Feel free to view my CV or contact me for collaboration opportunities!
        </Typography>
      </Container>
    </>
  );
};

export default Home;
