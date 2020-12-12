import React from 'react';

import close from '../../Assets/Icons/x.svg';
import './Solution.css';

const Solution = (props) => {
    return (
        <div
            className={`${props.open ? 'solution--open' : 'solution'}`}>
            <div
                className={`${props.open ? 'solution__container--open' : 'solution__container'}`}>
                <div className={`${props.open ? 'solution__header--open' : 'solution__header'}`}>
                    <p>Solución:</p>
                    <button
                        onClick={props.modalHandler}
                        style={{ transform: props.open ? 'rotate(0deg)' : 'rotate(45deg)' }}>
                        <img src={close} alt="" className={`solution__icon`} />
                    </button>
                </div>
                <div className={`${props.open ? 'solution__statement--open' : 'solution__statement'}`}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dolor purus, non fringilla augue
                    </p>
                    <p>
                        lacinia id. Proin id tincidunt urna. Curabitur faucibus lectus purus, a laoreet felis tincidunt at. Maecenas aliquet ornare placerat. Praesent ipsum purus, dapibus eu purus eu,
                    </p>
                    <p>
                        mattis aliquam libero. In porttitor ante sed molestie gravida. Vivamus tincidunt nisi at urna sollicitudin, in tincidunt dolor porta. Etiam nisl velit, venenatis ut nibh nec, mattis commodo lorem.
                    </p>

                    <p>
                        mattis aliquam libero. In porttitor ante sed molestie gravida. Vivamus tincidunt nisi at urna sollicitudin, in tincidunt dolor porta. Etiam nisl velit, venenatis ut nibh nec, mattis commodo lorem.
                    </p>
                    <p>
                        mattis aliquam libero. In porttitor ante sed molestie gravida. Vivamus tincidunt nisi at urna sollicitudin, in tincidunt dolor porta. Etiam nisl velit, venenatis ut nibh nec, mattis commodo lorem.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Solution;