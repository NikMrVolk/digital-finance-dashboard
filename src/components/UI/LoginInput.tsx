'use client'

import { useState } from 'react'

import { FieldErrors, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

import ConditionElement from '../auth/ConditionElement'
import EyeOnPassword from '../auth/EyeOnPassword'

import { cn } from '@/lib/utils'
import { IAuthFormData } from '@/services/auth/auth.types'

interface LoginInputProps {
    labelValue: Path<IAuthFormData>
    labelText?: string
    register: UseFormRegister<IAuthFormData>
    registerOptions?: RegisterOptions<IAuthFormData>
    errors: FieldErrors<IAuthFormData>
    classes?: {
        wrapper?: string
        labelValue?: string
        input?: string
        infoForUser?: string
        error?: string
    }
    inpType: string
    inpPlaceholder: string
    infoForUser?: string
}

export default function LoginInput({
    labelValue,
    labelText,
    register,
    registerOptions = { required: 'Required field' },
    errors,
    classes = { wrapper: '', labelValue: '', input: '', infoForUser: '', error: '' },
    inpType,
    inpPlaceholder,
    infoForUser,
}: LoginInputProps) {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

    return (
        <label className={cn('flex flex-col gap-1 text-gray-600', classes.wrapper)}>
            {labelValue && <p className={cn('text-sm', classes.labelValue)}>{labelText}</p>}
            <div className="relative block">
                <input
                    type={isShowPassword ? 'text' : inpType}
                    placeholder={inpPlaceholder}
                    {...register(labelValue, registerOptions)}
                    className={cn(
                        `w-full rounded-2xl border px-4 py-2 focus:border-indigo-500 focus:outline-none`,
                        classes.input,
                    )}
                />
                <EyeOnPassword
                    condition={inpType === 'password'}
                    isShowPassword={isShowPassword}
                    setIsShowPassword={setIsShowPassword}
                />
            </div>
            <ConditionElement
                condition={!!infoForUser}
                ifTrue={<p className={cn('text-sm', classes.infoForUser)}>{infoForUser}</p>}
            />
            {errors[labelValue] && (
                <p className={cn('text-sm text-red-500', classes.error)}>
                    {errors[labelValue]?.message}
                </p>
            )}
        </label>
    )
}
