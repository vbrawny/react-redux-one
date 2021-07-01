import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, setAction } from './actions';
export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);

  //useReducer - takes reducer in tht component
  //and you could do in context API
  //and then it gives you both state and dispatch

  //useSelector gets the selector anywhere we needed
  //and then use dispatch to get you whenever you need
  //dispatch
  //so if we need memoizing and caching this works for you.

  const dispatch = useDispatch();

  /*
   previously when we use redux, we used connect api to 
   wrap presentational component with all the goodness of redux
   to pass everything as props.
   Now 
   useSelector is the replacement for MapStateToProps
   useDispatch is the replacement for MapDispacthToProps#

   So if we used redux in previous days these two hooks are 
   the replacement of those two connect API methods.
  */

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => dispatch(incrementAction())}>Increment</button>
        <button onClick={() => dispatch(setAction(0))}>Reset</button>
        <button onClick={() => dispatch(decrementAction())}>Decrement</button>
      </section>
    </main>
  );
};

export default Counter;
