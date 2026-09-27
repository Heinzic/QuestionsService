import { memo } from "react"
import { Button } from "../../../shared/ui/button"

interface SpecializationChipProps {
    title: string
    isSelected: boolean
    onClick: () => void
}

export const SpecializationChip = memo(({ title, isSelected, onClick }: SpecializationChipProps) => {
    return (
        <Button variant={isSelected ? 'outline' : 'primary'} onClick={onClick}>
            {title}
        </Button>
    )
})