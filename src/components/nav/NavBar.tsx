'use client'

import { useState } from 'react'

import { Bell, Mic, Moon } from 'lucide-react'
import Image from 'next/image'

import MainInput from '../UI/MainInput'
import BlockWrapper from '../wrappers/BlockWrapper'

import User from './User'

export default function NavBar() {
    const [value, setValue] = useState<string>('')

    return (
        <BlockWrapper>
            <nav className="relative z-1 mb-20 flex items-center justify-between pt-5">
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
                <MainInput
                    type="text"
                    placeholder="Search"
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                />
                <div className="flex items-center gap-10">
                    <Moon />
                    <Mic />
                    <Bell />
                    <User />
                </div>
            </nav>
        </BlockWrapper>
    )
}
