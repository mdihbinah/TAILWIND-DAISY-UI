import React from 'react';
import { Line, LineChart } from 'recharts';

const resultData = [
  {
    "id": 1,
    "name": "Rahim",
    "physics": 78,
    "chemistry": 82,
    "math": 85
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 65,
    "chemistry": 70,
    "math": 72
  },
  {
    "id": 3,
    "name": "Ayesha",
    "physics": 88,
    "chemistry": 91,
    "math": 95
  },
  {
    "id": 4,
    "name": "Nusrat",
    "physics": 74,
    "chemistry": 68,
    "math": 80
  },
  {
    "id": 5,
    "name": "Hasan",
    "physics": 90,
    "chemistry": 85,
    "math": 88
  },
  {
    "id": 6,
    "name": "Mim",
    "physics": 60,
    "chemistry": 65,
    "math": 70
  },
  {
    "id": 7,
    "name": "Sabbir",
    "physics": 82,
    "chemistry": 78,
    "math": 84
  },
  {
    "id": 8,
    "name": "Tania",
    "physics": 76,
    "chemistry": 80,
    "math": 79
  },
  {
    "id": 9,
    "name": "Rafi",
    "physics": 69,
    "chemistry": 73,
    "math": 75
  },
  {
    "id": 10,
    "name": "Jannat",
    "physics": 92,
    "chemistry": 89,
    "math": 94
  }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData} >
                <Line dataKey={'math'} ></Line>
                <Line dataKey='chemistry' stroke='green' ></Line>
                <Line dataKey='physics' stroke='red' ></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;