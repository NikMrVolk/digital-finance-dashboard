'use client'

import { useState } from 'react'

import { FieldErrors, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

import EyeOnPassword from '../auth/EyeOnPassword'

import LoginInput from './LoginInput'

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

export default function LoginInputWithOptions({
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
                <LoginInput
                    labelValue={labelValue}
                    register={register}
                    className={classes.input}
                    registerOptions={registerOptions}
                    inpType={inpType}
                    inpPlaceholder={inpPlaceholder}
                    isShowPassword={isShowPassword}
                />
                <EyeOnPassword
                    condition={inpType === 'password'}
                    isShowPassword={isShowPassword}
                    setIsShowPassword={setIsShowPassword}
                />
            </div>
            {infoForUser && <p className={cn('text-sm', classes.infoForUser)}>{infoForUser}</p>}
            {errors[labelValue] && (
                <p className={cn('text-sm text-red-500', classes.error)}>
                    {errors[labelValue]?.message}
                </p>
            )}
        </label>
    )
}
