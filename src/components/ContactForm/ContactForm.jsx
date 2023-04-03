import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import Form from 'components/Form/Form';

export function ContactForm( ) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const isInContacts = (name) => {
    return contacts.some(contact => contact.name === name);
  }

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default: throw Error('unknown name');
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    if (isInContacts(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({name, number}))
    reset();
    };

  const reset = () => {
    setName('');
    setNumber('');
    };

  return (
    <Form>
        <h1>Phonebook</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>Name
          <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={nameInputId}
            />
          </label>
          <label htmlFor={telInputId}>Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={telInputId} />
          </label>
          <button type='submit'>Add contact</button>
      </form>
      </Form>
  )
}

export default ContactForm;