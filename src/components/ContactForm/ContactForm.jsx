import { Component } from 'react';
import {
  FormContainer,
  WrapInput,
  Input,
  BtnSubmit,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  //введені данні
  HandleInput = ({ target: { name, value } }) => {
    console.log('evt.target', name);
    this.setState({
      [name]: value,
    });
  };

  //відправка введених данних
  HandleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });

    this.reset();
  };

  // Очистка форми після сабміту
  reset() {
    this.setState({
      ...INITIAL_STATE,
    });
  }
  render() {
    return (
      <FormContainer>
        <form className="form" onSubmit={this.HandleSubmit}>
          <WrapInput>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.HandleInput}
              value={this.state.name}
            />
          </WrapInput>
          <WrapInput>
            <label htmlFor="exampleInputNumber" className="form-label">
              Number
            </label>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.HandleInput}
              value={this.state.number}
            />
          </WrapInput>
          <BtnSubmit type="submit">Add contact</BtnSubmit>
        </form>
      </FormContainer>
    );
  }
}

ContactForm.propTypes = { onSubmit: PropTypes.func };

export default ContactForm;
