import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { formatTime } from "../utils/unitConversion";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const ItemProgress = (
  props: LinearProgressProps & {
    value: number;
    label: string;
    remainingSeconds: number;
  },
) => {
  const styles = {
    container: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "1rem",
      alignItems: "center",
      paddingTop: "1rem",
    },
    rightColumn: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      gridTemplateColumns: "1fr auto auto",
    },
  };

  return (
    <div style={styles.container}>
      <LinearProgress variant="determinate" {...props} />
      <div style={styles.rightColumn}>
        <div>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}% ${props.label}`}</Typography>
          <Typography variant="body2" color="text.disabled">{`${formatTime(
            props.remainingSeconds,
          )}`}</Typography>
        </div>
        <IconButton aria-label="edit" color="primary">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" color="error">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};
