import { useSelector } from 'react-redux';
import { useActions } from './use-actions';
import { incrementAction, decrementAction, setAction } from './actions';
export const useCounter = () => {
  const count = useSelector((state) => state.count);
  const actions = useActions({ incrementAction, decrementAction, setAction });

  return { count, ...actions };
};
