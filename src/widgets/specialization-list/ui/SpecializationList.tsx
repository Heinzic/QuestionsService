import { useGetAllSpecializationsQuery } from "../../../entities/specialization/api/specializationApi"
import { SpecializationChip } from "../../../entities/specialization/ui/specializationChip"
import { Flex } from "../../../shared/ui/flex"

interface SpecializationListProps {
    selectedId: number
    onClick: () => void
}

export const SpecializationList = ({ selectedId, onClick }: SpecializationListProps) => {
    const { data, isLoading, isError } = useGetAllSpecializationsQuery({})

    if (isLoading) return <div className="">Загрузка...</div>
    if (isError) return <div className="">Ошибка загрузки</div>
    return (
        <Flex direction="column">
            {data.data.map((spec) =>
                <SpecializationChip
                    key={spec.id}
                    title={spec.title}
                    isSelected={spec.id === selectedId}
                    onClick={onClick} />
            )}
        </Flex>
    )
}