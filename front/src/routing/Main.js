import React from 'react'
import AdminPage from '../pages/AdminPage/AdminPage'
import TesterPage from '../pages/TesterPage/TesterPage'

const Main = ({ user, setUser, avatar, setUserDevices, userDevices }) => {
    return (
        <>
            {user === 'admin' && (
                <AdminPage
                    avatar={avatar}
                    user={user}
                    userDevices={userDevices}
                    setUserDevices={setUserDevices}
                    setUser={setUser}
                />
            )}
            {user === 'tester' ? (
                <TesterPage
                    avatar={avatar}
                    user={user}
                    userDevices={userDevices}
                    setUserDevices={setUserDevices}
                    setUser={setUser}
                />
            ) : (
                <div>А вас мы не знаем</div>
            )}
        </>
    )
}

export default Main
