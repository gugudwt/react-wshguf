// TRASCINA I FILE NELL'ELENCO FILE A SINITRA E SEGUI LE DUE ISTRUZIONI QUI SOTTO

import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Lottie from 'react-lottie';
// MODIFICA LA RIGA SOTTO CAMBIANDO IL NOME DEL FILE PER L'ANIMAZIONE GRANDE
import animazioneGrande from './pencil.json';
// MODIFICA LA RIGA SOTTO CAMBIANDO IL NOME DEL FILE PER L'ANIMAZIONE DEI PUNTI
import animazionePunti from './pencilDots.json';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      canRenderDots: false
    };
  }

  handleEvent = () => {
    this.setState({ canRenderDots: true });
  };

  render() {
    return (
      <div style={{width: window.innerWidth, height: window.innerHeight, backgroundColor: 'purple'}}>
      <div style={{ position: "absolute", top: 0, left: 0 }}>
          <Lottie
            options={{
              animationData: animazioneGrande,
              loop: false
            }}
            eventListeners={[
              {
                eventName: "complete",
                callback: obj => this.handleEvent(obj)
              }
            ]}
          />
          <div style={{position: 'absolute', top: 0, left: 0}}>
        {this.state.canRenderDots && <Lottie options={{ animationData: animazionePunti }} />}
      </div>
        </div>
        </div>
    );
  }
}

render(<App />, document.getElementById('root'));
