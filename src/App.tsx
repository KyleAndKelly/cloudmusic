import React, { Suspense } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import routes from './router';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现</Link>
        <Link to="/focus">关注</Link>
        <Link to="/mine">我的</Link>
        <Link to="/download">下载</Link>
      </div>
      <Suspense fallback="">
        <div className=" main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
