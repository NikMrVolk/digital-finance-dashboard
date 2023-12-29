import { cn } from '@/lib/utils'

interface DashboardCardProps {
    children: React.ReactNode
    className?: string
}

export default function DashboardCard({ children, className }: DashboardCardProps) {
    return (
        <section
            className={cn(
                'relative z-1 rounded-lg border border-stone-900 bg-black px-8 py-5',
                className,
            )}
            data-aos="fade-in-zoom"
        >
            {children}
        </section>
    )
}
