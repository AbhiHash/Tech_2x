"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";


const localizer = momentLocalizer(moment);
const events = [
  {
    title: "Event 1",
    start: new Date(),
    end: new Date(new Date().setHours(new Date().getHours() + 1)),
  },
];
export default function TestPlanSchedule() {
  return (
    <div className="bg-gradient-to-r from-c-purple to-gray-950 h-[100vh] text-white">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: "98vh",
          width: "90vw",
          position: "fixed",
          right: "2vh",
          bottom: "2vh",
        }}
      />
    </div>
  );
}
