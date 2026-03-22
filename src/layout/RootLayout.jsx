import React from 'react'
import Navbar from '../share/Navbar'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../share/Footer'
import Loader from '../components/Loader';

function RootLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <div>
            <Navbar />
            {isLoading && <Loader />}
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout