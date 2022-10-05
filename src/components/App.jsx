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
    name: '',
    number: '',
  };

  onAddContact = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const id = nanoid();
    const newContact = {
      name,
      id,
      phone,
    };

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

    form.reset();
  };

  handleChange = e => {
    this.setState(() => ({
      filter: e.target.value,
    }));
  };

  onDelete = e => {
    const name = e.currentTarget.getAttribute('name');

    this.state.contacts.map(item => {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        const index = this.state.contacts.indexOf(item);
        this.setState(prevState => ({
          contacts: [
            ...prevState.contacts.slice(0, index),
            ...prevState.contacts.slice(index + 1, this.state.contacts.length),
          ],
        }));
      }
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
