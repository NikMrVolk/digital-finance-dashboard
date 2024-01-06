'use client'

import { useEffect, useRef, useState } from 'react'

import { PieChart, Pie, Cell } from 'recharts'

const data = [
    { name: 'Group A', value: 800 },
    { name: 'Group B', value: 400 },
    { name: 'Group C', value: 200 },
    { name: 'Group D', value: 200 },
]
const COLORS = [
    { start: '#165adf', end: '#40b9ff' },
    { start: '#8310f5', end: '#c80fe7' },
    { start: '#c87159', end: '#cea85c' },
    { start: '#c21274', end: '#d032cb' },
]

export default function CircleChart() {
    const [size, setSize] = useState<number>(0)
    const PieChartWrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handlerResize = () => {
            setSize(PieChartWrapperRef.current?.getBoundingClientRect().width ?? 0)
        }

        if (PieChartWrapperRef?.current) {
            handlerResize()
            window.addEventListener('resize', handlerResize)
        }
        return () => window.removeEventListener('resize', handlerResize)
    }, [])

    return (
        <div ref={PieChartWrapperRef} className="relative flex w-full items-center justify-center">
            <PieChart width={size} height={size}>
                <defs>
                    {data.map((entry, index) => (
                        <linearGradient key={entry.name} id={`myGradient${index}`}>
                            <stop offset="0%" stopColor={COLORS[index % COLORS.length].start} />
                            <stop offset="100%" stopColor={COLORS[index % COLORS.length].end} />
                        </linearGradient>
                    ))}
                </defs>
                <Pie
                    data={data}
                    innerRadius={size / 2.15}
                    outerRadius={size / 2}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    animationBegin={0}
                    minAngle={20}
                    cornerRadius={5}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={`url(#myGradient${index})`}
                            strokeWidth={0}
                        />
                    ))}
                </Pie>
            </PieChart>
            <div
                className="absolute top-auto z-0 flex h-5/6 w-5/6 flex-col items-center justify-center rounded-full 
                border border-gray-800 text-dashboardGray tall:text-xl"
            >
                <div>Share Holder</div>
                <div className="text-2xl text-white tall:text-4xl ">
                    50{' '}
                    <span className="inline-block -translate-y-1.5 text-xl text-dashboardGray tall:-translate-y-2.5 tall:text-2xl">
                        %
                    </span>
                </div>
                <div
                    className="flex items-center justify-center gap-2 before:inline-block before:h-2 before:w-2 
                before:rounded-full before:bg-circleChartInternalPoint tall:before:h-3 tall:before:w-3"
                >
                    Promoter
                </div>
            </div>
        </div>
    )
}
