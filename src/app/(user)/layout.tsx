import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import '../globals.css'

import Aside from '@/components/aside/Aside'
import Header from '@/components/header/Header'
import { AOSInit } from '@/lib/aos'
import { Providers } from '@/lib/Providers'
import { cn } from '@/lib/utils'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Digital Finance Dashboard',
    description: 'Generated by create next app',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <AOSInit />
            <body className={cn('relative min-h-screen', sora.className)}>
                <Providers>
                    <div
                        className="absolute left-0 top-0 z-0 h-23vh w-full bg-mainPageBlackGradient"
                        data-aos="fade-in-zoom"
                    />
                    <div className="flex">
                        <Aside />
                        <div className=" flex w-full flex-col">
                            <Header />
                            <main className="mb-10 h-full">{children}</main>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
