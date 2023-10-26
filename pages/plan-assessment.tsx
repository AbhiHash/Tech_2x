// "use client";
// // import React, { useState } from "react";
// // import { Calendar, momentLocalizer } from "react-big-calendar";
// // import "react-big-calendar/lib/css/react-big-calendar.css";
// // import moment from "moment";

// // const localizer = momentLocalizer(moment);
// // const events = [
// //   {
// //     title: "Event 1",
// //     start: new Date(),
// //     end: new Date(new Date().setHours(new Date().getHours() + 1)),
// //   },
// // ];

// // const calendarStyles = {
// //   ".rbc-month-row": {
// //     backgroundColor: "#581065",
// //   },
// //   ".rbc-header": {
// //     backgroundColor: "#581065",
// //   },
// //   ".rbc-today": {
// //     backgroundColor: "#581065",
// //   },
// // };

// // export default function TestPlanSchedule() {
// //   return (
// //     <div className="bg-gradient-to-r from-c-purple to-gray-950 h-[100vh] text-white">
// //       <Calendar

// //         localizer={localizer}
// //         events={events}
// //         startAccessor="start"
// //         endAccessor="end"
// //         style={{
// //           height: "95vh",
// //           width: "82vw",
// //           position: "fixed",
// //           right: "2vh",
// //           bottom: "2vh",
// //         }}
// //         views={{
// //           month: true,
// //           week: false,
// //           day: false,
// //           agenda: false,
// //         }}
// //       />
// //     </div>
// //   );
// // }

// // import FullCalendar from "@fullcalendar/react";
// // import dayGridPlugin from "@fullcalendar/daygrid";

// // const events = [
// //   {
// //     title: "DATA STRUCTURE AND ALGORITHMS",
// //     start: "2023-10-05T10:00:00", // Replace with the actual start date and time of your course
// //     end: "2023-10-05T12:00:00", // Replace with the actual end date and time of your course
// //   },
// // ];

// // export default function TestPlanSchedule() {
// //   return (
// //     <div className="bg-gradient-to-r from-c-purple to-gray-950 text-white border-red ">
// //       <FullCalendar
// //         plugins={[dayGridPlugin]}
// //         initialView="dayGridMonth"
// //         weekends={false}
// //         events={events}
// //         eventContent={renderEventContent}
// //         height="100vh"
// //         // style={{ borderColor: "red", backgroundColor: "lightgray" }}
// //       />
// //     </div>
// //   );
// // }

// // function renderEventContent(eventInfo: any) {
// //   return (
// //     <>
// //       <b>{eventInfo.timeText}</b>
// //       <i>{eventInfo.event.title}</i>
// //     </>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// const eventStartDate: Date = new Date("2023-10-05T10:00:00"); // Replace with your event's start date and time

// export default function TestPlanSchedule() {
//   const [timeLeft, setTimeLeft] = useState<string | null>(calculateTimeLeft());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   function calculateTimeLeft(): string | null {
//     const currentDate: Date = new Date();
//     const difference: number = eventStartDate.getTime() - currentDate.getTime();

//     if (difference <= 0) {
//       return "Event has started";
//     }

//     const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours: number = Math.floor(
//       (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutes: number = Math.floor(
//       (difference % (1000 * 60 * 60)) / (1000 * 60)
//     );
//     const seconds: number = Math.floor((difference % (1000 * 60)) / 1000);

//     return `${days}d ${hours}h ${minutes}m ${seconds}s`;
//   }

//   function renderEventContent(eventInfo: any) {
//     return (
//       <>
//         <div>{eventInfo.event.title}</div>
//         <div>{timeLeft}</div>
//       </>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-r from-c-purple to-gray-950 text-white border-red">
//       <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView="dayGridMonth"
//         weekends={false}
//         height="100vh"
//         events={[
//           {
//             title: "DATA STRUCTURE AND ALGORITHMS",
//             start: eventStartDate,
//           },
//         ]}
//         eventContent={renderEventContent}
//       />
//     </div>
//   );
// }
