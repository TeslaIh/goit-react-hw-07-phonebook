import { useDispatch } from 'react-redux';
import { Label, Input } from './FindContacts.styles';
import { changeFilter } from 'redux/contacts/contacts-filter';

function FindContacts() {
  const dispatch = useDispatch();

  const changeFieldFilter = e => {
    const value = e.currentTarget.value;
    dispatch(changeFilter(value));
  };

  return (
    <Label>
      <b>Find contacts by name:</b>
      <Input type="text" onChange={changeFieldFilter} name="filter" />
    </Label>
  );
}

export default FindContacts;