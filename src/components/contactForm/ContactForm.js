import React from "react";
//4. Render a form with onSumbit attribute, input for contact data and submit button and refex for phone number
export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder={"John Doe"}
          required
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          pattern="^0[1-9]\d{8,9}$|^(?:\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$" //patten for either a UK landline or mobile number
          placeholder="01234 567890"
          required
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder={"example@email.com"}
          pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$" //simple email pattern
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
