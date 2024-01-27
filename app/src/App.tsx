import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { EditPage } from './EditPage';
import { HomePage } from './HomePage';
import LayoutedRoutes from './LayoutedRoutes';
import { useAppSelector } from './redux/hooks';
import { GlobalState } from './redux/GlobalState';

function App() {
  const global = useAppSelector<GlobalState>((state) => state.global)  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutedRoutes />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "edit",
          element: <EditPage />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  );
}

export default App;
