import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ConfigProvider, theme} from "antd";
const BaseViewPage = React.lazy(()=>
    import("./views/BaseView")
)
function App() {
  const router = createBrowserRouter([
    {path: "/",element:<BaseViewPage/>}
  ])
  document.body.style.backgroundColor = "black"
  return (
      <ConfigProvider theme={{algorithm:theme.darkAlgorithm}}>
    <RouterProvider router={router}/>
      </ConfigProvider>
  );
}

export default App;
