import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Skeleton} from "antd";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.Suspense fallback={<Skeleton/>}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </React.Suspense>
);
