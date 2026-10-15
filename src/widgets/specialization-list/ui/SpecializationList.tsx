import { useGetAllSpecializationsQuery } from "../../../entities/specialization/api/specializationApi"
import { SpecializationChip } from "../../../entities/specialization/ui/SpecializationChip"
import { Card } from "../../../shared/ui/card"
import { Flex } from "../../../shared/ui/flex"
import styles from './SpecializationsList.module.css'

interface SpecializationListProps {
    selectedIds: number[]
    onClick: (id: number) => void
}

export const SpecializationList = ({ selectedIds, onClick }: SpecializationListProps) => {
    const { data, isLoading, isError } = useGetAllSpecializationsQuery({})

    console.log(selectedIds);

    if (isLoading) return <div className="">Загрузка...</div>
    if (isError) return <div className="">Ошибка загрузки</div>
    return (
        <Card className={styles.specCard}>
            <Flex wrap="wrap">
                {data.data.map((spec) =>
                    <SpecializationChip
                        key={spec.id}
                        className={styles.filterItem}
                        title={spec.title}
                        isSelected={selectedIds.includes(spec.id)}
                        onClick={() => onClick(spec.id)} />
                )}
            </Flex>
        </Card>
    )
}