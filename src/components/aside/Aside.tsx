import LogoLink from '../logo/LogoLink'

import AsideLink from './AsideLink'

import {
    INSIDES_ROUTE,
    MENU_ROUTE,
    MESSAGES_ROUTE,
    PROFILE_ROUTE,
    PROGRESS_ROUTE,
    WALLET_ROUTE,
} from '@/utils/routs/routs'

export default function Aside() {
    return (
        <aside
            className="sticky top-0 z-1 flex h-screen w-30 flex-col items-center justify-between 
        border-r bg-black py-5 [border-image:linear-gradient(to_bottom_right,white,black)_1]"
        >
            <LogoLink />
            <nav>
                <ul className="flex flex-col gap-4">
                    <AsideLink
                        name="component"
                        href={MENU_ROUTE}
                        classes={{ icon: 'rotate-45 scale-125' }}
                    />
                    <AsideLink name="activity-square" href={PROGRESS_ROUTE} isNotification />
                    <AsideLink name="pie-chart" href={INSIDES_ROUTE} />
                    <AsideLink name="wallet-2" href={WALLET_ROUTE} />
                    <AsideLink name="message-circle-more" href={MESSAGES_ROUTE} />
                    <AsideLink name="user" href={PROFILE_ROUTE} />
                </ul>
            </nav>
            <div />
            <div />
        </aside>
    )
}
