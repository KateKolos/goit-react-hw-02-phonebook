import { Component } from 'react';
import {
  AddContactButton,
  ContactFormWrapper,
  ContactInput,
  ContactName,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ name: this.state.name, number: this.state.number });

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactFormWrapper onSubmit={this.handleSubmit}>
        <ContactName htmlFor="name">
          Name
          <ContactInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
        </ContactName>

        <ContactName htmlFor="number">
          Number
          <ContactInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </ContactName>
        <AddContactButton type="submit">Add contact</AddContactButton>
      </ContactFormWrapper>
    );
  }
}
