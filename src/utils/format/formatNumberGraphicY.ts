export const formatNumberGraphicY = (n: number): string =>
    new Intl.NumberFormat('en-GB', {
        notation: 'compact',
        compactDisplay: 'short',
    }).format(n)
