"use client";

import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { styled } from "@mui/system";
import Header from "./Header";
import { useRouter } from "next/navigation";

// アイコンとテキストをホバーしたときのスタイルを定義
const IconContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.3s, color 0.3s",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    color: "#ffcc00", // ホバー時の文字色
  },
});

// ボタンのスタイルを定義
// const StyledButton = styled(Button)({
//   color: "#fff",
//   transition: "background-color 0.3s, color 0.3s",
//   "&:hover": {
//     backgroundColor: "#444", // ホバー時の背景色
//     color: "#ffcc00", // ホバー時の文字色
//   },
// });

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleIconClick = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#1c1c1c", minHeight: "100vh", padding: "2rem", color: "#fff" }}>
        <Header />

        {/* メインコンテンツ */}
        <Box
          sx={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mt: "8rem", // 上側に間隔を空ける
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to My Portfolio
          </Typography>

          {/* アイコンとテキスト */}
          <Grid
            container
            spacing={3
            }
            sx={{ mt: "3rem" }}
            justifyContent="center"
          >
            <Grid item xs={12} sm={4} display="flex" justifyContent="center">
              <IconContainer onClick={() => handleIconClick("/dance-performance")}>
                <AccessibilityNewIcon sx={{ fontSize: "48px", color: "#fff" }} />
                <Typography variant="h6">Dance Performance</Typography>
              </IconContainer>
            </Grid>
            <Grid item xs={12} sm={4} display="flex" justifyContent="center">
              <IconContainer onClick={() => handleIconClick("/lighting")}>
                <LightbulbIcon sx={{ fontSize: "48px", color: "#fff" }} />
                <Typography variant="h6">Lighting</Typography>
              </IconContainer>
            </Grid>
            <Grid item xs={12} sm={4} display="flex" justifyContent="center">
              <IconContainer onClick={() => handleIconClick("/photography-video")}>
                <CameraAltIcon sx={{ fontSize: "48px", color: "#fff" }} />
                <Typography variant="h6">Photography Video</Typography>
              </IconContainer>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
