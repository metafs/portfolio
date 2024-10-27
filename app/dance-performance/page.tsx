// "use client";

// import React, { useEffect, useState } from "react";
// import { Box, Typography, Grid, CircularProgress } from "@mui/material";
// import { styled } from "@mui/system";
// import { useRouter } from "next/navigation";
// import Header from "../Header";

// const ArticleCard = styled(Box)({
//     backgroundColor: "#2c2c2c",
//     borderRadius: "8px",
//     padding: "1rem",
//     margin: "1rem 0",
//     cursor: "pointer",
//     transition: "transform 0.3s",
//     "&:hover": {
//         transform: "scale(1.03)",
//     },
// });

// const Thumbnail = styled("img")({
//     width: "100%",
//     height: "auto",
//     borderRadius: "8px",
//     marginBottom: "0.5rem",
// });

// interface Article {
//     id: string;
//     title: string;
//     thumbnail: string;
//     category: {
//         id: string;
//         name: string;
//     };
// }

// const DancePerformancePage: React.FC = () => {
//     const [articles, setArticles] = useState<Article[]>([]);
//     const [loading, setLoading] = useState(true);
//     const router = useRouter();

//     // カテゴリID（例: ダンスカテゴリのID）を保持
//     const danceCategoryId = "dance"; // microCMSのカテゴリIDに合わせる

//     useEffect(() => {
//         const fetchArticles = async () => {
//             try {
//                 // カテゴリAPIからカテゴリ情報を取得
//                 const categoryResponse = await fetch("https://dcirs4q6ul.microcms.io/api/v1/categories", {
//                     headers: {
//                         "X-MICROCMS-API-KEY": "xbpDGJRqFsRAYSUtYzTndxF4NNLEJ1l9UwG5", // ここにAPIキーを入力
//                     },
//                 });
//                 const categoriesData = await categoryResponse.json();

//                 // ダンスカテゴリに該当するIDを取得
//                 const danceCategory = categoriesData.contents.find((category: { name: string }) => category.name === "ダンス・パフォーマンス");

//                 // ブログAPIから記事を取得
//                 const response = await fetch("https://dcirs4q6ul.microcms.io/api/v1/blogs", {
//                     headers: {
//                         "X-MICROCMS-API-KEY": "xbpDGJRqFsRAYSUtYzTndxF4NNLEJ1l9UwG5", // ここにAPIキーを入力
//                     },
//                 });
//                 const data = await response.json();

//                 // 特定のカテゴリIDに該当する記事だけをセットする
//                 const filteredArticles = data.contents.filter((article: Article) => article.category.id === danceCategory.id);
//                 setArticles(filteredArticles);
//             } catch (error) {
//                 console.error("Failed to fetch articles:", error);
//                 setArticles([]);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchArticles();
//     }, []);

//     const handleArticleClick = (id: string) => {
//         router.push(`/dance-performance/${id}`);
//     };

//     if (loading) {
//         return (
//             <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#1c1c1c", color: "#fff" }}>
//                 <CircularProgress color="inherit" />
//             </Box>
//         );
//     }

//     return (
//         <Box sx={{ backgroundColor: "#1c1c1c", minHeight: "100vh", padding: "2rem" }}>
//             <Header />
//             <Box sx={{ padding: "2rem", color: "#fff" }}>
//                 <Typography variant="h4" gutterBottom>
//                     Dance Performances
//                 </Typography>

//                 <Grid container spacing={2}>
//                     {articles.map((article) => (
//                         <Grid item xs={12} sm={6} md={4} key={article.id}>
//                             <ArticleCard onClick={() => handleArticleClick(article.id)}>
//                                 <Thumbnail src={article.thumbnail} alt={article.title} />
//                                 <Typography variant="h6">{article.title}</Typography>
//                             </ArticleCard>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </Box>
//     );
// };

// export default DancePerformancePage;


"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/navigation";
import Header from "../Header";

const ArticleCard = styled(Box)({
    backgroundColor: "#2c2c2c",
    borderRadius: "8px",
    padding: "1rem",
    margin: "1rem 0",
    cursor: "pointer",
    transition: "transform 0.3s",
    "&:hover": {
        transform: "scale(1.03)",
    },
});

const Thumbnail = styled("img")({
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "0.5rem",
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

const DancePerformancePage: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                // カテゴリAPIからカテゴリ情報を取得
                const categoryResponse = await fetch("https://dcirs4q6ul.microcms.io/api/v1/categories", {
                    headers: {
                        "X-MICROCMS-API-KEY": "xbpDGJRqFsRAYSUtYzTndxF4NNLEJ1l9UwG5",
                    },
                });
                const categoriesData = await categoryResponse.json();

                // ダンスカテゴリのIDを取得
                const danceCategory = categoriesData.contents.find(
                    (category: { name: string }) => category.name === "ダンス・パフォーマンス"
                );

                // ブログAPIから記事を取得
                const response = await fetch("https://dcirs4q6ul.microcms.io/api/v1/blogs", {
                    headers: {
                        "X-MICROCMS-API-KEY": "xbpDGJRqFsRAYSUtYzTndxF4NNLEJ1l9UwG5",
                    },
                });
                const data = await response.json();

                // 特定のカテゴリIDに該当する記事だけをセットする
                const filteredArticles = data.contents.filter(
                    (article: Article) => article.category.id === danceCategory.id
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
        router.push(`/dance-performance/${id}`);
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
                    Dance Performances
                </Typography>

                <Grid container spacing={2}>
                    {articles.map((article) => (
                        <Grid item xs={12} sm={6} md={4} key={article.id}>
                            <ArticleCard onClick={() => handleArticleClick(article.id)}>
                                {/* アイキャッチ画像の表示 */}
                                <Thumbnail src={article.eyecatch?.url} alt={article.title} />
                                <Typography variant="h6">{article.title}</Typography>
                            </ArticleCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default DancePerformancePage;
