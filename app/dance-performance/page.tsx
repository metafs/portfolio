"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, CircularProgress } from "@mui/material";

type Blog = {
    id: string;
    title: string;
    content: string;
};

const DancePerformance: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("https://dcirs4q6ul.microcms.io/api/v1/blogs", {
                    headers: {
                        "X-API-KEY": "xbpDGJRqFsRAYSUtYzTndxF4NNLEJ1l9UwG5",
                    },
                });
                const data = await res.json();
                setBlogs(data.contents);
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Grid container spacing={3}>
            {blogs.map((blog) => (
                <Grid item xs={12} sm={6} md={4} key={blog.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{blog.title}</Typography>
                            <Typography variant="body2">{blog.content.slice(0, 100)}...</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default DancePerformance;
