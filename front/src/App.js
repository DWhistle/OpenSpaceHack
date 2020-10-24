import React, { useState } from 'react'
import './App.less'
import Authorization from './pages/Authorization/Authorization'
import AdminPage from './pages/AdminPage/AdminPage'
import BugList from './pages/BugList/BugList'

const App = () => {
    // const [user, setUser] = useState('')
    const [user, setUser] = useState('tester')

    return !user ? (
        <Authorization setUser={setUser} />
    ) : user === 'admin' ? (
        <AdminPage setUser={setUser} />
    ) : user === 'tester' ? (
        <BugList setUser={setUser} />
    ) : (
        <div>А вас мы не знаем</div>
    )
}

export default App
