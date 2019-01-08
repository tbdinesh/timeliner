import { combineReducers } from 'redux';

import viewState from './viewState';
import project from './project';
import canvas from './canvas';
import range from './range';
import markers from './markers';

export default combineReducers({
  viewState,
  project,
  canvas,
  range,
  markers,
});
