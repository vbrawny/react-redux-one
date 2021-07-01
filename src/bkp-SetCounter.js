// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setAction } from './actions';

// export const SetCounter = () => {
//   const countFromStore = useSelector((state) => state.count);
//   //const [count, setCount] = useState(0);
//   const [count, setCount] = useState(countFromStore);
//   const dispatch = useDispatch();

//   // to handle changes of count from store asynchronously
//   //and make this component updated based on the update
//   //happened on external react pages in the same app
//   useEffect(() => {
//     setCount(countFromStore);
//   }, [countFromStore]);

//   return (
//     <section className="controls">
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           dispatch(setAction(count));
//         }}
//       >
//         <label htmlFor="set-to">Set Count</label>
//         <input
//           id="set-to"
//           type="number"
//           value={count}
//           onChange={(event) => setCount(event.target.value)}
//         />
//         <input type="submit" />
//       </form>
//     </section>
//   );
// };

// //export default SetCounter;
// ////import SetCounter from './setCounter';
