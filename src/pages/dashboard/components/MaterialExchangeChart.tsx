import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Flex, Select } from 'antd';
const MaterialExchangeChart: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Steel');
  const [selectedTransaction, setSelectedTransaction] =
    useState<string>('Steel');

  const echartsRef1 = React.useRef<any>(null);
  const echartsRef2 = React.useRef<any>(null);

  const materialData: any = {
    Steel: [20, 30, 15, 35, 25, 20, 30, 40, 35, 45, 40, 50],
    Iron: [25, 35, 20, 30, 40, 25, 35, 45, 40, 50, 45, 55],
    Aluminum: [10, 20, 15, 25, 20, 15, 20, 30, 25, 35, 30, 40]
  };
  const materialDatas: any = {
    Steel: [20, 21, 15, 25, 35, 15, 18, 24, 40, 48, 51, 60],
    Iron: [25, 35, 20, 30, 40, 25, 35, 45, 40, 50, 45, 55],
    Aluminum: [10, 20, 15, 25, 20, 15, 20, 30, 25, 35, 30, 40]
  };

  const option = {
    title: {
      text: 'Material Exchange Trends',
      textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      top: 10,
      left: 10
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 60,
      interval: 10
    },
    series: [
      {
        name: selectedMaterial,
        type: 'line',
        data: materialData[selectedMaterial],
        smooth: true,
        lineStyle: {
          color: '#2196F3',
          width: 3
        }
      }
    ]
  };
  const options = {
    title: {
      text: 'Transaction Records',
      textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      top: 10,
      left: 10
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 60,
      interval: 10
    },
    series: [
      {
        name: selectedMaterial,
        type: 'line',
        data: materialDatas[selectedTransaction],
        smooth: true,
        lineStyle: {
          color: '#2196F3',
          width: 3
        }
      }
    ]
  };

  const handleMaterialChange = (value: string) => {
    setSelectedMaterial(value);
  };

  const handleTransactionChange = (value: string) => {
    setSelectedTransaction(value);
  };

  useEffect(() => {
    setTimeout(() => {
      echartsRef1.current.getEchartsInstance().resize();
      echartsRef2.current.getEchartsInstance().resize();
    }, 100);
  }, []);

  return (
    <Flex style={{ width: '100%' }} justify="space-between">
      <div style={{ position: 'relative', width: '49%', height: 436 }}>
        <Select
          defaultValue="Steel"
          value={selectedMaterial}
          onChange={handleMaterialChange}
          style={{
            position: 'absolute',
            top: 30,
            right: 10,
            width: 120,
            zIndex: 10
          }}
          options={[
            { value: 'Steel', label: 'Steel' },
            { value: 'Iron', label: 'Iron' },
            { value: 'Aluminum', label: 'Aluminum' }
          ]}
        />
        <ReactECharts
          ref={echartsRef1}
          option={option}
          style={{
            height: 436,
            border: '1px solid #C5CCD6',
            background: '#FFFFFF',
            borderRadius: 4,
            marginTop: 20
          }}
        />
      </div>
      <div style={{ position: 'relative', width: '49%', height: 436 }}>
        <Select
          defaultValue="Steel"
          value={selectedMaterial}
          onChange={handleTransactionChange}
          style={{
            position: 'absolute',
            top: 30,
            right: 10,
            width: 120,
            zIndex: 10
          }}
          options={[
            { value: 'Steel', label: 'Steel' },
            { value: 'Iron', label: 'Iron' },
            { value: 'Aluminum', label: 'Aluminum' }
          ]}
        />
        <ReactECharts
          ref={echartsRef2}
          option={options}
          style={{
            height: 436,
            border: '1px solid #C5CCD6',
            background: '#FFFFFF',
            borderRadius: 4,
            marginTop: 20
          }}
        />
      </div>
    </Flex>
  );
};

export default MaterialExchangeChart;
