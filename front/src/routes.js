import React from 'react'
import paths from './paths';
import { Redirect } from 'react-router-dom';
import BugList from './pages/BugList/BugList';
import Comments from './components/Comments'
import Shop from './components/Shop/Shop'
import Profile from './pages/Profile'
const Rating = () => <div>Я Rating</div>

const Threads = () => (
    <div>
        <Comments />
    </div>
)
const Chats = () => <div>Я Chats</div>;

const getRole = () => {
    return localStorage.getItem('role');
}
export default {
    index: {
        path: paths.index,
        component: () => (<Redirect to={getRole() === 'admin' ? paths.bugList : paths.rating} />)
    },
    bugList: {
        path: paths.bugList,
        component: BugList,
    },
    rating: {
        path: paths.rating,
        component: Rating,
    },
    threads: {
        path: paths.threads,
        component: Threads,
    },
    chats: {
      path: paths.chats,
      component: Chats,
    },
    shop: {
        path: paths.shop,
        component: Shop,
    },
    profile: {
        paths: paths.profile,
        component: Profile,
    }
}
