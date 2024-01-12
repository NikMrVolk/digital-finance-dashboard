import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form'

import LoginInput from '../UI/LoginInput'

import ConditionElement from './ConditionElement'

import { IAuthFormData } from '@/services/auth/auth.types'

interface AuthInputsProps {
    register: UseFormRegister<IAuthFormData>
    errors: FieldErrors<IAuthFormData>
    isLogin: boolean
    watch: UseFormWatch<IAuthFormData>
}

export default function AuthInputs({ register, errors, isLogin, watch }: AuthInputsProps) {
    return (
        <>
            <LoginInput
                labelValue="email"
                labelText="Your Email"
                register={register}
                registerOptions={{
                    required: 'Required field',
                    pattern: {
                        value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                        message: 'Check your e-mail address',
                    },
                }}
                errors={errors}
                inpType="email"
                inpPlaceholder="Enter email: "
            />
            <ConditionElement
                condition={!isLogin}
                ifTrue={
                    <LoginInput
                        labelValue="name"
                        labelText="Username (optional)"
                        register={register}
                        registerOptions={{ required: false }}
                        errors={errors}
                        inpType="text"
                        inpPlaceholder="Enter username: "
                    />
                }
            />
            <LoginInput
                labelValue="password"
                labelText="You password"
                register={register}
                registerOptions={{
                    required: 'Required field',
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                        message: `${
                            isLogin
                                ? 'Your password must contain one uppercase letter, one lowercase letter and a number.'
                                : 'Check your password'
                        }`,
                    },
                    minLength: { value: 8, message: 'Min password length is 8 characters.' },
                }}
                errors={errors}
                inpType="password"
                inpPlaceholder="Enter password: "
                infoForUser={
                    !isLogin
                        ? 'Your password must contain one uppercase letter, one lowercase letter and a number. Min password length is 8 characters.'
                        : ''
                }
            />
            <ConditionElement
                condition={!isLogin}
                ifTrue={
                    <LoginInput
                        labelValue="confirmedPassword"
                        labelText="Confirm your password"
                        register={register}
                        registerOptions={{
                            required: 'Required field',
                            validate: val => watch('password') === val || 'Passwords must match',
                        }}
                        errors={errors}
                        inpType="password"
                        inpPlaceholder="Enter password: "
                    />
                }
            />
        </>
    )
}
