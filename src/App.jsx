import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import Home from './pages/Home'
import Servicii from './pages/Servicii'
import Documente from './pages/Documente'
import GlobalStyles from './styles/GlobalStyles'
import AppLayout from './ui/AppLayout'
import { Toaster } from 'react-hot-toast'

function App() {
    return (
        <>
            <Toaster
                position="top-center"
                // gutter={12}
                containerStyle={{ margin: '8px' }}
                toastOptions={{
                    succes: { duration: 3000 },
                    error: { duration: 5000 },
                    style: {
                        fontSize: '16px',
                        maxWidth: '500px',
                        padding: '16px 24px',
                        backgroundColor: 'var(--color-white)',
                        color: 'var(--color-primary)',
                    },
                }}
            ></Toaster>
            <GlobalStyles></GlobalStyles>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout></AppLayout>}>
                        <Route index element={<Home></Home>}></Route>
                        <Route
                            path="servicii"
                            element={<Servicii></Servicii>}
                        ></Route>
                        <Route
                            path="documente"
                            element={<Documente></Documente>}
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
