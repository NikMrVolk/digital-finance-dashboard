'use client'

import { FieldErrors, Path, UseFormRegister } from 'react-hook-form'

import { IData } from '../auth/AuthForm'

import { cn } from '@/lib/utils'

interface LoginInputProps {
    label: Path<IData>
    labelText?: string
    register: UseFormRegister<IData>
    required?: boolean
    errors: FieldErrors<IData>
    classes?: {
        wrapper?: string
        label?: string
        input?: string
        infoForUser?: string
        error?: string
    }
    inpType: string
    inpPlaceholder: string
    infoForUser?: string
}

export default function LoginInput({
    label,
    labelText,
    register,
    required = false,
    errors,
    classes = { wrapper: '', label: '', input: '', infoForUser: '', error: '' },
    inpType,
    inpPlaceholder,
    infoForUser,
}: LoginInputProps) {
    return (
        <label className={cn('flex flex-col gap-1 text-gray-600', classes.wrapper)}>
            {label && <p className={cn('text-sm', classes)}>{labelText}</p>}
            <input
                type={inpType}
                placeholder={inpPlaceholder}
                {...register(label, { required })}
                className={cn(
                    'w-full rounded-2xl border px-4 py-2 focus:border-indigo-500 focus:outline-none',
                    classes.input,
                )}
            />
            {infoForUser && <p className={cn('text-sm', classes.infoForUser)}>{infoForUser}</p>}
            {errors?.email && <p className={cn('', classes.error)}>{errors.email.message}</p>}
        </label>
    )
}
