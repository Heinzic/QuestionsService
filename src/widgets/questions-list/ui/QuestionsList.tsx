import { Card } from "../../../shared/ui/card";
import { questionApi } from "../../../entities/question/";

const QUESTION_LIMIT = 3;

export const QuestionsList = () => {
    const { useGetPublicQuestionsQuery } = questionApi

    const {isLoading, isError, data} = useGetPublicQuestionsQuery({limit: QUESTION_LIMIT})
    
    if (isLoading) return (
        <Card>
            <h1>Загрузка вопросов</h1>
        </Card>
    )

    if (isError) return (
        <Card>
            <h1>Ошибка при загрузке вопросов</h1>
        </Card>
    )
    return (
        <>
            {data?.data?.map((question) => (
                <Card key={question.id}>
                    <h1>{question.title}</h1>
                </Card>
            ))}
        </>
    );
}
