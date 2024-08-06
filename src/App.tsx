import { useState } from "react";
import CheckboxForm from "./components/checkbox-form";
import ChevronChart from "./components/chevron-chart";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 150px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;

function App() {
  const [checkboxes, setCheckboxes] = useState<boolean[]>([true, false]);

  function handleCheckChange(newCheckboxes: boolean[]) {
    setCheckboxes(newCheckboxes);
  }

  return (
    <AppWrapper>
      <h1>Checkboxes & Chevron Chart</h1>
      <ContentWrapper>
        <CheckboxForm onCheckChange={handleCheckChange} />
        <ChevronChart checkboxes={checkboxes} />
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
