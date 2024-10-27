// "use client";

// import React, { useEffect, useState } from "react";
// import {
//     Box,
//     Card,
//     CardContent,
//     CircularProgress,
//     Typography,
//     IconButton,
// } from "@mui/material";
// import Header from "../../Header";
// import { useParams } from "next/navigation";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// interface Article {
//     id: string;
//     title: string;
//     content: string;
//     image: { url: string; height: number; width: number }[]; // 画像配列
// }

// const ArticleDetailPage: React.FC = () => {
//     const [article, setArticle] = useState<Article | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const { id } = useParams();

//     useEffect(() => {
//         const fetchArticle = async () => {
//             try {
//                 const response = await fetch(`https://dcirs4q6ul.microcms.io/api/v1/blogs/${id}`, {
//                     headers: {
//                         "X-MICROCMS-API-KEY": "xbpDGJRqFsRAYSUtYzTndxF4NNLEJ1l9UwG5",
//                     },
//                 });
//                 const data = await response.json();

//                 if (Array.isArray(data.image) && data.image.length > 0) {
//                     setArticle({ ...data, image: data.image });
//                 } else {
//                     console.error("画像が見つかりません。image フィールドが配列でないか、空です。");
//                     setArticle({ ...data, image: [] });
//                 }
//             } catch (error) {
//                 console.error("記事の取得に失敗しました:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchArticle();
//     }, [id]);

//     useEffect(() => {
//         if (article?.image.length) {
//             const intervalId = setInterval(() => {
//                 setCurrentImageIndex((prevIndex) =>
//                     (prevIndex + 1) % article.image.length
//                 );
//             }, 3000);

//             return () => clearInterval(intervalId);
//         }
//     }, [article]);

//     const handleNextImage = () => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % article.image.length);
//     };

//     const handlePrevImage = () => {
//         setCurrentImageIndex((prevIndex) => (prevIndex - 1 + article.image.length) % article.image.length);
//     };

//     if (loading) {
//         return (
//             <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//                 <CircularProgress color="inherit" />
//             </Box>
//         );
//     }

//     if (!article) {
//         return <Typography variant="h6">記事が見つかりません。</Typography>;
//     }

//     return (
//         <Box sx={{ backgroundColor: "#1c1c1c", color: "#fff", padding: "2rem" }}>
//             <Header />
//             <Box sx={{ display: "flex", minHeight: "100vh" }}>
//                 <Box sx={{ width: "40%", position: "sticky", top: 0 }}>
//                     <Box sx={{ position: "relative", width: "100%", height: "auto", padding: "2rem" }}>
//                         <img
//                             src={article.image[currentImageIndex].url} // 画像URLを指定
//                             alt={`記事画像 ${currentImageIndex + 1}`}
//                             style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }} // 画像の表示方法を調整
//                         />
//                         <IconButton
//                             onClick={handlePrevImage}
//                             sx={{
//                                 position: "absolute",
//                                 top: "50%",
//                                 left: 0,
//                                 transform: "translateY(-50%)",
//                                 color: "#fff",
//                             }}
//                         >
//                             <ArrowBackIcon />
//                         </IconButton>
//                         <IconButton
//                             onClick={handleNextImage}
//                             sx={{
//                                 position: "absolute",
//                                 top: "50%",
//                                 right: 0,
//                                 transform: "translateY(-50%)",
//                                 color: "#fff",
//                             }}
//                         >
//                             <ArrowForwardIcon />
//                         </IconButton>
//                     </Box>
//                 </Box>

//                 <Box sx={{ width: "60%", padding: "2rem" }}>
//                     <Card sx={{ backgroundColor: "#333", color: "#fff" }}>
//                         <CardContent>
//                             <Typography variant="h5" gutterBottom sx={{ fontSize: "1.5rem" }}>{article.title}</Typography>
//                             <Box sx={{ mt: 2, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: article.content }} />
//                         </CardContent>
//                     </Card>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default ArticleDetailPage;

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
    image: { url: string; height: number; width: number }[]; // 画像配列
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

    useEffect(() => {
        if (article?.image.length) {
            const intervalId = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % article.image.length
                );
            }, 3000);

            return () => clearInterval(intervalId);
        }
    }, [article]);

    const handleNextImage = () => {
        if (article) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % article.image.length);
        }
    };

    const handlePrevImage = () => {
        if (article) {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + article.image.length) % article.image.length);
        }
    };

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
        <Box sx={{ backgroundColor: "#1c1c1c", color: "#fff", padding: "2rem" }}>
            <Header />
            <Box sx={{ display: "flex", minHeight: "100vh" }}>
                <Box sx={{ width: "40%", position: "sticky", top: 0 }}>
                    <Box sx={{ position: "relative", width: "100%", height: "auto", padding: "2rem" }}>
                        <img
                            src={article.image[currentImageIndex]?.url} // オプショナルチェイニングを使用
                            alt={`記事画像 ${currentImageIndex + 1}`}
                            style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }} // 画像の表示方法を調整
                        />
                        <IconButton
                            onClick={handlePrevImage}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: 0,
                                transform: "translateY(-50%)",
                                color: "#fff",
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton
                            onClick={handleNextImage}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                right: 0,
                                transform: "translateY(-50%)",
                                color: "#fff",
                            }}
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                    </Box>
                </Box>

                <Box sx={{ width: "60%", padding: "2rem" }}>
                    <Card sx={{ backgroundColor: "#333", color: "#fff" }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{ fontSize: "1.5rem" }}>{article.title}</Typography>
                            <Box sx={{ mt: 2, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: article.content }} />
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default ArticleDetailPage;
