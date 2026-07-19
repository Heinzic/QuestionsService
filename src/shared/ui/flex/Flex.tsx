import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Flex.module.css'

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
type FlexAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
type FlexGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

interface FlexProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode
    direction?: FlexDirection
    gap?: FlexGap
    align?: FlexAlign
    justify?: FlexJustify
    wrap?: FlexWrap
    inline?: boolean
    className?: string
}

export const Flex = ({
    children,
    direction = 'row',
    gap = 'md',
    align,
    justify,
    wrap = 'nowrap',
    inline = false,
    className,
    style,
    ...props
}: FlexProps) => {
    const flexClasses = [
        styles.flex,
        inline && styles.inline,
        styles[`direction-${direction}`],
        styles[`gap-${gap}`],
        align && styles[`align-${align}`],
        justify && styles[`justify-${justify}`],
        styles[`wrap-${wrap}`],
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div className={flexClasses} style={style} {...props}>
            {children}
        </div>
    )
}
