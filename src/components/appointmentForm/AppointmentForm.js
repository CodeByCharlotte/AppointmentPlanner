import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      {/* 8a. Render a form with the onSubmit attribute set to the callback function */}
      <form onSubmit={handleSubmit}>
        {/* 8b. 3 controlled input components, to be used for the name, date and time appointment data*/}
        <label htmlFor="name">Appointment Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
        <br />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          min={getTodayString()}
          onChange={({ target }) => setDate(target.value)}
          required
        />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="time"
          value={time}
          onChange={({ target }) => setTime(target.value)}
          required
        />
        {/* Pass the setContact function to the onChange prop */}
        <label htmlFor="ContactPicker">Contact</label>
        <ContactPicker
          contacts={contacts}
          value={contact}
          onChange={({ target }) => setContact(target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
