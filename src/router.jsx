import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthorList, Chapters, Series } from './AuthorList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: <>about best sellers</>,
      },
      {
        path: 'author',
        element: <AuthorList />,
        children: [
          {
            path: ':params',
            element: <Series />,
            children: [
              {
                path: ':id',
                element: <Chapters />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
