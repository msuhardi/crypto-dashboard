import { faker } from '@faker-js/faker';

// This file contains all the fake data

const tabs = [
  { title: 'Overview', info: 'This is an overview tab' },
  { title: 'Trending Projects' },
  { title: 'Trading Volume' },
  { title: 'Buyers & Sellers' }
];

const dashboard = {
  tabs,
  title: 'NFT Market Overview',
  description:
    'A dashboard made by @user123 to track NFT Stats. Feel free to reach out through Twitter for any suggestions/questions regarding this dashboard.',
  tags: ['NFT', 'Ethereum', 'Volume']
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const lineAreaData1 = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgba(53, 162, 235, 0.3)',
      backgroundColor: 'rgba(53, 162, 235, 0.3)',
      tension: 0.25
    }
  ]
};

const lineAreaData2 = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgba(235, 196, 53, 0.3)',
      backgroundColor: 'rgba(235, 196, 53, 0.3)',
      tension: 0.25
    }
  ]
};

const lineAreaData3 = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 3',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgba(111, 53, 235, 0.4)',
      backgroundColor: 'rgba(111, 53, 235, 0.4)',
      tension: 0.25
    }
  ]
};

const data = [
  {
    type: 'metric',
    key: 'metric-1',
    dataGrid: { x: 0, y: 0, w: 1, h: 2, minW: 1, minH: 2 },
    data: lineAreaData1,
    number: 24.43,
    subtitle: 'in millions of ETH',
    title: 'Total NFT Secondary Sales Volume'
  },
  {
    type: 'metric',
    key: 'metric-2',
    dataGrid: { x: 1, y: 0, w: 1, h: 2, minW: 1, minH: 2 },
    data: lineAreaData2,
    number: 36.23,
    subtitle: 'in millions',
    title: 'Total NFT Trades Count',
    info: 'The graph below is interactive'
  },
  {
    type: 'metric',
    key: 'metric-3',
    dataGrid: { x: 2, y: 0, w: 1, h: 2, minW: 1, minH: 2 },
    data: lineAreaData3,
    number: 3789,
    subtitle: 'in millions',
    title: '100+ ETH Volume Collection'
  },
  {
    type: 'table',
    key: 'table-1',
    dataGrid: { x: 0, y: 2, w: 2, h: 3, minW: 2, minH: 3 },
    title: 'NFTs Ranked by Traded Volume',
    headers: [
      'Rank',
      'Project Name',
      'Total Volume (ETH)',
      'Total Volume ($)',
      '1W Volume (ETH)',
      '1D Volume (ETH)'
    ],
    rows: [
      ['1', 'Meebits', '3,142,739', '$9,017,052,524.78', '298', '10.4'],
      [
        '2',
        'Terraforms',
        '2,287,756',
        '$6,386,397,864.55',
        '14,353',
        '2,001.39'
      ],
      ['3', 'CryptoPunks', '900,765', '$2,428,952,794.037', '2,245', '132.5'],
      ['4', 'Meebits', '3,142,739', '$9,017,052,524.78', '298', '10.4'],
      [
        '5',
        'Terraforms',
        '2,287,756',
        '$6,386,397,864.55',
        '14,353',
        '2,001.39'
      ],
      ['6', 'CryptoPunks', '900,765', '$2,428,952,794.037', '2,245', '132.5'],
      ['7', 'Meebits', '3,142,739', '$9,017,052,524.78', '298', '10.4'],
      ['8', 'Meebits', '3,142,739', '$9,017,052,524.78', '298', '10.4'],
      [
        '9',
        'Terraforms',
        '2,287,756',
        '$6,386,397,864.55',
        '14,353',
        '2,001.39'
      ],
      ['10', 'CryptoPunks', '900,765', '$2,428,952,794.037', '2,245', '132.5']
    ]
  },
  {
    type: 'line-chart',
    key: 'line-chart-1',
    title: 'Buyer vs Seller',
    description:
      'This is a short description about this graph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis massa non odio sollicitudin lacinia.',
    dataGrid: { x: 2, y: 2, w: 2, h: 3 },
    data: {
      labels,
      datasets: [
        {
          label: 'Buyer',
          data: labels.map(() =>
            faker.datatype.number({ min: -1000, max: 1000 })
          ),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgb(255, 99, 132)'
        },
        {
          label: 'Seller',
          data: labels.map(() =>
            faker.datatype.number({ min: -1000, max: 1000 })
          ),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgb(53, 162, 235)'
        }
      ]
    }
  }
];

export { dashboard, data };
