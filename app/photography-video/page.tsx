"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/navigation";
import Header from "../Header";

const ArticleCard = styled(Box)({
    backgroundColor: "#2c2c2c",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
    },
});

const Thumbnail = styled("img")({
    width: "100%",
    height: "auto",
    display: "block",
});

const Title = styled(Typography)({
    color: "#fff",
    fontSize: "0.875rem",
    textAlign: "center",
    padding: "0.5rem",
});

interface Article {
    id: string;
    title: string;
    eyecatch: {
        url: string;
    };
    category: {
        id: string;
        name: string;
    };
}

const PhotoVideoPage: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const categoryResponse = await fetch("https://dcirs4q6ul.microcms.io/api/v1/categories", {
                    headers: {
                        "X-MICROCMS-API-KEY": "xbpDGJRqFsRAYSUtYzTndxF4NNLEJ1l9UwG5",
                    },
                });
                const categoriesData = await categoryResponse.json();

                const photoVideoCategory = categoriesData.contents.find(
                    (category: { name: string }) => category.name === "写真・映像"
                );

                const response = await fetch("https://dcirs4q6ul.microcms.io/api/v1/blogs", {
                    headers: {
                        "X-MICROCMS-API-KEY": "xbpDGJRqFsRAYSUtYzTndxF4NNLEJ1l9UwG5",
                    },
                });
                const data = await response.json();

                const filteredArticles = data.contents.filter(
                    (article: Article) => article.category.id === photoVideoCategory.id
                );
                setArticles(filteredArticles);
            } catch (error) {
                console.error("Failed to fetch articles:", error);
                setArticles([]);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    const handleArticleClick = (id: string) => {
        router.push(`/photography-video/${id}`);
    };

    if (loading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    backgroundColor: "#1c1c1c",
                    color: "#fff",
                }}
            >
                <CircularProgress color="inherit" />
            </Box>
        );
    }

    return (
        <Box sx={{ backgroundColor: "#1c1c1c", minHeight: "100vh", padding: "2rem" }}>
            <Header />
            <Box sx={{ padding: "2rem", color: "#fff" }}>
                <Typography variant="h4" gutterBottom>
                    Photography & Video Gallery
                </Typography>

                <Grid container spacing={2}>
                    {articles.map((article) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={article.id}>
                            <ArticleCard onClick={() => handleArticleClick(article.id)}>
                                <Thumbnail src={article.eyecatch?.url} alt={article.title} />
                                <Title variant="caption">{article.title}</Title>
                            </ArticleCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default PhotoVideoPage;
