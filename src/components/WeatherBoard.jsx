import {
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    YAxis
  } from 'recharts';
  import { DateHelper } from '@/helpers/date.helper';
  import { Forecast } from '../apis/openweather';
  
  
  export function WeatherBoard({ forecast }) {
    if (!forecast) return null;
    return (
      <LineChart
        width={500}
        height={300}
        data={forecast}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="dt"
          fontSize={12}
          tickFormatter={DateHelper.convertDate}
          minTickGap={24}
          interval="preserveStart"
          tickMargin={16}
        />
        <YAxis dataKey="temp" />
        <Line type="monotone" dataKey="temp" stroke="#c9a340" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }