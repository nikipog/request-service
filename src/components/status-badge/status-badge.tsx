interface StatusBadgeProps {
    color: string
}
export function StatusBadge({ color }: StatusBadgeProps) {
    return (
        <span style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: color,
            marginRight: '8px'
        }} />
    );
}