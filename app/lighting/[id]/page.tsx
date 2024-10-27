"use client";

import React, { useEffect, useState } from "react";
import {
    Box,
    Card,
    CardContent,
    CircularProgress,
    Typography,
    IconButton,
} from "@mui/material";
import Header from "../../Header";
import { useParams } from "next/navigation";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Article {
    id: string;
    title: string;
    content: string;
    image: string[]; // 画像配列
}

const ArticleDetailPage: React.FC = () => {
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`https://dcirs4q6ul.microcms.io/api/v1/blogs/${id}`, {
                    headers: {
                        "X-MICROCMS-API-KEY": "xbpDGJRqFsRAYSUtYzTndxF4NNLEJ1l9UwG5",
                    },
                });
                const data = await response.json();

                // 画像フィールドが正しく配列として取得されているか確認
                if (Array.isArray(data.image) && data.image.length > 0) {
                    setArticle({ ...data, image: data.image });
                } else {
                    console.error("画像が見つかりません。image フィールドが配列でないか、空です。");
                    setArticle({ ...data, image: [] });
                }
            } catch (error) {
                console.error("記事の取得に失敗しました:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticle();
    }, [id]);

    // 自動スライドショー設定
    useEffect(() => {
        if (article?.image.length) {
            const intervalId = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % article.image.length
                );
            }, 3000); // 3秒ごとに切り替え

            return () => clearInterval(intervalId);
        }
    }, [article]);

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <CircularProgress color="inherit" />
            </Box>
        );
    }

    if (!article) {
        return <Typography variant="h6">記事が見つかりません。</Typography>;
    }

    return (
        <Box sx={{ backgroundColor: "#1c1c1c", minHeight: "100vh", padding: "2rem", color: "#fff" }}>
            <Header />
            <Box sx={{ padding: "2rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                {/* 画像スライドショー */}
                <Box sx={{ position: "relative", width: "100%", maxWidth: "800px", overflow: "hidden" }}>
                    {article.image.length > 0 && article.image.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Slide ${index + 1}`}
                            style={{
                                display: currentImageIndex === index ? "block" : "none",
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    ))}
                    {/* 前後の画像切り替えボタン */}
                    <IconButton
                        onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + article.image.length) % article.image.length)}
                        sx={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#fff" }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % article.image.length)}
                        sx={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "#fff" }}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>

                {/* 記事内容 */}
                <Card sx={{ maxWidth: "800px", width: "100%", backgroundColor: "#333", color: "#fff", marginTop: "1rem" }}>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>{article.title}</Typography>
                        <Box sx={{ mt: 2 }} dangerouslySetInnerHTML={{ __html: article.content }} />
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default ArticleDetailPage;
