// Composant pour styliser la page en 3 parties

import React from 'react';
import './Colonne.css';

const Colonne = ({children}) => {
    return (
       <div className="Col-main">
           {children}
       </div>
    );
}

export default Colonne;
