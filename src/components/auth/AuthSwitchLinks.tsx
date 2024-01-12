import Link from 'next/link'

import ConditionElement from './ConditionElement'

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/utils/routs/routs'

export default function AuthSwitchLinks({ isLogin }: { isLogin: boolean }) {
    return (
        <div className="-mt-3 flex items-center justify-center gap-2">
            <ConditionElement
                condition={isLogin}
                ifTrue={<>Don&apos;t have an account yet?</>}
                ifFalse="Already have an account?"
            />
            <Link
                href={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}
                className="text-statisticButton underline"
            >
                <ConditionElement condition={isLogin} ifTrue="Sign up" ifFalse="Sign in" />
            </Link>
        </div>
    )
}
