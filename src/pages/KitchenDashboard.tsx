import React from "react";
import { DashBoardCard } from "../components/DashBoardCard";

export const KitchenDashboard = () => {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "3rem",
      justifyContent: "center",
      alignContent: "center",
      height: "100vh",
    },
  };
  return (
    <>
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
