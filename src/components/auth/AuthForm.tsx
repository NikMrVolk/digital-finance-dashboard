'use client'

import { useMutation } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import DashboardCard from '../UI/DashboardCard'
import StatisticButton from '../UI/StatisticButton'

import AuthInputs from './AuthInputs'
import AuthSwitchLinks from './AuthSwitchLinks'
import ConditionElement from './ConditionElement'

import { saveTokenStorage } from '@/services/auth/auth.helper'
import { authService } from '@/services/auth/auth.service'
import { IAuthFormData } from '@/services/auth/auth.types'
import { QueryKeys } from '@/utils/constants'
import { LOGIN_ROUTE, PROGRESS_ROUTE } from '@/utils/routs/routs'

export interface IData {
    email: string
    name?: string
    password: string
    confirmedPassword?: string
}

export default function AuthForm() {
    const pathname = usePathname()
    const { push } = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm<IAuthFormData>({ mode: 'onChange' })

    const isLogin = pathname === LOGIN_ROUTE

    const { mutate: mutateRegistration, isPending: isRegistrationPending } = useMutation({
        mutationKey: [QueryKeys.REGISTRATION],
        mutationFn: (data: IAuthFormData) => authService.main('registration', data),
        onSuccess({ data }) {
            saveTokenStorage(data.accessToken)
            reset()
            push(PROGRESS_ROUTE)
        },
    })

    const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
        mutationKey: [QueryKeys.LOGIN],
        mutationFn: (data: IAuthFormData) => authService.main('login', data),
        onSuccess({ data }) {
            saveTokenStorage(data.accessToken)
            reset()
            push(PROGRESS_ROUTE)
        },
    })

    const isPending = isRegistrationPending || isLoginPending

    const onSubmit: SubmitHandler<IAuthFormData> = data => {
        isLogin ? mutateLogin(data) : mutateRegistration(data)
    }

    return (
        <DashboardCard className="w-full max-w-160">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-3xl font-medium	">
                    Sign <ConditionElement condition={isLogin} ifTrue="in" ifFalse="up" />
                </h2>
                <AuthInputs register={register} errors={errors} isLogin={isLogin} watch={watch} />
                <StatisticButton className="rounded-2xl" type="submit" disabled={isPending}>
                    Continue
                </StatisticButton>
                <AuthSwitchLinks isLogin={isLogin} />
            </form>
        </DashboardCard>
    )
}
