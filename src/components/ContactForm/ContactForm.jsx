import React from 'react';
import css from "components/ContactForm/ContactForm.module.css";
import PropTypes from 'prop-types';


export default class ContactForm extends React.Component {
     state = {
        name: '',
        number: '',
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    };


   handleSubmit = e => {
    e.preventDefault();

    const contactExisting = this.props.contacts.some((contact)=> contact.name === this.state.name);
    if (contactExisting) {
      alert(`${contactExisting.name} is already in contacts`);
      this.setState({
        name: '',
      });
    } else {
      this.props.onAddContact({ ...this.state });
      this.setState({
        name: '',
        number: '',
      });
    }
  };



    render() {
        const {name, number} = this.state;

        return (
        <form className={css.contactForm} onSubmit={this.handleSubmit}>
        <label className={css.label}>
            <p>Name</p>
            <input 
            className={css.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            />
        </label>

        <label className={css.label}>
            <p>Number</p>
            <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            />
        </label>

        <button className={css.btn}>
            Add contact
        </button>

        </form>
    )
    }
    
};

ContactForm.propTypes = {
    onChange: PropTypes.func,
    onAddContact: PropTypes.func,
    contacts: PropTypes.array.isRequired
  };