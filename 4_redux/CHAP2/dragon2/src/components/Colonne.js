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
