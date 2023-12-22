import AsideLink from './AsideLink'

export default function Aside() {
    return (
        <aside className="sticky top-0 z-1 flex h-screen w-30 flex-col items-center justify-between bg-black py-5">
            <AsideLink
                name="circle"
                color="rgb(255, 0, 50)"
                href="/"
                classes={{ icon: 'w-10 h-10 opacity-80 hover:opacity-90' }}
            />
            <nav className="flex flex-col gap-4">
                <AsideLink
                    name="component"
                    href="/menu"
                    classes={{ icon: 'rotate-45 scale-125' }}
                />
                <AsideLink name="activity-square" href="/progress" isNotification />
                <AsideLink name="pie-chart" href="/insides" />
                <AsideLink name="wallet-2" href="/wallet" />
                <AsideLink name="message-circle-more" href="/messages" />
                <AsideLink name="user" href="/profile" />
            </nav>
            <div></div>
            <div></div>
        </aside>
    )
}
