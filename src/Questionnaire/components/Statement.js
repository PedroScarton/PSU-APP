import React, { useEffect, useState } from 'react';

import Markdown from '../../Shared/components/Math/Math';
import Prueba from '../../Assets/Images/prueba.PNG';
import './Statement.css';


const DUMMY_STATEMENT = [
    "Si $b\\ \\log_{2}(a) = 2$ , ¿cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?",
    "1.) Si $0 < a < 1$, entonces $b < 0$ \n\n 2.) Si $b > 1$, entonces $a > 2$\n\n3.) Si $a = \\sqrt{32}$ , entonces $b = 2,5$ ",

   "https://demre.cl/images/publicaciones/2021/large/tapa-resolucion-matematica-p2021-280px.jpg",

    "in texto normal"
]

const Statement = (props) => {


    const [statement, setStatement] = useState(null);

    useEffect(() => {
        const generateStatement = () => {
            let statement = [];
            for (let i = 0; i < DUMMY_STATEMENT.length; i++) {
                if (isUrl(DUMMY_STATEMENT[i])) {
                    statement.push({ type: 'img', content: DUMMY_STATEMENT[i] })
                } else {
                    statement.push({ type: 'equation', content: DUMMY_STATEMENT[i] })
                }
            }
            let StatementElements = statement.map(item => item.type === 'equation' ?
                (
                    <Markdown>{item.content}</Markdown>
                )
                :
                (
                    <div style={{width: '100%'}}>
                        <img style={{width: '100%'}} src={item.content} alt="pregunta" />
                    </div>
                )
            )
            for (let i = 0; i < DUMMY_STATEMENT.length; i++) {
                if (isUrl(DUMMY_STATEMENT[i])) {

                }
            }
            return StatementElements;
        }
        const newStatement = generateStatement();
        setStatement(newStatement);
    }, [setStatement])


    const isUrl = (value) => {
        let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        if (value.match(regex)) {
            return true;
        } else {
            return false;
        }
    }


    return (
        <div className="statement">

            <h4>
                Enunciado:
            </h4>

            <div className="statement__description">
                <div style={{ textAlign: 'left' }}>
                    {statement && statement}
                </div>
            </div>

        </div>
    )

}

export default Statement;

