import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export const useActions = (actions) => {
  const dispatch = useDispatch();
  //helps in memoizing the so that it
  return useMemo(() => bindActionCreators(actions, dispatch), [
    actions,
    dispatch
  ]);
};
