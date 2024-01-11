/* eslint-disable complexity */
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useForm } from 'react-hook-form'

import DashboardCard from '../UI/DashboardCard'
import StatisticButton from '../UI/StatisticButton'

import { cn } from '@/lib/utils'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/utils/routs/routs'

interface IData {
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

    const onSubmit = (data: IData) => {
        console.log(data)
    }

    return (
        <DashboardCard className="w-[40rem]">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-3xl font-medium	">Sign {isLogin ? 'in' : 'up'}</h2>
                <label className="flex flex-col gap-1 text-gray-600">
                    Email
                    <input
                        type="email"
                        placeholder="Enter email: "
                        {...register('email', { required: true })}
                        className={cn(
                            'w-full rounded-2xl border px-4 py-2 focus:border-indigo-500 focus:outline-none',
                        )}
                    />
                    {errors?.email && <p>{errors.email.message}</p>}
                </label>

                {isLogin && (
                    <label className="flex flex-col gap-1 text-gray-600">
                        Username (optional)
                        <input
                            type="email"
                            placeholder="Enter username: "
                            {...register('username', { required: true })}
                            className={cn(
                                'w-full rounded-2xl border px-4 py-2 focus:border-indigo-500 focus:outline-none',
                            )}
                        />
                    </label>
                )}
                <div>
                    <label className="flex flex-col gap-1 text-gray-600">
                        Your password
                        <input
                            type="password"
                            placeholder="Enter password: "
                            {...register('password', { required: true })}
                            className={cn(
                                'w-full rounded-2xl border px-4 py-2 focus:border-indigo-500 focus:outline-none',
                            )}
                        />
                    </label>
                </div>
                {isLogin && (
                    <label className="flex flex-col gap-1 text-gray-600">
                        Username (optional)
                        <input
                            type="password"
                            placeholder="Enter password: "
                            {...register('confirmedPassword', { required: true })}
                            className={cn(
                                'w-full rounded-2xl border px-4 py-2 focus:border-indigo-500 focus:outline-none',
                            )}
                        />
                    </label>
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
