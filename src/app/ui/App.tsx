import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const PublicQuestionsPage = lazy(
    () => import('../../pages/public-questions-page/PublicQuestionsPage')
);

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Загрузка страницы...</div>}>
                <Routes>
                    <Route path="/" element={<PublicQuestionsPage />} />
                    <Route path="*" element={<div>Страница не найдена (404)</div>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;