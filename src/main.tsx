import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nProvider } from "@/i18n/index.tsx";
import { AdminProvider } from "@/context/AdminContext.tsx";
import { QuestionnaireProvider } from "@/context/QuestionnaireContext.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <AdminProvider>
        <QuestionnaireProvider>
          <App />
        </QuestionnaireProvider>
      </AdminProvider>
    </I18nProvider>
  </StrictMode>,
);
