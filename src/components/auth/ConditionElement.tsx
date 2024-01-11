interface ConditionElementProps {
    condition: boolean
    ifTrue: React.ReactNode
    ifFalse?: React.ReactNode
}
// for eslint "complexity"
export default function ConditionElement({
    condition,
    ifTrue,
    ifFalse = '',
}: ConditionElementProps) {
    return <>{condition ? ifTrue : ifFalse}</>
}
