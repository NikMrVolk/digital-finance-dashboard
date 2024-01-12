import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { saveTokenStorage } from '@/services/auth/auth.helper'
import { authService } from '@/services/auth/auth.service'
import { IAuthFormData } from '@/services/auth/auth.types'
import { QueryKeys } from '@/utils/constants'
import { PROGRESS_ROUTE } from '@/utils/routs/routs'

export const useAuth = () => {
    const { push } = useRouter()

    const {
        mutate: registration,
        isPending: isRegistrationPending,
        isSuccess: isRegistrationSuccess,
    } = useMutation({
        mutationKey: [QueryKeys.REGISTRATION],
        mutationFn: (data: IAuthFormData) => authService.main('registration', data),
        onSuccess({ data }) {
            saveTokenStorage(data.accessToken)
            push(PROGRESS_ROUTE)
        },
    })

    const {
        mutate: login,
        isPending: isLoginPending,
        isSuccess: isLoginSuccess,
    } = useMutation({
        mutationKey: [QueryKeys.LOGIN],
        mutationFn: (data: IAuthFormData) => authService.main('login', data),
        onSuccess({ data }) {
            saveTokenStorage(data.accessToken)
            push(PROGRESS_ROUTE)
        },
    })

    const isPending = isRegistrationPending || isLoginPending
    const isSuccess = isRegistrationSuccess || isLoginSuccess

    return {
        registration,
        login,
        isPending,
        isSuccess,
    }
}
