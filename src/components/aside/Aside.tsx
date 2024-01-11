import {
    ActivitySquare,
    Component,
    LogOut,
    MessageCircleMore,
    PieChart,
    Plus,
    User,
    Wallet2,
} from 'lucide-react'

import ClickLogOutWrapper from '../common/wrappers/ClickLogOutWrapper'
import LogoLink from '../logo/LogoLink'

import AsideItem from './AsideItem'
import AsideLink from './AsideLink'

import { asideItems } from '@/mock/progressItems'
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
        border-r bg-black pb-10 pt-5 [border-image:linear-gradient(to_bottom_right,white,black)_1]"
            data-aos="fade-right"
        >
            <LogoLink />
            <nav>
                <ul className="flex flex-col gap-6">
                    <AsideLink
                        href={MENU_ROUTE}
                        classes={{ icon: 'rotate-45 scale-125 hover:scale-135' }}
                    >
                        <Component className="h-full w-full" />
                    </AsideLink>
                    <AsideLink href={PROGRESS_ROUTE} isNotification>
                        <ActivitySquare className="h-full w-full" />
                    </AsideLink>
                    <AsideLink href={INSIDES_ROUTE}>
                        <PieChart className="h-full w-full" />
                    </AsideLink>
                    <AsideLink href={WALLET_ROUTE} isNotification>
                        <Wallet2 className="h-full w-full" />
                    </AsideLink>
                    <AsideLink href={MESSAGES_ROUTE}>
                        <MessageCircleMore className="h-full w-full" />
                    </AsideLink>
                    <AsideLink href={PROFILE_ROUTE}>
                        <User className="h-full w-full" />
                    </AsideLink>
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
                <AsideItem>
                    <Plus className="h-6 w-6 opacity-60 tall:h-8 tall:w-8" />
                </AsideItem>
            </ul>
            <div>
                <ClickLogOutWrapper>
                    <AsideItem>
                        <LogOut className="h-4 w-4 opacity-60 tall:h-6 tall:w-6" />
                    </AsideItem>
                </ClickLogOutWrapper>
            </div>
        </aside>
    )
}
