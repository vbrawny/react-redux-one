import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useActions } from './use-actions';
import { decrementAction, incrementAction, setAction } from './actions';
import { SetCounter } from './SetCounter';
import { useCounter } from './useCounter';

export const Counter = () => {
  const incident = 'Incident';

  //using custom hook useCounter

  //const [count, actions] = useCounter();
  const { count, incrementAction, decrementAction, setAction } = useCounter();

  //we can even replace with custom hooks - useCounter
  //const count = useSelector((state) => state.count);

  //useReducer - takes reducer in tht component
  //and you could do in context API
  //and then it gives you both state and dispatch

  //useSelector gets the selector anywhere we needed
  //and then use dispatch to get you whenever you need
  //dispatch
  //so if we need memoizing and caching this works for you.

  //we can replace with custom hook use-actions
  //const dispatch = useDispatch();

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

  /*
  if we donot like to write dispatch in the below way
  <button onClick={() => dispatch(incrementAction())}>Increment</button>
          <button onClick={() => dispatch(setAction(0))}>Reset</button>
          <button onClick={() => dispatch(decrementAction())}>Decrement</button>
  then we can use bindActionCreators
  */

  //we can use custom hook too to put all actions into one
  // const actions = bindActionCreators(
  //   { incrementAction, decrementAction, setAction },
  //   dispatch
  // );
  //we can even replace with custom hooks - useCounter
  //const actions = useActions({ incrementAction, decrementAction, setAction });

  return (
    <>
      <main className="Counter">
        <h1>Days Since Last {incident}</h1>
        <p className="count">{count}</p>
        <section className="controls">
          {/* <button onClick={() => dispatch(incrementAction())}>Increment</button>
          <button onClick={() => dispatch(setAction(0))}>Reset</button>
          <button onClick={() => dispatch(decrementAction())}>Decrement</button> */}
          {/* <button onClick={() => incrementAction()}>Increment</button>
          <button onClick={() => setAction(0)}>Reset</button>
          <button onClick={() => decrementAction()}>Decrement</button> */}
          <button onClick={() => incrementAction()}>Increment</button>
          <button onClick={() => setAction(0)}>Reset</button>
          <button onClick={() => decrementAction()}>Decrement</button>
        </section>
        <SetCounter />
      </main>
    </>
  );
};

export default Counter;
