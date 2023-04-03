import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import ContactForm from 'components/ContactForm/ContactForm';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
        <h1>Contacts</h1>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
        <Contacts />
    </div>
  )
}

export default ContactsPage;