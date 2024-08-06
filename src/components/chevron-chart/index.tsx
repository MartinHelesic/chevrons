import styled from "styled-components";

interface ChevronChartProps {
  checkboxes: boolean[];
}

const ChevronWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;

  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;

interface ChevronSegmentProps {
  height: number;
  color: string;
  isNotFirst: boolean;
}

const ChevronSegment = styled.div<ChevronSegmentProps>`
  width: 100%;
  height: 180px;
  background-color: ${({ color }) => color};
  clip-path: polygon(100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%, 50% 50%);
  margin-top: ${({ isNotFirst }) => (isNotFirst ? "-90px" : "0")};
`;

const colors = ["#c0d2d5", "#658187", "#39585e", "#21383d"];

function ChevronChart(props: ChevronChartProps) {
  const checkedIndexes = props.checkboxes.reduce((acc, checked, index) => {
    if (checked) {
      acc.push(index);
    }
    return acc;
  }, [] as number[]);

  const segmentHeight = 100 / checkedIndexes.length;

  return (
    <ChevronWrapper>
      {checkedIndexes.map((index) => (
        <ChevronSegment
          key={index}
          height={segmentHeight}
          color={colors[index % colors.length]}
          isNotFirst={index !== 0}
        />
      ))}
    </ChevronWrapper>
  );
}

export default ChevronChart;
