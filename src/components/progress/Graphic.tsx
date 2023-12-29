'use client'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

const data = [
    {
        date: 22,
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        date: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        date: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        date: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        date: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        date: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        date: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
]

export default function Graphic() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid stroke="gray" strokeOpacity={0.2} />
                <XAxis dataKey="date" />
                <YAxis type="number" domain={['auto', (dataMax: number) => dataMax * 1.2]} />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="red"
                    // label={{ fill: 'green', fontSize: 20 }}
                    dot={false}
                    activeDot={{ fill: 'white', strokeWidth: 2, r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}
