'use client'

import { MutableRefObject, useRef, useState } from 'react'

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
} from 'recharts'

import { CustomActiveDot } from './CustomActiveDot'
import { CustomAxisTick } from './CustomAxisTick'
import { CustomCursor } from './CustomCursor'
import { CustomTooltip } from './CustomTooltip'

import { formatNumberGraphicY } from '@/utils/format/formatNumberGraphicY'

const data = [
    {
        date: 1703277463864,
        count: 4000,
    },
    {
        date: 1703287463864,
        count: 8000,
    },
    {
        date: 1703377463864,
        count: 4000,
    },
    {
        date: 1703477463864,
        count: 2000,
    },
    {
        date: 1703577463864,
        count: 7080,
    },
    {
        date: 1703677463864,
        count: 1890,
    },
    {
        date: 1703777463864,
        count: 9090,
    },
    {
        date: 1703877463864,
        count: 3490,
    },
]

function formatTickXAxis(value: number): string {
    const date: Date = new Date(value)

    return `${date.getDate()}/${date.getMonth() + 1}`
}

function formatTickYAxis(value: number): string {
    if (value.toString() === '0') {
        return ''
    }

    return formatNumberGraphicY(value)
}

export default function Chart() {
    const [shownTime, setShownTime] = useState<number>(0)
    const dotRef = useRef<MutableRefObject<number>>(null)

    return (
        <div className="h-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: -5,
                        bottom: 5,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="0.8">
                            <stop offset="55%" stopColor="#e74a58" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#e74a58" stopOpacity={0.1} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0.1" x2="0" y2="1.4">
                            <stop offset="30%" stopColor="#280723" stopOpacity={0.4} />
                        </linearGradient>
                        <linearGradient id="myGradient" x1="0" y1="0.8" x2="0" y2="0">
                            <stop offset="20%" stopColor="#dd16ad" />
                            <stop offset="60%" stopColor="#e74a58" />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={v => formatTickXAxis(v)}
                        // @ts-expect-error: library types
                        tick={<CustomAxisTick shownTime={shownTime} />}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        type="number"
                        domain={['auto', (dataMax: number) => dataMax * 1.2]}
                        tickFormatter={v => formatTickYAxis(v)}
                    />
                    <CartesianGrid stroke="gray" strokeOpacity={0.2} fill="url(#colorPv)" />
                    <Tooltip
                        // @ts-expect-error: library types
                        content={<CustomTooltip setShownTime={setShownTime} />}
                        // @ts-expect-error: library types
                        cursor={<CustomCursor dotRef={dotRef} />}
                    />
                    <Area
                        type="natural"
                        dataKey="count"
                        stroke="url(#myGradient)"
                        strokeWidth={4}
                        fillOpacity={0.4}
                        fill="url(#colorUv)"
                        dot={false}
                        // @ts-expect-error: library types
                        activeDot={<CustomActiveDot dotRef={dotRef} />}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
