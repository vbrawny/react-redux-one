export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET = 'SET';

export const incrementAction = () => ({ type: INCREMENT });

export const decrementAction = () => ({ type: DECREMENT });

export const setAction = (value) => ({ type: SET, payload: value });
