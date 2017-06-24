import Immutable from 'immutable';
import { UPDATE_FIELD } from '../actions';

export default function reducer(state = Immutable.fromJS({}), action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return state.set(action.field, action.value);
    default:
      return state;
  }
}
