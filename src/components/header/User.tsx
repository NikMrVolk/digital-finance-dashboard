import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function User() {
    return (
        <div className="flex items-center justify-center gap-4 text-xs">
            <div className="items-center justify-center rounded-full bg-red-500 p-0.5">
                <Image src="/images/user.png" width={25} height={25} alt="user" />
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center gap-2">
                    <div>Dennis Steven Denji</div>
                    <ChevronDown className="h-4 w-4" />
                </div>
                <div className="opacity-60">Dennisdenji@gmail.com</div>
            </div>
        </div>
    )
}
