import React, { useState } from 'react'
import './App.less'
import Authorization from './pages/Authorization/Authorization'
import AdminPage from './pages/AdminPage/AdminPage'
import TesterPage from './pages/TesterPage/TesterPage'

const App = () => {
    const [user, setUser] = useState('')
    // const [user, setUser] = useState('admin')

    return !user ? (
        <Authorization setUser={setUser} />
    ) : user === 'admin' ? (
        <AdminPage setUser={setUser} />
    ) : user === 'tester' ? (
        <TesterPage setUser={setUser} />
    ) : (
        <div>А вас мы не знаем</div>
    )
}

export default App
