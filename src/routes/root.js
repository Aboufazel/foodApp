import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../mainLayout/mainLayout ";
import AppIndex from "../mainLayout/appIndex";
import Bmi from "../mainLayout/bmi";

const Root = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <MainLayout/>

            ),
            children: [
                {
                    path: '/',
                    element: (
                        <AppIndex/>
                    )
                },
                {
                    path: '/bmi',
                    element: (
                        <Bmi/>
                    )
                },
            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default Root;