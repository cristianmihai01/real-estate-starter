import { createBrowserRouter } from "react-router-dom";
import { Home, PropertyDetails, Root } from "../pages";

export const _ROUTER = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path: '/property/:id',
                element: <PropertyDetails/>
            }
        ]
    }
])