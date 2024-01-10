import { Bell, Mic, Moon } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'

import BlockWrapper from '../common/wrappers/BlockWrapper'

import HeaderSearch from './HeaderSearch'
import User from './User'

export default function Header() {
    return (
        <BlockWrapper>
            <nav
                className="relative z-1 mb-9 flex items-center justify-between pt-5"
                data-aos="fade-in-zoom"
            >
                <div className="flex gap-5">
                    <Image
                        src="/images/weather.png"
                        width={24}
                        height={24}
                        alt="user"
                        className="h-6 w-6"
                    />
                    <div>{moment(Date.now()).format('dddd, D MMM YYYY')}</div>
                </div>
                <HeaderSearch />
                <div className="flex items-center gap-10">
                    <Moon className="cursor-pointer" />
                    <Mic className="cursor-pointer" />
                    <Bell className="cursor-pointer" />
                    <User />
                </div>
            </nav>
        </BlockWrapper>
    )
}
