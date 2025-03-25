import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import RequestsPage from "../pages/request-page";
import NewRequest from "../components/new-request/new-request";
import EditRequest from "../components/edit-request/edit-request";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/', Component: RequestsPage,
                children: [
                    { path: 'new', Component: NewRequest },
                    { path: ':id/edit', Component: EditRequest }
                ]
            }
        ]

    }
]);
