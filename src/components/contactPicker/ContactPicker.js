import React from "react";

// 9a. Receive 4 props: contacts, onChange, value, name
export const ContactPicker = ({ contacts, onChange, value, name }) => {
  console.log("Contacts array:", contacts); // Log the contacts array here
  return (
    <>
      {/* 9b. Render a select element */}
      <select name={name} value={value} onChange={onChange}>
        {/* 9c. Add a default option element with the text “No Contact Selected” and a value attribute of "". */}
        <option value="">No Contact Selected</option>
        {/* 9d. Iteratively add option elements using the contact names from the array passed in via props */}
        {contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default ContactPicker;
