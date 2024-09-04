import React from 'react';
import LineChart from '../charts/LineChart/LineChart'
import Heatmap from '../charts/HeatMap/HeatMap'
import UserActivityList from './UserActivityList/UserActivityList'

function UserActivity() {
    const lineChartData = [
        { date: '2023-01-01', sales: 120 },
        { date: '2023-02-01', sales: 150 },
        { date: '2023-03-01', sales: 170 },
        { date: '2023-04-01', sales: 200 },
        { date: '2023-05-01', sales: 180 },
        { date: '2023-06-01', sales: 220 },
        { date: '2023-07-01', sales: 250 },
        { date: '2023-08-01', sales: 270 },
        { date: '2023-09-01', sales: 300 },
        { date: '2023-10-01', sales: 320 },
        { date: '2023-11-01', sales: 350 },
        { date: '2023-12-01', sales: 400 }
      ];
      const data = [
        { day: 'Monday', hour: '00', activity: 30 },
        { day: 'Monday', hour: '01', activity: 20 },
        { day: 'Tuesday', hour: '20', activity: 40 },
        { day: 'Wednesday', hour: '100', activity: 100 },
        { day: 'Thrusday', hour: '20', activity: 70 },
        { day: 'Friday', hour: '200', activity: 80 },
        { day: 'Saturday', hour: '210', activity: 90 },
        { day: 'Sunday', hour: '230', activity: 50 },
      ];

  return (
  <div>
    <LineChart data={lineChartData} />
    <h1>User Activity Heatmap</h1>
    <Heatmap data={data} />
    <UserActivityList/>
  </div>
  );
}

export default UserActivity;
