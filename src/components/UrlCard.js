import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UrlCard = ({ url }) => {
  return (
    <div style={{ overflowY: "auto", maxHeight: "200px" }}> {/* Estilos para el scroll */}
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Title: {url.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            URL: {url.full_url}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Short Code: {url.short_code}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Click count: {url.click_count}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UrlCard;
