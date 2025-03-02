import React, { memo, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { getChannelsAPI } from '@/apis/article';

interface IProps {
  children?: ReactNode;
}
const Recommend: FC<IProps> = (props) => {
  const [channels, setChannelList] = useState([]);
  useEffect(() => {
    async function getChannelList() {
      const res = await getChannelsAPI();
      setChannelList(res.data.channels);
    }
    getChannelList();
  },[]);
  return <div>{channels.length }</div>;
};

export default memo(Recommend);
