import css from './Contacts.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contacts extends Component {
  onFilterArray = () => {
    let filteredArray = [];
    if (this.props.filter === '') {
      filteredArray = [...this.props.contacts];
      console.log(filteredArray);
    } else if (this.props.filter !== '') {
      this.props.contacts.forEach(item => {
        if (item.name.toLowerCase().includes(this.props.filter.toLowerCase())) {
          filteredArray.push(item);
        }
      });
    }
    return filteredArray;
  };

  render() {
    return (
      <>
        <ul className={css.list}>
          {this.onFilterArray().map(item => {
            return (
              <li className={css.item} key={item.id}>
                {item.name}: {item.phone}
                <button
                  className={css.button}
                  name={item.name}
                  onClick={this.props.onDelete}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Contacts;

Contacts.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
