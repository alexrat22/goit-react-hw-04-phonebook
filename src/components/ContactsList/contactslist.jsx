import PropTypes from 'prop-types';
import { ContactList, ContactItem, RemoveButton } from './ContactList.styled';

export default function ContactsList({ contacts, onRemoveBtnClick }) {
  return (
    <ContactList>
      {contacts.map(contact => {
        return (
          <ContactItem key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <RemoveButton
              type="button"
              onClick={() => onRemoveBtnClick(contact.id)}
            >
              Delete
            </RemoveButton>
          </ContactItem>
        );
      })}
    </ContactList>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveBtnClick: PropTypes.func.isRequired,
};
