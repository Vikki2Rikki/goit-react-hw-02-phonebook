import { Component } from 'react';
import { FilterWrap } from './Filter.styled';
import PropTypes from 'prop-types';

class Filter extends Component {
  state = { filter: '' };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
    this.props.onChange({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <FilterWrap>
        <label>Find contacts by name</label>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
        />
      </FilterWrap>
    );
  }
}

Filter.propTypes = { onChange: PropTypes.func };

export default Filter;
