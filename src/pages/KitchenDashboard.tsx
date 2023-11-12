import React from "react";
import { DashBoardCard } from "../components/DashBoardCard";
import { Typography } from "@mui/material";

export const KitchenDashboard = () => {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "3rem",
      justifyContent: "center",
      alignContent: "center",
    },
    title: {
      textAlign: "center",
      justifyContent: "center",
      paddingBottom: "3rem",
    },
  };
  return (
    <>
      <Typography sx={styles.title} variant="h2">
        Kitchen Dashboard (mockup)
      </Typography>
      <div style={styles.container}>
        <DashBoardCard />
        <DashBoardCard />
        <DashBoardCard />
        <DashBoardCard />
        <DashBoardCard />
        <DashBoardCard />
      </div>
    </>
  );
};
