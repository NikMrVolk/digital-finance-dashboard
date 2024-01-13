import { Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { IAuthFormData } from '@/services/auth/auth.types'

interface LoginInputProps {
    labelValue: Path<IAuthFormData>
    register: UseFormRegister<IAuthFormData>
    registerOptions?: RegisterOptions<IAuthFormData>
    className?: string
    inpType: string
    inpPlaceholder: string
    isShowPassword: boolean
}

export default function LoginInput({
    labelValue,
    register,
    registerOptions = { required: 'Required field' },
    className = '',
    inpType,
    inpPlaceholder,
    isShowPassword,
}: LoginInputProps) {
    return (
        <input
            type={isShowPassword ? 'text' : inpType}
            placeholder={inpPlaceholder}
            {...register(labelValue, registerOptions)}
            className={cn(
                `w-full rounded-2xl border px-4 py-2 focus:border-indigo-500 focus:outline-none`,
                className,
            )}
        />
    )
}
