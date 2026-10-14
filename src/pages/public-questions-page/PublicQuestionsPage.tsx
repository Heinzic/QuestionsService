import { Container } from '../../shared/ui/container'
import { Flex } from '../../shared/ui/flex'
import { Header, SidebarFilters } from '../../widgets'
import { QuestionsList } from '../../widgets/questions-list'
import styles from './PublicQuestionsPage.module.css'

const PublicQuestionsPage = () => {
    return (
        <>
            <Container>
                <Header />
            </Container>
            <main className={styles.content}>
                <Container>
                    <Flex>
                        <QuestionsList />
                        <SidebarFilters />
                    </Flex>
                </Container>
            </main>
        </>
    )
}

export default PublicQuestionsPage
