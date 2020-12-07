import React from 'react';

import Button from '../../Shared/components/FormElements/Button';
import LobbyHeader from '../components/LobbyHeader';
import './Lobby.css';


const Lobby = () => {

    return (
        <React.Fragment>
            <LobbyHeader name={'Pedro Scarton'}/>
            <main className="lobby">
                <div className="lobby__title">
                    <h1>PSU APP</h1>
                </div>
                <div className="lobby_button">
                    <Button type="text" onClick={() => console.log('test iniciado')}>Test Rapido</Button>
                </div>
            </main>
        </React.Fragment>
    );

}

export default Lobby;