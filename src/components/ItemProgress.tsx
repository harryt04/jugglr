import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { formatTime } from "../utils/unitConversion";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Moment } from "moment";

export const ItemProgress = (
  props: LinearProgressProps & {
    value: number;
    label: string;
    remainingseconds: number;
  },
) => {
  const [isOpen, setIsOpen] = React.useState(false);
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
      gridTemplateColumns: "1fr auto auto auto auto",
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
            props.remainingseconds,
          )} remaining`}</Typography>
        </div>
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          {isOpen && <CloseIcon />}
          {!isOpen && <EditIcon />}
        </IconButton>
        {isOpen && (
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              views={["minutes", "seconds"]}
              format="mm:ss"
              onChange={(newValue: Moment | null) => {
                if (!newValue) return;
                console.log("newValue: ", newValue.format("mm:ss"));
              }}
            />
          </LocalizationProvider>
        )}
        <IconButton aria-label="delete" color="error">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};
