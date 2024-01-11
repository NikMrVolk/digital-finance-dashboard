/* eslint-disable complexity */
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import DashboardCard from '../UI/DashboardCard'
import LoginInput from '../UI/LoginInput'
import StatisticButton from '../UI/StatisticButton'

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/utils/routs/routs'

export interface IData {
    email: string
    username?: string
    password: string
    confirmedPassword?: string
}

export default function AuthForm() {
    const pathname = usePathname()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IData>()

    const isLogin = pathname === LOGIN_ROUTE

    const onSubmit: SubmitHandler<IData> = data => {
        console.log(data)
    }

    return (
        <DashboardCard className="w-full max-w-160">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-3xl font-medium	">Sign {isLogin ? 'in' : 'up'}</h2>
                <LoginInput
                    label="email"
                    labelText="Your Email"
                    register={register}
                    required
                    errors={errors}
                    inpType="email"
                    inpPlaceholder="Enter email: "
                />
                {!isLogin && (
                    <LoginInput
                        label="username"
                        labelText="Username (optional)"
                        register={register}
                        errors={errors}
                        inpType="text"
                        inpPlaceholder="Enter username: "
                    />
                )}
                <LoginInput
                    label="password"
                    labelText="You password"
                    register={register}
                    required
                    errors={errors}
                    inpType="password"
                    inpPlaceholder="Enter password: "
                    infoForUser={
                        !isLogin
                            ? 'Your password must contain one uppercase letter, one lowercase letter and a number. Min password length is 8 characters.'
                            : ''
                    }
                />
                {!isLogin && (
                    <LoginInput
                        label="confirmedPassword"
                        labelText="Confirm your password"
                        register={register}
                        required
                        errors={errors}
                        inpType="password"
                        inpPlaceholder="Enter password: "
                    />
                )}
                <StatisticButton className="rounded-2xl" type="submit">
                    Continue
                </StatisticButton>
                <div className="-mt-3 flex items-center justify-center gap-2">
                    {isLogin ? <>Don&apos;t have an account yet?</> : 'Already have an account?'}
                    <span className="text-statisticButton underline">
                        <Link href={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}>
                            {isLogin ? 'Sign up' : 'Sign in'}
                        </Link>
                    </span>
                </div>
            </form>
        </DashboardCard>
    )
}
