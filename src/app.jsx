import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { TitleBar } from './renderer/react/general/title-bar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Statistics } from './pages/statistics';
import { Settings } from './pages/settings';

function PageContent({children}) {
        return (
                <div>
                        <TitleBar />
                        {children}
                </div>
        )
}

const router = createBrowserRouter([
        {
                path: "/main_window",
                element: (<PageContent><Home/></PageContent>),
        },
        {
                path: "/statistics",
                element: (<PageContent children={<Statistics />} />),
        },
        {
                path: "/settings",
                element: (<PageContent children={<Settings />} />),
        },
]);

const root = createRoot(document.body);
root.render(
        <React.StrictMode>
                <RouterProvider router={router} />
        </React.StrictMode>
);