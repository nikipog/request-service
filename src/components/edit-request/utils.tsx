const options = {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
} as const;


export function formatDateFull(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleString('ru-RU', options);
}

const optionsShort = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
} as const;

export function formatDateShort(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', optionsShort);
}