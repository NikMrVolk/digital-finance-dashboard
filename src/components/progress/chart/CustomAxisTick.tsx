import moment from 'moment'

interface CustomizedAxisTickProps {
    x: number
    y: number
    payload: { value: number }
    shownTime: number
}

export function CustomAxisTick({ x, y, payload, shownTime }: CustomizedAxisTickProps): JSX.Element {
    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dx={22}
                dy={25}
                textAnchor="end"
                fill={shownTime === payload.value ? '#fff' : '#666'}
            >
                {moment(payload.value).format('DD/MM')}
            </text>
        </g>
    )
}
