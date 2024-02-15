import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

//7a. Receive three props: appointment, contacts, callback for new appointment
export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointment,
}) => {
  //7b. Keep track of four local state variables, the current name, contact, date, and time entered into the form
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //7c. Add a new appointment on form submission
    addAppointment(name, contact, date, time);
    //7d. Clear the form on submission
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {/* 7e. Render an AppointmentForm */}
        <AppointmentForm
          contacts={contacts}
          name={name}
          setName={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <br />
      <section>
        <h2>Appointments</h2>
        {/* 7f. In the Appointments section, render a TileList with the appointment array passed via props */}
        <TileList data={appointments} />
      </section>
    </div>
  );
};
