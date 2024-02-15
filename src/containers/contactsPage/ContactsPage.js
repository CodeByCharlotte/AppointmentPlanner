import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

//3a. Receive two props
export const ContactsPage = ({ contacts, addContact }) => {
  //3b. Keep track of three local state values: the current name, phone, and email entered into the form
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  //3c. Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
  //local state variable to track a duplicate name
  const [dupe, setDupe] = useState(false);
  //call useEffect to sets the duplicate state variable to true if the name state variable is already in the contacts list
  useEffect(() => {
    //if used to avoid undefined result on first load
    if (contacts && contacts.length > 0) {
      const isDuplicate = contacts.some((contact) => contact.name === name); //some will find even one duplicate name and return a true result
      setDupe(isDuplicate);
    } else {
      setDupe(false);
    }
  }, [contacts, name]); //dependancy array to ensure the useEffect triggers upon changes to the contacts or name

  //3d. Only add a new contact on form submission if it does not duplicate an existing contact’s name
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dupe) {
      addContact(name, phone, email);
      //3e. A successful submission should clear the form
      setName("");
      setPhone("");
      setEmail("");
    }
  };
  //3f. Render ContactForm in Add Contact Section
  //3g. Render TileList with contact array passed via props in the Contacts section
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
