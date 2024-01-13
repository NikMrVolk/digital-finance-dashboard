'use client'

import { memo } from 'react'

import { Eye, EyeOff } from 'lucide-react'

interface EyeOnPasswordProps {
    condition: boolean
    isShowPassword: boolean
    setIsShowPassword: (v: boolean) => void
}

export default memo(function EyeOnPassword({
    condition,
    isShowPassword,
    setIsShowPassword,
}: EyeOnPasswordProps) {
    if (!condition) return null

    return (
        <span
            className="absolute inset-y-0 right-5 flex items-center pl-2"
            onClick={() => setIsShowPassword(!isShowPassword)}
        >
            {isShowPassword ? (
                <EyeOff className="h-5 w-5 cursor-pointer" />
            ) : (
                <Eye className="h-5 w-5 cursor-pointer" />
            )}
        </span>
    )
})
