import { useState, useEffect } from "react";
import styled from "styled-components";

interface CheckboxFormProps {
  onCheckChange: (checkboxes: boolean[]) => void;
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

function CheckboxForm(props: CheckboxFormProps) {
  const [checkboxes, setCheckboxes] = useState<boolean[]>([true, false]);

  useEffect(() => {
    props.onCheckChange(checkboxes);
  }, [checkboxes, props]);

  function handleCheckboxChange(index: number) {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];

    if (newCheckboxes[index] && index === checkboxes.length - 1) {
      newCheckboxes.push(false);
    }

    if (!newCheckboxes.includes(true)) {
      newCheckboxes[0] = true;
    }

    setCheckboxes(newCheckboxes);
  }

  return (
    <FormWrapper>
      {checkboxes.map((checked, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => handleCheckboxChange(index)}
          />
        </div>
      ))}
    </FormWrapper>
  );
}

export default CheckboxForm;
