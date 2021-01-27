import React from 'react'
import Routes from './routes'
import Form from './pages/form'
import NavBar from "../src/components/Navbar"
export const App = () => {
    return (
        <>
            <Routes/>
            <Form />
        </>
    );
}