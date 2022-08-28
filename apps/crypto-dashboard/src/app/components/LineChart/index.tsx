import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import styled from 'styled-components';

import DragIc from '@assets/icons/drag';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      ticks: {
        display: false
      },
      grid: {
        display: false,
        drawBorder: false
      }
    },
    y: {
      ticks: {
        display: false
      },
      grid: {
        display: false,
        drawBorder: false
      }
    }
  },
  layout: {
    autoPadding: false
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Buyer',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132)'
    },
    {
      label: 'Seller',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgb(53, 162, 235)'
    }
  ]
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.tertiaryColor};
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  cursor: grab;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 2px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  padding: 32px;
`;

const Title = styled.div`
  flex: 1;
  text-align: left;
  margin-bottom: 12px;
`;

const Description = styled.div`
  text-transform: none;
  letter-spacing: normal;
  font-weight: 300;
  text-align: left;
  line-height: 1.75;
`;

const ChartWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 30px;
`;

const Draggable = styled.div`
  cursor: grab; /* fallback if grab cursor is unsupported */
  opacity: 0.5;
  fill: ${(props) => props.theme.color.iconColor};
`;

const Chart = () => (
  <Wrapper>
    <Row>
      <TitleWrapper>
        <Title>Buyer vs Seller</Title>
        <Description>
          This is a short description about this graph.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis
          massa non odio sollicitudin lacinia.
        </Description>
      </TitleWrapper>
      <Draggable>
        <DragIc height={18} />
      </Draggable>
    </Row>
    <ChartWrapper>
      <Line options={options} data={data} />
    </ChartWrapper>
  </Wrapper>
);

export default Chart;
