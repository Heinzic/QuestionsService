import { Card } from '../../../shared/ui/card'
import { questionApi, QuestionItem } from '../../../entities/question/'
import { useState } from 'react'
import { Flex } from '../../../shared/ui/flex'
import { Pagination } from '../../../shared/ui/pagination'

const QUESTION_LIMIT = 10
const PAGINATION_LIMIT = 2

export const QuestionsList = () => {
    const [openedCardId, setOpenedCardId] = useState<number | null>(null)
    const [page, setPage] = useState<number>(1)
    const { useGetPublicQuestionsQuery } = questionApi
    const { isLoading, isError, data } = useGetPublicQuestionsQuery({
        limit: QUESTION_LIMIT,
        page,
    })

    const handleNextPage = () => {
        setPage(page + 1)
    }
    const handlePreviousPage = () => {
        setPage(page - 1)
    }
    const handlePageClick = (page: number) => {
        setPage(page)
    }
    if (isLoading)
        return (
            <Card>
                <h1>Загрузка вопросов</h1>
            </Card>
        )

    if (isError)
        return (
            <Card>
                <h1>Ошибка при загрузке вопросов</h1>
            </Card>
        )
    return (
        <Card>
            <h1>Вопросы React, JavaScript</h1>
            <Flex direction="column" gap="md">
                <div>
                    {data?.data?.map((question) => (
                        <QuestionItem
                            question={question}
                            isOpen={openedCardId === question.id}
                            onTogle={() =>
                                setOpenedCardId(
                                    openedCardId === question.id
                                        ? null
                                        : question.id
                                )
                            }
                            key={question.id}
                        />
                    ))}
                </div>
                <Flex justify='center'>
                    <Pagination
                        paginationLimit={PAGINATION_LIMIT}
                        totalPages={Math.ceil(
                            (data?.total ?? 0) / QUESTION_LIMIT
                        )}
                        currentPage={page}
                        handleNextPage={handleNextPage}
                        handlePreviousPage={handlePreviousPage}
                        handlePageClick={handlePageClick}
                    />
                </Flex>
            </Flex>
        </Card>
    )
}
