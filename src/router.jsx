import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthorList, Chapters, Character, Info, Series } from './AuthorList';

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
                element: <Info/>,
                children: [
                  {
                    path: "chapter",
                    element: <Chapters />,
                  },{
                    path: "character",
                    element: <Character />,
                  }
                ]
                
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
