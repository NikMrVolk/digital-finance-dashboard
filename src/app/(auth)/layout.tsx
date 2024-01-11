import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import '../globals.css'

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
                    <main className="flex min-h-screen items-center justify-center">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    )
}
