import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useCookies } from 'react-cookie';

const Users = () => {
    const [cookies] = useCookies(['user']);

    useEffect(() => {
        checkUser();
    }, []); // Added empty dependency array

    function checkUser() {
        if (cookies.user) {
            // User is logged in
            console.log("User is logged in:", cookies.user);
        } else {
            // Redirect to '/assassin' if user is not logged in
            window.location.replace("/assassin");
        }
    }

    return (
        <div>
            <Helmet>
                <title>Users</title>
            </Helmet>
            <h1>Users Page</h1>
        </div>
    );
}

export default Users;
