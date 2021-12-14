import styled from 'styled-components';

// Constante pour le style des boutons
// On fait une ternaire pour gérer les 2 couleurs différentes
// Si la props.color passée au bouton est vraie alors le bcg est "palevioletred" sinon "white"
// Idem pour pour la couleur du texte
const Button = styled.button`
  background: ${props => props.color ? "palevioletred" : "white"};
  color : ${props => props.color ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`

export default Button;