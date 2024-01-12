'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import DashboardCard from '../UI/DashboardCard'
import StatisticButton from '../UI/StatisticButton'

import AuthInputs from './AuthInputs'
import AuthSwitchLinks from './AuthSwitchLinks'

import { useAuth } from '@/hooks/useAuth'
import { useLoginRoute } from '@/hooks/useLoginRoute'
import { IAuthFormData } from '@/services/auth/auth.types'

export default function AuthForm() {
    const { isLogin } = useLoginRoute()
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm<IAuthFormData>({ mode: 'onChange' })
    const { login, registration, isPending, isSuccess } = useAuth()

    const onSubmit: SubmitHandler<IAuthFormData> = data => {
        isLogin ? login(data) : registration(data)
        if (isSuccess) reset()
    }

    return (
        <DashboardCard className="w-full max-w-160">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-3xl font-medium	">Sign {isLogin ? 'in' : 'up'}</h2>
                <AuthInputs register={register} errors={errors} isLogin={isLogin} watch={watch} />
                <StatisticButton className="rounded-2xl" type="submit" disabled={isPending}>
                    Continue
                </StatisticButton>
                <AuthSwitchLinks isLogin={isLogin} />
            </form>
        </DashboardCard>
    )
}
