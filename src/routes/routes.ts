import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import RequestsPage from "../pages/request-page/request-page";
import NewRequest from "../components/new-request/new-request";
import EditRequest from "../components/edit-request/edit-request";
import EmptyPage from "../pages/empty-page/empty-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/requests', Component: RequestsPage,
                children: [
                    { path: 'new', Component: NewRequest },
                    { path: ':id/edit', Component: EditRequest },

                ]
            },
            {
                path: '/knowledge-base', Component: EmptyPage
            },
            {
                path: '/employees', Component: EmptyPage
            },
            {
                path: '/clients', Component: EmptyPage
            },
            {
                path: '/assets', Component: EmptyPage
            },
            {
                path: '/settings', Component: EmptyPage
            },


        ]

    },
    { path: '*', Component: NotFoundPage }
]);
