// Pour mettre en forme le container pour tous les composants

import React from 'react';

import './Container.css';

const Container = ({children}) => {
    return (
       <div className="Container-main">
           {children}
       </div>
    );
}

export default Container;
