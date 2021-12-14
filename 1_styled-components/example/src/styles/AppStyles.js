import styled, { createGlobalStyle, keyframes } from 'styled-components';
 
const Center = "text-align: center"

// Style Global
export const Global = createGlobalStyle`
 body {
   color: red;
   background: ${(props) => props.background}
 }
`
// Animation
export const anime = keyframes`
 {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}`

export const Anime = styled.div`
 width: 100px;
 heigth: 100px;
 border-radius: 50%;
 background: grey;
 color: black;
 margin: auto;
 animation: ${anime} 2s ease infinite
`

// CSS
export const Title = styled.h1`
  color: salmon;
  font-size: 25px
`
export const Header = styled.header`
  text-align: center;
  background: grey;
`

export const Container = styled.div`
    max-width: 1000px;
    margin: auto;
    padding: 15px;
    h2 {
        font-weight: bold
    }
    .container {
        padding: 20px;
        background: violet
    }
    p {
        ${Center}
    }
`