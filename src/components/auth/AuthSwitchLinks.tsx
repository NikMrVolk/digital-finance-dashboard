import Link from 'next/link'

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/utils/routs/routs'

export default function AuthSwitchLinks({ isLogin }: { isLogin: boolean }) {
    return (
        <div className="-mt-3 flex items-center justify-center gap-2">
            {isLogin ? <>Don&apos;t have an account yet?</> : 'Already have an account?'}
            <Link
                href={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}
                className="text-statisticButton underline"
            >
                {isLogin ? 'Sign up' : 'Sign in'}
            </Link>
        </div>
    )
}
