import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
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
  // const [contacts, setContacts] = useLocalStorage('ContactList', []);
  const [filter] = useState('');

  const addContact = ({ name, number }) => {
    const newContact = { id: shortid.generate(), name, number };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  const handleChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  const getFilteredNames = () => {
    const { contacts, filter } = this.state;
    const normalizedInputName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedInputName)
    );
  };

  const removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
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
