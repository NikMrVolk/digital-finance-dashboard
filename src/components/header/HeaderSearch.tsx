'use client'

import { useState } from 'react'

import MainInput from '../UI/MainInput'

export default function HeaderSearch() {
    const [value, setValue] = useState<string>('')

    return (
        <MainInput
            type="text"
            placeholder="Search"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
    )
}
