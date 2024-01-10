import { MutableRefObject } from 'react'

interface CustomActiveDotProps {
    cx: number
    cy: number
    dotRef: MutableRefObject<number>
}

export function CustomActiveDot({ cx, cy, dotRef }: CustomActiveDotProps): JSX.Element {
    if (cx && cy) {
        dotRef.current = cy
    }

    return (
        <svg>
            <circle
                cx={cx}
                cy={cy}
                r="6"
                fill="white"
                strokeWidth="2"
                stroke="gray"
                strokeOpacity="0.4"
            />
        </svg>
    )
}
