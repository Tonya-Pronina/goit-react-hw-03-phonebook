import React from 'react';
import css from "components/Filter/Filter.module.css";
import PropTypes from 'prop-types';

export default function Filter ({handleFilter, filterValue}) {
    return (
    <div className={css.contactsFilter}>
        <title className={css.filterTitle}>Find contacts by name</title>
        <input
          className={css.input}
          name="filter"
          type="text"
          placeholder="search..."
          value={filterValue}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleFilter}
        />
    </div>
    )
};

Filter.propTypes = {
    handleFilter: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired
}