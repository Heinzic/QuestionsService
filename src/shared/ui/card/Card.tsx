import type { ReactNode, HTMLAttributes } from 'react';
import styles from './Card.module.css';

type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: CardPadding;
  hoverable?: boolean;
  clickable?: boolean;
}

export const Card = ({
  children,
  padding = 'md',
  hoverable = false,
  clickable = false,
  className,
  onClick,
  ...props
}: CardProps) => {
  const cardClasses = [
    styles.card,
    styles[padding],
    hoverable && styles.hoverable,
    clickable && styles.clickable,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};