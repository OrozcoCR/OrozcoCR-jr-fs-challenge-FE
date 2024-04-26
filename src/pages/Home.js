import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import BasicTable from "../components/BasicTable";
import UrlCard from "../components/UrlCard";

export function Home() {
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    loadUrls();
  }, []);

  async function loadUrls() {
    setIsLoading(true);
    try {
      const urlsRequest = await fetch("/short_urls.json");
      if (urlsRequest.ok) {
        const data = await urlsRequest.json();
        setIsLoading(false);
        setUrls(data.urls);
      } else {
        console.error("Error al cargar las URLs");
      }
    } catch (error) {
      console.error("Error al cargar las URLs:", error);
    }
    setIsLoading(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ marginTop: "64px", marginBottom: "64px" }}>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <CircularProgress />
          </Box>
        ) : isSmallScreen ? (
          <Grid container spacing={2}>
            {urls.map((url, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <UrlCard url={url} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ overflowY: "auto", minWidth:"1000px", maxWidth: "100%", width: "100%" }}>
            <BasicTable urls={urls} />
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
}
