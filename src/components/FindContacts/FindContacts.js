import PropTypes from 'prop-types';
import { Label, Filter } from './FindContacts.styles';

FindContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default function FindContacts({ filter, setFilter }) {
  return (
    <Label>
      <span>
        <b>Find contacts by name:</b>
      </span>
      <Filter value={filter} onChange={e => setFilter(e.target.value)} />
    </Label>
  );
}
