'use client'

import { usePathname } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import DashboardCard from '../UI/DashboardCard'
import StatisticButton from '../UI/StatisticButton'

import AuthInputs from './AuthInputs'
import AuthSwitchLinks from './AuthSwitchLinks'
import ConditionElement from './ConditionElement'

import { useAuth } from '@/hooks/useAuth'
import { IAuthFormData } from '@/services/auth/auth.types'
import { LOGIN_ROUTE } from '@/utils/routs/routs'

export default function AuthForm() {
    const pathname = usePathname()
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm<IAuthFormData>({ mode: 'onChange' })

    const isLogin = pathname === LOGIN_ROUTE

    const { login, registration, isPending, isSuccess } = useAuth()

    const onSubmit: SubmitHandler<IAuthFormData> = data => {
        isLogin ? login(data) : registration(data)
        if (isSuccess) reset()
    }

    return (
        <DashboardCard className="w-full max-w-160">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-3xl font-medium	">
                    Sign <ConditionElement condition={isLogin} ifTrue="in" ifFalse="up" />
                </h2>
                <AuthInputs register={register} errors={errors} isLogin={isLogin} watch={watch} />
                <StatisticButton className="rounded-2xl" type="submit" disabled={!!isPending}>
                    Continue
                </StatisticButton>
                <AuthSwitchLinks isLogin={isLogin} />
            </form>
        </DashboardCard>
    )
}
