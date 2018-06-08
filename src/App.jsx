import React from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkSlider from 'bpk-component-slider';
import ReactSlider from 'react-slider';
import BpkCard from 'bpk-component-card';
import BpkTicket from 'bpk-component-ticket';

import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

class Slider extends React.Component {
  constructor(props)
    super(props);
    this.state = {
    value: 0;
  };

 render 
}

onChange = (value) => {
  this.setState({ value });
}

const App = () => (
  <div className={c('App')}>
    <header className={c('App__header')}>
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={12}>
            <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Inspire Me</BpkText>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    </header>
    <main className={c('App__main')}>
      <BpkCard className={c('card-thing')}>
        <BpkText tagName="h2" textStyle="xl">Hot or Cold?</BpkText>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/169/169367.svg"/>
        <BpkSlider
        min={0}
        max={100}
        value={this.state.value}
        onChange={this.onChange}        />
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/944/944883.svg"/>
      </BpkCard>
      <BpkCard className={c('card-thing')}>
        <BpkText tagName="h2" textStyle="xl">Activity or Relaxing?</BpkText>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/437/437043.svg"/>
        <input className="slider_input" type="range" min="1" max="100"/>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/360/360867.svg"/>
      </BpkCard>
      <BpkCard className={c('card-thing')}>
        <BpkText tagName="h2" textStyle="xl">Close By or Far Away?</BpkText>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/185/185275.svg"/>
        <input className="slider_input" type="range" min="1" max="100"/>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/184/184231.svg"/>
      </BpkCard>
      <BpkCard className={c('card-thing')}>
        <BpkText tagName="h2" textStyle="xl">Classical or Club?</BpkText>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/140/140233.svg"/>
        <input className="slider_input" type="range" min="1" max="100"/>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/807/807596.svg"/>
      </BpkCard>
      <BpkCard className={c('card-thing')}>
        <BpkText tagName="h2" textStyle="xl">Self-catered or All Inclusive?</BpkText>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/189/189926.svg"/>
        <input className="slider_input" type="range" min="1" max="100"/>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/929/929104.svg"/>
      </BpkCard>

      <BpkCard className={c('card-thing')}>
        <BpkText tagName="h2" textStyle="xl" className={c('result-image')}>Ski Holiday In France</BpkText>
      </BpkCard>

      <BpkTicket stub="£200">
        Heathrow -> Paris
      </BpkTicket>

      <BpkTicket stub="£200">
        Heathrow -> Paris
      </BpkTicket>

      <BpkTicket stub="£200">
        Heathrow -> Paris
      </BpkTicket>

    </main>
  </div>
);

export default App;
