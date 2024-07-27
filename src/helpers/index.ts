export function formatCurrency(value: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value)
}

export function formatDate(dateString: string): string {
    const dateObj = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'long'
    }

    return new Intl.DateTimeFormat('es-Es', options).format(dateObj)
}