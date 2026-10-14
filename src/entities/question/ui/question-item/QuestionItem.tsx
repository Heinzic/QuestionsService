import { Badge } from '../../../../shared/ui/badge'
import { Card } from '../../../../shared/ui/card'
import { Flex } from '../../../../shared/ui/flex'
import type { Question } from '../../model/question'
import styles from './QuestionItem.module.css'

interface QuestionItemProps {
    question: Question
    isOpen: boolean
    onTogle: () => void
}

export const QuestionItem = ({
    question,
    isOpen,
    onTogle,
}: QuestionItemProps) => {
    return (
        <Card clickable onClick={onTogle}>
            <Flex direction="column" gap="xl">
                <div className={styles.header}>
                    <span className={styles.title}>{question.title}</span>
                    <svg
                        className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                    >
                        <path
                            d="M0.833 0.832L6.833 6.832L12.833 0.832"
                            stroke="#6A0BFF"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {isOpen && (
                    <div className={styles.content}>
                        <Flex direction="column" gap="xl">
                            {question.description}
                            <Flex direction="row" gap="md">
                                <Badge
                                    value={question.rate ?? 0}
                                    title="Рейтинг"
                                />
                                <Badge
                                    value={question.complexity ?? 0}
                                    title="Сложность"
                                />
                            </Flex>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: question.longAnswer ?? '',
                                }}
                            />
                        </Flex>
                    </div>
                )}
            </Flex>
        </Card>
    )
}
