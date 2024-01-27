import { Outlet } from "react-router-dom";
import MainLayout from "./MainLayout";

const LayoutedRoutes = () => {    	
	return <MainLayout child={<Outlet/>}/>
};

export default LayoutedRoutes;