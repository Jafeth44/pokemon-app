import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import { AppTheme } from "./theme/AppTheme";
import { mainRouter } from "./router/main.routes";
import { LoadingPage } from "./app/pages/LoadingPage";
import { Provider } from "react-redux";
import { store } from "./store/store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <AppTheme>
        <RouterProvider router={mainRouter} fallbackElement={<LoadingPage />} />
      </AppTheme>
  </Provider>
);
