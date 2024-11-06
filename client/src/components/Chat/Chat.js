import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const Chat = () => {
    const location = useLocation(); // Gunakan useLocation untuk mengambil location

    useEffect(() => {
        const data = queryString.parse(location.search);

        console.log(location.search);
        console.log(data);
    }, [location.search]);

    return (
        <h1>Chat</h1>
    );
}

export default Chat;
