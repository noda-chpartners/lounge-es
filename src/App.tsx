import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import CursorGlow from "./components/feature/CursorGlow";
import PageTransition from "./components/feature/PageTransition";

function App() {
  useSmoothScroll();
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <CursorGlow />
        <PageTransition>
          <AppRoutes />
        </PageTransition>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;