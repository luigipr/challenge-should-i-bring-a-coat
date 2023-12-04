import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { DateHelper } from '../helpers/DateHelper';

export function WeatherBoard({ forecast }) {
  if (!forecast) return null;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`Data: ${DateHelper.convertDate(label)}`}</p>
          <p>{`Temperatura: ${payload[0].value}ºC`}</p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <ResponsiveContainer width="92%" height='100%' style={{ backgroundColor: '#D8D8D8' }}>
    <LineChart width={1000} height={300} data={forecast}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="dt"
        fontSize={12}
        tickFormatter={DateHelper.convertDate}
        minTickGap={30}
        interval="preserveStart"
        tickMargin={16}
      />
      <YAxis dataKey="temp" />
      <Tooltip content={<CustomTooltip />} />
      <Line type="monotone" dataKey="temp" stroke="#c9a340" activeDot={{ r: 8 }} />
    </LineChart>
    </ResponsiveContainer>
  );

}

