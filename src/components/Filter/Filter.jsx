import css from './Filter.module.css';
import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <>
        <p className={css.paragraph}>Find contacts by name</p>
        <input
          className={css.input}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.handleChange}
        />
      </>
    );
  }
}

export default Filter;
