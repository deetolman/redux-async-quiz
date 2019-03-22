import reducer from './image';
import { FETCH_IMAGE } from '../actions/image';

describe('reducer test', () => {
  it('can fetch image', () => {
    const state =  {
      image: '',
      loading: false
    };
    const reducerState = reducer(state, {
      type: FETCH_IMAGE,
      payload: {
        image: 'image',
        loading: true
      }
    });
    expect(reducerState).toEqual({ image: 'image', loading: false });
  });
});

