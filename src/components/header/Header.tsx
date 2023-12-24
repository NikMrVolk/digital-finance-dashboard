import Image from 'next/image'

import BlockWrapper from '../common/wrappers/BlockWrapper'

import HeaderSearch from './HeaderSearch'
import User from './User'

import Icon from '@/lib/icon'

export default function Header() {
    return (
        <BlockWrapper>
            <nav
                className="relative z-1 mb-10 flex items-center justify-between pt-5"
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
                    <div>Friday, 4 Nov 2022</div>
                </div>
                <HeaderSearch />
                <div className="flex items-center gap-10">
                    <Icon name="moon" />
                    <Icon name="mic" />
                    <Icon name="bell" />
                    <User />
                </div>
            </nav>
        </BlockWrapper>
    )
}
