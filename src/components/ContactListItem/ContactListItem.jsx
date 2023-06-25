import React from 'react';
import css from "components/ContactListItem/ContactListItem.module.css";
import PropTypes from 'prop-types';

export default function ContactListItem ({ name, number }) {
  return (
    <div className={css.contactItem}>
      <p className={css.name}>{name} :</p>
      <p className={css.number}>{number}</p>
    </div>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};