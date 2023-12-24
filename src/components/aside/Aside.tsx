import LogoLink from '../logo/LogoLink'

import AsideItem, { AsideItemProps } from './AsideItem'
import AsideLink from './AsideLink'

import Icon from '@/lib/icon'
import {
    INSIDES_ROUTE,
    MENU_ROUTE,
    MESSAGES_ROUTE,
    PROFILE_ROUTE,
    PROGRESS_ROUTE,
    WALLET_ROUTE,
} from '@/utils/routs/routs'

const asideItems: AsideItemProps[] = [
    {
        isRouteInclude: false,
        bgSelectedColors: 'bg-orange-300/30 hover:bg-orange-300/40 active:bg-orange-300/50',
        bgUnselectedColors: 'bg-gray-300/5 hover:bg-orange-300/20 active:bg-orange-300/30',
        imgSrc: '/images/aside/origin.png',
        imgAlt: 'origin',
    },
    {
        isRouteInclude: false,
        bgSelectedColors: 'bg-yellow-300/30 hover:bg-yellow-300/40 active:bg-yellow-300/50',
        bgUnselectedColors: 'bg-gray-300/5 hover:bg-yellow-300/20 active:bg-yellow-300/30',
        imgSrc: '/images/aside/bumble.png',
        imgAlt: 'bumble',
    },
    {
        isRouteInclude: false,
        bgSelectedColors: 'bg-green-300/30 hover:bg-green-300/40 active:bg-green-300/50',
        bgUnselectedColors: 'bg-gray-300/5 hover:bg-green-300/20 active:bg-green-300/30',
        imgSrc: '/images/aside/spotify.png',
        imgAlt: 'spotify',
    },
    {
        isRouteInclude: false,
        bgSelectedColors: 'bg-pink-300/30 hover:bg-pink-300/40 active:bg-pink-300/50',
        bgUnselectedColors: 'bg-gray-300/5 hover:bg-pink-300/20 active:bg-pink-300/30',
        imgSrc: '/images/aside/netflix.png',
        imgAlt: 'netflix',
    },
    {
        isRouteInclude: false,
        bgSelectedColors: 'bg-fuchsia-300/30 hover:bg-fuchsia-300/40 active:bg-fuchsia-300/50',
        bgUnselectedColors: 'bg-gray-300/5 hover:bg-fuchsia-300/20 active:bg-fuchsia-300/30',
        imgSrc: '/images/aside/aaa.png',
        imgAlt: 'aaa',
    },
]

export default function Aside() {
    return (
        <aside
            className="sticky top-0 z-1 flex h-screen w-30 flex-col items-center justify-between 
        border-r bg-black pb-10 pt-5 [border-image:linear-gradient(to_bottom_right,white,black)_1]"
            data-aos="fade-right"
        >
            <LogoLink />
            <nav>
                <ul className="flex flex-col gap-6">
                    <AsideLink
                        name="component"
                        href={MENU_ROUTE}
                        classes={{ icon: 'rotate-45 scale-125 hover:scale-135' }}
                    />
                    <AsideLink name="activity-square" href={PROGRESS_ROUTE} isNotification />
                    <AsideLink name="pie-chart" href={INSIDES_ROUTE} />
                    <AsideLink name="wallet-2" href={WALLET_ROUTE} isNotification />
                    <AsideLink name="message-circle-more" href={MESSAGES_ROUTE} />
                    <AsideLink name="user" href={PROFILE_ROUTE} />
                </ul>
            </nav>
            <ul className="flex flex-col gap-6">
                {asideItems.map(el => (
                    <AsideItem
                        key={el.imgSrc}
                        {...el}
                        classes={{ image: 'h-5 w-5 tall:h-6 tall:w-6' }}
                    />
                ))}
                <AsideItem imgAlt="" imgSrc="">
                    <Icon name="plus" className="h-6 w-6 opacity-60 tall:h-8 tall:w-8" />
                </AsideItem>
            </ul>
            <div>
                <AsideItem imgAlt="" imgSrc="">
                    <Icon name="log-out" className="h-4 w-4 opacity-60 tall:h-6 tall:w-6" />
                </AsideItem>
            </div>
        </aside>
    )
}
