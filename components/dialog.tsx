import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import fromimportimport, { TextField } from "@mui/material";
import InputSelectorComponent from "./Option";
import moment from "moment";

interface DialogProps {
  dialogProps: { open: boolean; handleCloseDialog: any };
}
export default function ScheduleTestDialog(props: DialogProps) {
  const { open, handleCloseDialog } = props.dialogProps;
  const currentTime = moment();
  const formattedTime = currentTime.format("HH:mm");
  const formattedDate = currentTime.format("YYYY-MM-DD");

  const handleClose = () => {
    handleCloseDialog();
  };

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "80%",
            maxHeight: "80%",
          },
        }}
      >
        <DialogTitle> Plan Your Test </DialogTitle>
        <DialogContent>
          <TextField
            id="time"
            label="Alarm clock"
            type="time"
            defaultValue={formattedTime}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue={formattedDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <InputSelectorComponent />
          <InputSelectorComponent />
          <InputSelectorComponent />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// const Transition = React.forwardRef(function Transition(
//     props: TransitionProps & {
//       children: React.ReactElement<any, any>;
//     },
//     ref: React.Ref<unknown>
//   ) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });
