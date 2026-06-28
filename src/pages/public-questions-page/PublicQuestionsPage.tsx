import { Card } from "../../shared/ui/card";
import { Container } from "../../shared/ui/container";
import { Header } from "../../widgets";
import styles from './PublicQuestionsPage.module.css'

const PublicQuestionsPage = () => {
    return (
        <>
            <Container>
                <Header />
            </Container>
            <main className={styles.content}>
                <Container>
                    <Card>
                        <h1>Hello</h1>
                    </Card>
                    <Card>
                        <h1>Hello</h1>
                    </Card>
                </Container>
            </main>
        </>
    );
}
 
export default PublicQuestionsPage;