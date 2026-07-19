import styles from './Badge.module.css'

interface BadgeProps {
    title: string
    value: number | string
}

export const Badge = ({ title, value }: BadgeProps) => {
    return (
        <span className={styles.badge}>
            <p className={styles.title}>{title}:</p>
            <p className={styles.value}>{value}</p>
        </span>
    )
}
