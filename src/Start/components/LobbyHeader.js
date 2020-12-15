import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../Shared/context/auth-context';

import Backdrop from '../../Shared/components/UIElements/Backdrop';
import SideDrawer from '../../Shared/components/Navigation/SideDrawer';
import Logout from '../../Assets/Icons/log-out.svg';
import './LobbyHeader.css';

const LobbyHeader = (props) => {

    const auth = useContext(AuthContext);

    const [initials, setInitials] = useState('');
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);



    useEffect(() => {
        let initials = auth.userName.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        setInitials(initials);
    }, [auth.userName])

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    }
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    }

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <header className="lobby-header__drawer-header">
                    <div className="lobby-header__drawer-user-details">
                        <div className="lobby-header__drawer-initials">
                            <h3>{initials}</h3>
                        </div>
                        <div>
                            <h3>{auth.userName}</h3>
                            <p>Plan comun</p>
                        </div>
                    </div>
                    <hr />
                    <div className="lobby-header__drawer-content">

                    </div>
                    <div className="lobby-header__drawer-logout-button">
                        <button onClick={auth.logout}>
                            <img src={Logout} alt=""/>
                            <p>Cerrar sesión</p>
                        </button>
                    </div>
                </header>
            </SideDrawer>
            <header className="lobby-header">
                <div className="lobby-header__names">
                    <div className="lobby-header__initials" onClick={openDrawerHandler}>
                        <p>{initials}</p>
                    </div>
                    <p className="lobby-header__name">{auth.userName}</p>
                </div>
                <hr />
            </header>
        </React.Fragment>
    );

}

export default LobbyHeader;