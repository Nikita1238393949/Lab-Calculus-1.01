import React from 'react';
import {createHashRouter, RouterProvider} from "react-router-dom";
import {ConfigProvider, Skeleton, theme} from "antd";

const BaseViewPage = React.lazy(() =>
    import("./views/BaseView")
)

function App() {
    const router = createHashRouter([
        {path: "/", element: <BaseViewPage/>}
    ])
    document.body.style.backgroundColor = "black"
    return (
        <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
            <React.Suspense fallback={<Skeleton/>}>
                <RouterProvider router={router}/>
            </React.Suspense>
        </ConfigProvider>
    );
}

export default App;
