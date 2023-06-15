import React, { Component } from 'react';
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

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('ContactList', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('ContactList'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  addContact = ({ name, number }) => {
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

  handleChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredNames = () => {
    const { contacts, filter } = this.state;
    const normalizedInputName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedInputName)
    );
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <FormContainer>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.addContact} />
        </FormContainer>
        <ContactsContainer>
          <TitleContacts>Contacts</TitleContacts>
          <Filter value={this.state.filter} onChange={this.handleChange} />
          <ContactsList
            contacts={this.getFilteredNames()}
            onRemoveBtnClick={this.removeContact}
          />
        </ContactsContainer>
      </>
    );
  }
}

export default App;
