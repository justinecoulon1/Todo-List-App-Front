import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { TitleBar } from './renderer/react/general/title-bar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Statistics } from './pages/statistics';
import { Settings } from './pages/settings';
import { SidebarProvider } from './renderer/react/contexts/sidebar-context';
import { Sidebar } from './renderer/react/general/sidebar';
import { TodoList } from './pages/todo-list';

function PageContent({ children }) {
        return (
                <div>
                        <SidebarProvider>
                                <TitleBar />
                                <Sidebar />
                        </SidebarProvider>
                        {children}
                </div>
        )
}

const router = createBrowserRouter([
        {
                path: "/main_window",
                element: (<PageContent><Home /></PageContent>),
        },
        {
                path: "/statistics",
                element: (<PageContent children={<Statistics />} />),
        },
        {
                path: "/settings",
                element: (<PageContent children={<Settings />} />),
        },
        {
                path: "/todo-list/:id",
                element: (<PageContent children={<TodoList />} />),
        },
]);

const root = createRoot(document.body);
root.render(
        <React.StrictMode>
                <RouterProvider router={router} />
        </React.StrictMode>
);