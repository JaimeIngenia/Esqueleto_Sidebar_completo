
// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { Gauge } from '@ant-design/plots';

// const LogOutPage = () => {
//   const config = {
//     percent: 0.75,
//     range: {
//       color: 'l(0) 0:#B8E1FF 1:#3D76DD',
//     },
//     startAngle: Math.PI,
//     endAngle: 2 * Math.PI,
//     indicator: null,
//     statistic: {
//       title: {
//         offsetY: -36,
//         style: {
//           fontSize: '36px',
//           color: '#4B535E',
//         },
//         formatter: () => '70%',
//       },
//       content: {
//         style: {
//           fontSize: '24px',
//           lineHeight: '44px',
//           color: '#4B535E',
//         },
//         formatter: () => '加载进度',
//       },
//     },
//   };
//   return <Gauge {...config} />;
// };


// export default LogOutPage;

//************************************************************

import React from 'react';
import Plot from 'react-plotly.js';

const LogOutPage = () => {

  const data = [
    {
      type: "indicator",
      value: 200,
      delta: { reference: 160 },
      gauge: { axis: { visible: false, range: [0, 250] } },
      domain: { row: 0, column: 0 }
    },

  ];

  const layout = {
    width: 600,
    height: 400,
    margin: { t: 25, b: 25, l: 25, r: 25 },
    grid: { rows: 2, columns: 2, pattern: "independent" },
    template: {
      data: {
        indicator: [
          {
            title: { text: "Tiempo de riego" },
            mode: "number+delta+gauge",
            delta: { reference: 90 }
          }
        ]
      }
    }
  };



  return (
    <div>
      <Plot
        data={data}
        layout={layout}
      />
    </div>
  );
}

export default LogOutPage;

//*************************************************************


// import { Gauge } from '@ant-design/charts';
// const LogOutPage = () => {
//   const config = {
//     title: {
//       visible: true,
//       text: '仪表盘个性化配置',
//     },
//     width: 400,
//     height: 400,
//     value: 75,
//     min: 0,
//     max: 100,
//     range: [0, 75],
//     color: ['l(0) 0:#5d7cef 1:#e35767'],
//     axis: {
//       offset: -15,
//       tickLine: {
//         visible: true,
//         length: 10,
//       },
//       label: { visible: false },
//     },
//     pivot: {
//       visible: true,
//       thickness: 10,
//       pointer: {
//         visible: true,
//         style: { fill: '#e25869' },
//       },
//       pin: {
//         visible: true,
//         style: { fill: '#e8e6ea' },
//       },
//     },
//     statistic: {
//       visible: true,
//       position: ['50%', '100%'],
//       text: '26/48',
//       color: '#2e3033',
//       size: 40,
//     },
//   };
//   return <Gauge {...config} />;
// };
// export default LogOutPage;