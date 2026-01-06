// calendarSetup.ts
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Big Calendar CSS

// Set up localizer
export const localizer = momentLocalizer(moment);
