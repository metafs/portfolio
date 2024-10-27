"use client";

import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header: React.FC = () => {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const menuItems = [
        { label: "HOME", path: "/" },
        { label: "Dance Performance", path: "/dance-performance" },
        { label: "Lighting", path: "/lighting" },
        { label: "Photography Video", path: "/photography-video" },
        { label: "CV", path: "/cv" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: "#333" }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Shoya Fukunaga
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={toggleDrawer(true)}
                            sx={{ ml: "auto" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            <List sx={{ width: 250 }}>
                                {menuItems.map((item) => (
                                    <ListItem
                                        button
                                        key={item.label}
                                        onClick={() => {
                                            router.push(item.path);
                                            setDrawerOpen(false);
                                        }}
                                    >
                                        <ListItemText primary={item.label} />
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    menuItems.map((item) => (
                        <Button
                            color="inherit"
                            key={item.label}
                            onClick={() => router.push(item.path)}
                        >
                            {item.label}
                        </Button>
                    ))
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
