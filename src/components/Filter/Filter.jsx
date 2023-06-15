import PropTypes from 'prop-types';
import { Input } from '../ContactForm/ContactForm.styled';

export default function Filter({ value, onChange }) {
  return (
    <div>
      <label>
        <p>Find contact by name</p>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          required
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
