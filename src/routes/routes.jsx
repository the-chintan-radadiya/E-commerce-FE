import {createBrowserRouter} from 'react-router'
import HomeLayout from '../pages/HomeLayout'
import Home from '../components/Home/Home'


const AppRoutes = createBrowserRouter([
    {
        path:"/", 
        Component: HomeLayout,
        children: [
            {index:true, Component: Home}
        ]
    }
]);

export default AppRoutes