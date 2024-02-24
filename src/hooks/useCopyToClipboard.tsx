import { useEffect, useState } from 'react'

type CopyFn = (text: string) => Promise<boolean>

function useCopyToClipboard(): [CopyFn, boolean] {
    const [isCopied, setIsCopied] = useState(false)

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false)
            }, 2000)
        }
    }, [isCopied])

    const copy: CopyFn = async text => {
        if (!navigator?.clipboard) {
            return false
        }

        try {
            await navigator.clipboard.writeText(text)
            setIsCopied(true)

            return true
        } catch (error) {
            alert('Failed to copy')

            return false
        }
    }

    return [copy, isCopied]
}

export default useCopyToClipboard
