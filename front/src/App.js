import React, { useEffect, useState } from 'react'
import './App.less'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Authorization from './pages/Authorization/Authorization'
import PrivateRoute from './routing/PrivateRouter'
import paths from './paths'
import Main from './routing/Main'
import history from './history'
import { getRandomAvatar } from './utils/getRandomAvatar'
import Registration from './pages/Registration'
import deviceService from './services/deviceService'
import platform from 'platform'

const App = () => {
    const [user, setUser] = useState(localStorage.getItem('role'))
    const [avatar, setAvatar] = useState(null)
    const [userDevices, setUserDevices] = useState([
        {
            os: {
                family: platform.os.family,
                version: platform.os.version,
            },
            browser: {
                name: platform.name,
                version: platform.version,
            },
        },
    ])

    useEffect(() => {
        setAvatar(getRandomAvatar());
    }, []);
    useEffect(() => {
        if (user) {
            deviceService.getUserDevices()
                .then(res => {
                    console.log(res);
                    setUserDevices(res);
                })
        }
    }, []);
    return (
            <Router history={history}>
                <Switch>
                    <Route
                        exact
                        path={paths.login}
                        component={() => (<Authorization setUser={setUser}/>)}
                    />
                    <Route
                        exact
                        path={paths.registration}
                        component={() => (<Registration setUser={setUser}/>)}
                    />
                    <PrivateRoute
                        path={paths.index}
                        component={(prop) => (
                            <Main
                                {...prop}
                                userDevices={userDevices}
                                setUserDevices={setUserDevices}
                                avatar={avatar}
                                user={user}
                                setUser={setUser}
                            />)}
                        isLoggedIn={!!user}
                    />
                </Switch>
            </Router>
    )
}

export default App
