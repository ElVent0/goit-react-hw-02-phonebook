import css from './Contacts.module.css';
import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    let filteredArray = [];

    if (this.props.filter === '') {
      filteredArray = [...this.props.contacts];
      console.log(filteredArray);
    } else if (this.props.filter !== '') {
      this.props.contacts.map(item => {
        if (item.name.toLowerCase().includes(this.props.filter.toLowerCase())) {
          filteredArray.push(item);
        }
      });
      console.log(filteredArray);
    }

    return (
      <>
        <ul className={css.list}>
          {filteredArray.map(item => {
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
