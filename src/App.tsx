import React, { Suspense } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import routes from './router';
import { shallowEqual} from 'react-redux';
import {useAppSelector,useAppDispatch} from './store';
import {changeMessageAction} from './store/modules/counter';


function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
    }),
    shallowEqual
  );
  const dispatch  = useAppDispatch()
  function handleChangeMessage (){
    dispatch(changeMessageAction('HHHHH'))
  }
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现</Link>
        <Link to="/focus">关注</Link>
        <Link to="/mine">我的</Link>
        <Link to="/download">下载</Link>
      </div>
      <div>count: {count}</div>
      <div>message: {message}</div>
      <button onClick={handleChangeMessage}>change message</button>
      <Suspense fallback="">
        <div className=" main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
