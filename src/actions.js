export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const SET = 'set';

export const incrementAction = () => ({ type: INCREMENT });

export const decrementAction = () => ({ type: DECREMENT });

export const setAction = (value) => ({ type: SET, payload: value });
