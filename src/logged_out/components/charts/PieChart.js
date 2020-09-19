import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default function PieChart() {
  return (
    <ReactEcharts
      style={{ height: '100vh' }}
      option={{
        // backgroundColor: '#2c343c',
        // title: {
        //   text: 'Pie Chart',
        //   left: 'center',
        //   top: 20,
        //   textStyle: {
        //     color: '#202020',
        //   },
        // },

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: 'source',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: 'direct access' },
              { value: 310, name: 'mail marketing' },
              { value: 274, name: 'alliance ads' },
              { value: 235, name: 'video ads' },
              { value: 400, name: 'search engine' },
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              color: 'rgba(0, 0, 0, 0.3)',
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(0, 0, 0, 0.3)',
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            itemStyle: {
              color: '#4f0dd2',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.2)',
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      }}
    />
  );
}
