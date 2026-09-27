import { Container } from '../../shared/ui/container'
import { Flex } from '../../shared/ui/flex'
import { Header, SpecializationList } from '../../widgets'
import { QuestionsList } from '../../widgets/questions-list'
import styles from './PublicQuestionsPage.module.css'

const PublicQuestionsPage = () => {
    return (
        <>
            <Container>
                <Header />
            </Container>
            <main className={styles.content}>
                <Flex>
                    <Container>
                        <QuestionsList />
                    </Container>
                    <Container>
                        <SpecializationList selectedId={11} onClick={() => { }} />
                    </Container>
                </Flex>
            </main>
        </>
    )
}

export default PublicQuestionsPage
