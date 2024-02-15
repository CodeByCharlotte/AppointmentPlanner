import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  //2a. Keep track of the contacts and appointments data, each being an array of objects
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  //2b. Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
  const addContact = (name, phone, email) => {
    setContacts((prev) => [...prev, { name, phone, email }]);
  };

  //2c. Define a callback function that, given a name, contact, date, and time, adds a new appointment object with that data to the array of appointments
  const addAppointment = (name, contact, date, time) => {
    setAppointments((prev) => [...prev, { name, contact, date, time }]);
  };

  //2d. and 2e. Pass the arrays and callbacks to the components
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} addContact={addContact} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              addAppointment={addAppointment}
              appointments={appointments}
              contacts={contacts}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
