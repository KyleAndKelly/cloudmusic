import React, { memo } from 'react';
import type { FC,ReactNode } from 'react';
import { Outlet,Link} from 'react-router-dom';
interface IProps {
  children?: ReactNode;
}
const Discover: FC<IProps> = (props) => {
  return (
    <div>
        <div>
          <Link to="/discover/recommend" >Recommend</Link>
          <Link to="/discover/ranking" >Ranking</Link>
          <Link to="/discover/djradio" >Dj</Link>
          <Link to="/discover/artist" >Artist</Link>
          <Link to="/discover/album" >Album</Link>
        </div>
        <Outlet/>
    </div>
  );
};

export default memo(Discover);
