import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider, Skeleton, theme } from "antd";

const BaseViewPage = React.lazy(() => import("./views/BaseView"));
const Lab1ViewPage = React.lazy(() => import("./views/Lab1View"));

function App() {
  const router = createHashRouter([
    { path: "/", element: <BaseViewPage /> },
    { path: "/view", element: <Lab1ViewPage /> },
  ]);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0099FF",
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <React.Suspense fallback={<Skeleton />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </ConfigProvider>
  );
}

export default App;
