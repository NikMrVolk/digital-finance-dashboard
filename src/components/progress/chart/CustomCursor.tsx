import { MutableRefObject } from 'react'

interface CustomCursorProps {
    points: { x: number; y: number }[]
    dotRef: MutableRefObject<number>
}

export function CustomCursor({ points, dotRef }: CustomCursorProps): JSX.Element {
    const startingPoint = points[0]
    const endingPoint = points[1]

    const [x1, y1] = [startingPoint.x, dotRef.current + 5] // adding 5 to y to prevent cursor from overlapping with active dot
    const [x2, y2] = [endingPoint.x, endingPoint.y]

    return (
        <svg x1={x1} y1={y1} x2={x2} y2={y2}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="gray" strokeWidth={2} />
        </svg>
    )
}
