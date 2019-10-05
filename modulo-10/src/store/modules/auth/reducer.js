import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  singned: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@uth/SING_IN_REQUEST':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.singned = true;
      });
    default:
      return state;
  }
}
