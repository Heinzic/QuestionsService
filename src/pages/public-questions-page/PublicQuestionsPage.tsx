import { Container } from "../../shared/ui/container";
import { Header } from "../../widgets";
import { QuestionsList } from "../../widgets/questions-list";
import styles from './PublicQuestionsPage.module.css'

const PublicQuestionsPage = () => {
    return (
        <>
            <Container>
                <Header />
            </Container>
            <main className={styles.content}>
                <Container>
                    <QuestionsList/>
                </Container>
            </main>
        </>
    );
}
 
export default PublicQuestionsPage;