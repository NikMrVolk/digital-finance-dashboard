import LogoLink from '../logo/LogoLink'

import AsideLink from './AsideLink'

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
                        href="/menu"
                        classes={{ icon: 'rotate-45 scale-125' }}
                    />
                    <AsideLink name="activity-square" href="/progress" isNotification />
                    <AsideLink name="pie-chart" href="/insides" />
                    <AsideLink name="wallet-2" href="/wallet" />
                    <AsideLink name="message-circle-more" href="/messages" />
                    <AsideLink name="user" href="/profile" />
                </ul>
            </nav>
            <div />
            <div />
        </aside>
    )
}
