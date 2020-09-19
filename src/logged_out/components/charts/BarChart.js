import React from 'react';
import ReactEcharts from 'echarts-for-react';

var dataAxis = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
];
var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}

export default function BarChart() {
  return (
    <ReactEcharts
      style={{ height: '100vh' }}
      option={{
        // title: {
        //   text: '特性示例：渐变色 阴影 点击缩放',
        //   subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
        // },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: true,
            textStyle: {
              color: '#fff',
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#999',
            },
          },
        },
        dataZoom: [
          {
            type: 'inside',
          },
        ],
        series: [
          {
            // For shadow
            type: 'bar',
            itemStyle: {
              color: 'rgba(0,0,0,0.05)',
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false,
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#4f0dd2',
            },
            // emphasis: {
            //   itemStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       { offset: 0, color: '#2378f7' },
            //       { offset: 0.7, color: '#2378f7' },
            //       { offset: 1, color: '#83bff6' },
            //     ]),
            //   },
            // },
            data: data,
          },
        ],
      }}
    />
  );
}
