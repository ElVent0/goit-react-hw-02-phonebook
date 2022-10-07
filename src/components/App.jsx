import React, { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onAddContact = (name, phone) => e => {
    const id = nanoid();
    const newContact = {
      name,
      id,
      phone,
    };
    console.log(this.state);
    if (
      this.state.contacts.some(item => {
        return item.name.toLowerCase() === name.toLowerCase();
      })
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleChange = e => {
    this.setState(() => ({
      filter: e.target.value,
    }));
  };

  onDelete = id => e => {
    const name = e.currentTarget.getAttribute('name');

    this.state.contacts.map(item => {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        this.setState(prevState => ({
          contacts: prevState.contacts.filter(item => item.id !== id),
        }));
      }
      return item;
    });
  };

  render() {
    return (
      <>
        <h2 className={css.header}>Phonebook</h2>
        <Phonebook onAddContact={this.onAddContact} />
        <h2 className={css.header}>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleChange={this.handleChange}
        ></Filter>
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}
