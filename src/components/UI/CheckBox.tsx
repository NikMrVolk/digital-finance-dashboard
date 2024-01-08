'use client'

import { useState } from 'react'

import { ChevronDown, ChevronUp, Clock5 } from 'lucide-react'

interface CheckBoxProps {
    initialValue: { value: string }
    elements: { value: string }[]
}

export default function CheckBox({ initialValue, elements }: CheckBoxProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState<{ value: string } | undefined>()

    const handlerChooseValue = (el: { value: string }) => {
        setValue({ value: el.value })
        setIsOpen(v => !v)
    }

    return (
        <>
            <div
                className="relative w-full bg-gradient-to-r from-black via-gray-800 to-black py-0.5 
                text-sm text-dashboardGrayForCheckBox"
            >
                <div
                    className="flex w-full cursor-pointer items-center justify-around bg-black px-2 py-2"
                    onClick={() => setIsOpen(v => !v)}
                >
                    <Clock5 className="h-3 w-3" />
                    {value?.value ? value.value : initialValue?.value}
                    {isOpen ? (
                        <ChevronUp className="h-5 w-5" />
                    ) : (
                        <ChevronDown className="h-5 w-5" />
                    )}
                </div>
            </div>
            {isOpen && (
                <>
                    <ul className="absolute top-auto z-1 mt-3 w-10/12 rounded-xl border border-gray-800 bg-black">
                        {elements.map(el => (
                            <li
                                key={el.value}
                                className="flex cursor-pointer items-center justify-center border-b border-gray-800/20 px-6 py-2 
                                first:rounded-t-lg last:rounded-b-lg hover:bg-white/10 active:bg-white/20"
                                onClick={() => handlerChooseValue(el)}
                            >
                                {el.value}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    )
}
