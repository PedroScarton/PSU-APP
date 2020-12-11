import React from 'react'
import './Question.css'

const Question = (props) => {
    return (
        <React.Fragment>
            <div className="general_options">
                <div className="option">
                    <p>A) {props.options}</p>
                    <input type="radio" />
                </div >
                <div className="option">
                    <p>B) {props.options}</p>
                    <input type="radio" />
                </div>
                <div className="option">
                    <p>C) {props.options}</p>
                    <input type="radio" />
                </div>
                <div className="option">
                    <p>D) {props.options}</p>
                    <input type="radio" />
                </div>
                <div className="option">
                    <p>E) {props.options}</p>
                    <input type="radio" />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Question;