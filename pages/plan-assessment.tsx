import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import styles from "../app/TestPlanSchedule.module.css"; // Import the CSS module
import { Button } from "@mui/material";
import ScheduleTestDialog from "components/dialog";

const localizer = momentLocalizer(moment);
const events = [
  {
    title: "Event 1",
    start: new Date(),
    end: new Date(new Date().setHours(new Date().getHours() + 1)),
  },
];

export default function TestPlanSchedule() {
  const [open, setOpen] = useState(false);
  const handleOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div
      className={`bg-gradient-to-r from-c-purple to-gray-950 h-[100vh] text-white ${styles.calender}`}
    >
      <Button onClick={handleOpenDialog}> Plan Your Assesment </Button>
      <ScheduleTestDialog dialogProps={{ open, handleCloseDialog }} />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: "95vh",
          width: "82vw",
          position: "fixed",
          right: "2vh",
          bottom: "2vh",
        }}
        views={{
          month: true,
          week: false,
          day: false,
          agenda: false,
        }}
      />
    </div>
  );
}
