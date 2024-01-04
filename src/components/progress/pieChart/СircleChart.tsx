'use client'

import { useEffect, useRef, useState } from 'react'

import { PieChart, Pie, Cell } from 'recharts'

const data = [
    { name: 'Group A', value: 800 },
    { name: 'Group B', value: 400 },
    { name: 'Group C', value: 200 },
    { name: 'Group D', value: 200 },
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

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
        <div ref={PieChartWrapperRef} className="flex w-full items-center justify-center">
            <PieChart width={size} height={size}>
                <Pie
                    data={data}
                    innerRadius={size / 2.15}
                    outerRadius={size / 2}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                            strokeWidth={0}
                        />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}
