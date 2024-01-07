'use client'

import { useState } from 'react'

import { ChevronDown, ChevronUp, Clock5 } from 'lucide-react'

const initialValue = { date: '08 Nov - 17 Nov' }
const periodOfTime = [
    { date: '18 Nov - 27 Nov' },
    { date: '28 Nov - 07 Dec' },
    { date: '08 Dec - 17 Dec' },
    { date: '18 Dec - 27 Dec' },
]

export default function CheckBox() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState<{ date: string } | undefined>()

    const handlerChooseValue = (el: { date: string }) => {
        setValue({ date: el.date })
        setIsOpen(v => !v)
    }

    return (
        <div className="w-full">
            <div className="relative w-full bg-gradient-to-r from-black via-gray-800 to-black py-0.5 text-sm text-dashboardGrayForCheckBox">
                <div
                    className="flex w-full cursor-pointer items-center justify-around bg-black px-2 py-2"
                    onClick={() => setIsOpen(v => !v)}
                >
                    <Clock5 className="h-3 w-3" />
                    {value?.date ? value.date : initialValue.date}
                    {isOpen ? (
                        <ChevronUp className="h-5 w-5" />
                    ) : (
                        <ChevronDown className="h-5 w-5" />
                    )}
                </div>
            </div>
            {isOpen && (
                <>
                    <ul className="absolute top-auto z-1 mt-3 w-10/12 rounded-xl border border-gray-800">
                        {periodOfTime.map(el => (
                            <li
                                key={el.date}
                                className="flex cursor-pointer items-center justify-center border-b border-gray-800/20 px-6 py-2 
                                first:rounded-t-lg last:rounded-b-lg hover:bg-white/10 active:bg-white/20"
                                onClick={() => handlerChooseValue(el)}
                            >
                                {el.date}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
