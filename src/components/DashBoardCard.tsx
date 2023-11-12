import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ItemProgress } from "./ItemProgress";

export const DashBoardCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Grill number 1
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          3 active orders
        </Typography>
        <ItemProgress value={55} label={"Steak 1"} remainingSeconds={345} />
        <ItemProgress value={20} label={"Steak 2"} remainingSeconds={234} />
        <ItemProgress
          value={70}
          label={"Ceasar Salad 1"}
          remainingSeconds={123}
        />
      </CardContent>
    </Card>
  );
};
