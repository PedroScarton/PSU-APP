import React, { useState, useEffect } from 'react';

import './LobbyHeader.css';

const LobbyHeader = (props) => {

    const [initials, setInitials] = useState('');

    useEffect(() => {
        let initials = props.name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        setInitials(initials);
    }, [props.name])

    return (
        <header className="lobby-header">
            <div className="lobby-header__names">
                <div className="lobby-header__initials">
                    <p>{initials}</p>
                </div>
                <p className="lobby-header__name">{props.name}</p>
            </div>
            <hr />
        </header>
    );

}

export default LobbyHeader;