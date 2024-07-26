import { lazy } from 'react';

import Home from './components/Home';
const Users = lazy(() => import('./components/Users'));
const NotFound = lazy(() => import('./components/NotFound'));
const UserProfile = lazy(() => import('./components/UserProfile'));
const SearchUser = lazy(() => import('./components/SearchUser'));
const Login = lazy(() => import('./components/Login'));
const AuthProfile = lazy(() => import('./components/AuthProfile'));
const Repo = lazy(() => import('./components/Repo'));

export const appRoutes = [
    {
        path: "/",
        component: Home,
        requiresAuth: false
    },
    {
        path: "/users",
        component: Users,
        requiresAuth: false
    },
    {
        path: "/users/user/:username",
        component: UserProfile,
        requiresAuth: false
    },
    {
        path: "/search",
        component: SearchUser,
        requiresAuth: false
    },
    {
        path: "/login",
        component: Login,
        requiresAuth: false
    },
    {
        path: "/profile",
        component: AuthProfile,
        requiresAuth: true
    },
    {
        path: "/repo/:username/:name",
        component: Repo,
        requiresAuth: false
    },
    {
        path: "*",
        component: NotFound,
        requiresAuth: false
    },
]