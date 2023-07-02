import { Component } from 'react';
import { List, ContacItem, DeleteBtn } from './ContactList.slyled';
import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    const { filter, contacts } = this.props;
    const contactList = filter
      ? contacts.filter(({ name }) => name.toLowerCase().includes(filter))
      : contacts;
    return (
      <List>
        {contactList.map(({ id, name, number }) => (
          <ContacItem key={id}>
            {`${name}: ${number}`}
            <DeleteBtn
              type="submit"
              onClick={() => this.props.onDeleteContact(id)}
            >
              X
            </DeleteBtn>
          </ContacItem>
        ))}
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
