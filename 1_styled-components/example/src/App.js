import React from 'react';
import {Global, Header, Title, Anime, Container} from './styles/AppStyles';

const App = () => {
	return (
    <div className="App">
      <Global background="lightblue"/>
      <Header>
        <Title>Un bel exemple</Title>
      </Header>
      <Container>
        <section className='container'>
          <p>Stylé !</p>
        </section>
        <Anime> Boum !</Anime>
      </Container>
    </div>
	);
};

export default App;
