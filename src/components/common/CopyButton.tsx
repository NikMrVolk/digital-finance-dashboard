'use client'

import { Copy } from 'lucide-react'

import useCopyToClipboard from '@/hooks/useCopyToClipboard'

interface CopyButtonProps {
    children?: React.ReactNode
    valueToCopy: string
}

export default function CopyButton({ valueToCopy, children }: CopyButtonProps) {
    const [copy, isCopied] = useCopyToClipboard()

    return (
        <button
            className={`flex cursor-pointer items-center gap-2 duration-300 hover:text-red-500 ${
                isCopied ? 'text-red-500' : ''
            }`}
            onClick={() => {
                copy(valueToCopy)
            }}
        >
            <Copy className="h-5 w-5" />
            <p>{isCopied ? 'Copied' : children}</p>
        </button>
    )
}
