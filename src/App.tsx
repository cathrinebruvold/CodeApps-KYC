import { useQuestionnaire } from "@/context/QuestionnaireContext.tsx";
import { useAdmin } from "@/context/AdminContext.tsx";
import { Layout } from "@/components/Layout/Layout.tsx";
import { StepConfiguration } from "@/components/StepConfiguration/StepConfiguration.tsx";
import { StepCategory } from "@/components/StepCategory/StepCategory.tsx";
import { StepSummary } from "@/components/StepSummary/StepSummary.tsx";
import { AdminPage } from "@/components/AdminPage/AdminPage.tsx";
import "./App.css";

function App() {
  const { state: adminState, steps } = useAdmin();
  const { state } = useQuestionnaire();

  if (adminState.isAdminMode) {
    return <AdminPage />;
  }

  const currentStepDef = steps[state.currentStep];

  const renderStep = () => {
    if (state.isSubmitted) {
      return <StepSummary />;
    }

    switch (currentStepDef.type) {
      case "configuration":
        return <StepConfiguration />;
      case "category":
        return <StepCategory categoryId={currentStepDef.categoryId!} />;
      case "summary":
        return <StepSummary />;
    }
  };

  return <Layout>{renderStep()}</Layout>;
}

export default App;
