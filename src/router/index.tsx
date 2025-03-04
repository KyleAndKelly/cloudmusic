import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
// import Discover  from '@/views/discover';
// import Download from '@/views/download';
// import Focus from '@/views/focus';
// import Mine from '@/views/mine';

import { lazy } from 'react';

const Discover = lazy(() => import('@/views/discover'));
const Recommend = lazy(() => import('@/views/discover/c views/recommend'));
const Ranking = lazy(() => import('@/views/discover/c views/ranking'));
const Djradio = lazy(() => import('@/views/discover/c views/djradio'));
const Artist = lazy(() => import('@/views/discover/c views/artist'));
const Album = lazy(() => import('@/views/discover/c views/album'));
const Download = lazy(() => import('@/views/download'));
const Focus = lazy(() => import('@/views/focus'));
const Mine = lazy(() => import('@/views/mine'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover/recommend" />, // 重定向到 /discover
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover/recommend',
        element: <Recommend />,
      },
      {
        path: '/discover/ranking',
        element: <Ranking />,
      },
      {
        path: '/discover/Djradio',
        element: <Djradio />,
      },
      {
        path: '/discover/artist',
        element: <Artist />,
      },
      {
        path: '/discover/album',
        element: <Album />,
      },
    ],
  },
  {
    path: '/download',
    element: <Download />,
  },
  {
    path: '/focus',
    element: <Focus />,
  },
  {
    path: '/mine',
    element: <Mine />,
  },
];

export default routes;
