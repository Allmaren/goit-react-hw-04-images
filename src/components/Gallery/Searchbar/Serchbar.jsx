import PropTypes from 'prop-types';
import { useState } from 'react';
import { SearchForm, Input } from './SeachBar.styled.js';
// import { BiSearchAlt } from 'react-icons/bi';

import { initialState } from 'components/elements/services/initialState.js';

const SearchBar = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { search } = state;

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="🔍 Search images and photos"
        required
        name="search"
        value={search}
        onChange={handleChange}
      />
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
