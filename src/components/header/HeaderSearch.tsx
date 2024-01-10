'use client'

import { useState } from 'react'

import HeaderSearchInput from '../UI/HeaderSearchInput'

export default function HeaderSearch() {
    const [value, setValue] = useState<string>('')

    return (
        <HeaderSearchInput
            type="text"
            placeholder="Search"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
    )
}
