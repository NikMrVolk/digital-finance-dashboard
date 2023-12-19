import { Search } from 'lucide-react'

import { cn } from '@/lib/utils'

interface MainInputProps {
    type: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    className?: string
}

export default function MainInput({
    value,
    onChange,
    placeholder,
    type,
    className,
}: MainInputProps) {
    return (
        <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-1 flex items-center pl-2">
                <Search className="h-4 w-4" />
            </span>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={cn(
                    'h-6 rounded-full border border-black bg-neutral-800 p-4 pl-10 text-xs',
                    className,
                )}
            />
        </label>
    )
}
