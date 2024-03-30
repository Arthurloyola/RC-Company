import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Historico from './pages/Historico'
import Alertas from './pages/Alertas'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/Historico' element={<Historico />} />
                    <Route path='/alertas' element={<Alertas />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
