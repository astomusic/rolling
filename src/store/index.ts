import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import toast, { epics as toastEpics, ToastState } from './toast';

export interface StoreState {
  toast: ToastState;
}

export default combineReducers({
  toast,
});

export const rootEpic = combineEpics(toastEpics);
