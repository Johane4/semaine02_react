import React from "react";

import Button from "./Styles/Button";
import Presentation from './Styles/Presentation';
import GlobalStyle from './Styles/Global';

// Création d'une classe pour faire une mise à jour du message
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      active: false,
      message: "Hello React",
    };

    this.handleClick =  this.handleClick.bind(this);
  }

  // fonction pour apporter une mise à jour sur la propriété active dont la valeur
  // du paramètre sera donnée à l'appel de la fonction
  handleClick(active){
    this.setState({ active : active}) ;
  }

  render() {
    const { message, active } = this.state;

    return (
      // On affiche les éléments stylisés et importés
      <Presentation>
        <GlobalStyle />

        {/* On appelle la fonction du click où active est vraie puis fausse dans le 2ème bouton */}
        <Button onClick={() => this.handleClick(true)}>Open</Button>

        {/* La props.color a pour valeur true pour afficher les couleurs par rapport à la ternaire */}
        <Button color={true} onClick={() => this.handleClick(false)}>Closed</Button>
        
        {/* si la propriété active appelé par la fonction au click des boutons 
        est vraie alors on affiche le message sinon non */}
        {active && <p>{message}</p>}
      </Presentation>
    );
  }
}

export default App;
