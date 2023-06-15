import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import {
  FormContainer,
  ContactsContainer,
  Title,
  TitleContacts,
} from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/contactslist';
import Filter from './Filter/Filter';
import shortid from 'shortid';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('ContactList', []);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const newContact = { id: shortid.generate(), name, number };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(contacts => [newContact, ...contacts]);
    }
  };

  const handleChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getFilteredNames = () => {
    const normalizedInputName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedInputName)
    );
  };

  const removeContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <>
      <FormContainer>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
      </FormContainer>
      <ContactsContainer>
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} onChange={handleChange} />
        <ContactsList
          contacts={getFilteredNames()}
          onRemoveBtnClick={removeContact}
        />
      </ContactsContainer>
    </>
  );
}
