import React from 'react';
import css from "components/ContactList/ContactList.module.css";
import ContactListItem from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export default function ContactList ({contactsArr, removeContact}) {
    return (
        <ul className={css.list}>
      {contactsArr.map(({ name, number, id }) => {
        return (
          <li className={css.item} key={id}>
            <ContactListItem name={name} number={number} />

            <button
              className={css.btn}
              onClick={() => {
                removeContact(id);
              }}
            >
              Delete
            </button>

          </li>
        );
      })}
    </ul>
    )
};

ContactList.propTypes = {
    contactsArr: PropTypes.arrayOf(
        PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
    ).isRequired,
    removeContact: PropTypes.func.isRequired
}