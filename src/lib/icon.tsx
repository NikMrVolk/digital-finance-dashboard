import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports
}

const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = dynamic(dynamicIconImports[name])

    return (
        <div className="cursor-pointer">
            <LucideIcon {...props} />
        </div>
    )
}

export default Icon
