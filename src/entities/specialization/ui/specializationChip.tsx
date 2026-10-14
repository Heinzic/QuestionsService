import { memo } from "react"
import { Button } from "../../../shared/ui/button"

interface SpecializationChipProps {
    title: string
    isSelected: boolean
    onClick: () => void
    className?: string
}

export const SpecializationChip = memo(({ title, isSelected, onClick, className }: SpecializationChipProps) => {
    return (
        <Button className={className} variant={isSelected ? 'primary' : 'outline'} onClick={onClick}>
            {title}
        </Button>
    )
})