import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

const SHOW_TOAST = 'SHOW_TOAST';
const HIDE_TOAST = 'HIDE_TOAST';

// ==========================================
// types
// ==========================================
export interface ToastState {
  data: Toast;
}

export interface Toast {
  error: boolean;
  text: React.ReactNode;
}

interface ToastAction {
  payload: Toast;
  type: string;
}

// ==========================================
// Actions
// ==========================================
export const show = (payload: Toast) => ({
  payload,
  type: SHOW_TOAST,
});
export const hide = () => ({
  payload: null,
  type: HIDE_TOAST,
});

// ==========================================
// reducer
// ==========================================
const initialState: ToastState = {
  data: null,
};

const toast = (state = initialState, action: ToastAction) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        data: action.payload,
      };
    case HIDE_TOAST: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
export default toast;

// ==========================================
// Epics
// ==========================================
const showEpic = (action$) =>
  action$.pipe(
    ofType(SHOW_TOAST),
    delay(5000),
    mergeMap(() => of(hide())),
  );

export const epics = combineEpics(showEpic);
