import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import { AppTheme } from './theme/AppTheme';
import { router } from './router/router';
import { LoadingPage } from './app/pages/LoadingPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppTheme>
    <RouterProvider router={router} fallbackElement={<LoadingPage />}/>
  </AppTheme>
)
