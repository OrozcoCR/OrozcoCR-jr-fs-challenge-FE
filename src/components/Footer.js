import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export function Footer() {
  return (
    <footer>
      <Container
        maxWidth="xl"
        sx={{
          py: 3,
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",margin: "auto",
          textAlign: "center"
          
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Shorter URL. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Made by:{" "}
          <Link href="https://www.linkedin.com/in/franklin-josue-orozco/">
            {" "}
            Ing. Orozco
          </Link>
        </Typography>
      </Container>
    </footer>
  );
}


