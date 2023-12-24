export const numberFormat = (n: number): string => {
    const options = {
        style: 'currency',
        currency: 'USD',
    }

    return new Intl.NumberFormat('en-US', options).format(n).slice(1)
}
