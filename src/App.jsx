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

const result = {
  hot: 0,
  activity: 0,
  close: 0,
  classical: 0,
  catered: 0,
};

function createHoliday() {
  const foodOption = result.catered < 50 ? 'self catered' : 'all inclusive';
  const distance = result.close < 50 ? 'close' : 'far';
  const temperature = result.hot < 50 ? 'hot' : 'cold';
  const culture = result.classical < 50 ? 'local culture' : 'cool clubbing';
  let activity = result.classical < 50 ? 'water sports' : 'beach lounging';
  let bg;

  let location;
  if (distance === 'close' && temperature === 'hot') {
    location = 'the South of France';
    bg = 'url("https://images.ecosia.org/K0zAvITAocveLA1pVONkMigMTTA=/0x390/smart/http%3A%2F%2Fwallyrent.com%2Fwp-content%2Fuploads%2F2015%2F02%2Fcannes02.jpg")';
  }
  if (distance === 'close' && temperature === 'cold') {
    location = 'the Swiss Alps';
    activity = 'skiing';
    bg = 'url("https://i.pinimg.com/originals/45/e4/86/45e486a8338db70e3ecefb611c0216bc.jpg")';
  }
  if (distance === 'far' && temperature === 'hot') {
    location = 'California';
    bg = 'url("https://images.ecosia.org/poAG9eRLKxUh-EKZ_Sglhp0iC4Q=/0x390/smart/http%3A%2F%2Fwallpapercave.com%2Fwp%2Fe7QjtIF.jpg")';
  }
  if (distance === 'far' && temperature === 'cold') {
    location = 'Japan';
    activity = 'snowboarding';
    bg = 'url("https://images.ecosia.org/OutaVQE8ouUWM8RtgEEOH_MOijc=/0x390/smart/http%3A%2F%2Fi.dailymail.co.uk%2Fi%2Fpix%2Ftm%2F2008%2F03%2FKokkaidoMoS20308_428x269_to_468x312.jpg")';
  }

  return {
    text: `A ${foodOption} holiday in ${location} with ${activity} and some ${culture}`,
    bg,
  };
}

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  onChange = (value) => {
    this.setState({ value });
    console.log(this.props.parent);
    const resultBox = document.querySelector('.result-image');
    resultBox.innerHTML = createHoliday().text;
    resultBox.style.backgroundImage = createHoliday().bg;
    resultBox.style.color = 'white';

    result[this.props.parent] = value;

  };

  render() {
    return (
      <BpkSlider
        className={c('slider_input')}
        min={10}
        max={100}
        onChange={this.onChange}
        value={this.state.value}
      />
    );
  }
}


const App = () => (
  <div className={c('App')}>
    <header className={c('App__header')}>
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={12}>
            <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Inspired Holidays</BpkText>
            <img className={c('logo')} src="https://p17.zdassets.com/hc/theme_assets/470143/200011371/skyscanner_RGB_logo.svg" alt="logo"/>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    </header>
    <main className={c('App__main')}>
      <BpkCard className={c('card-thing')}>
        <BpkText tagName="h2" textStyle="xl">Hot or Cold?</BpkText>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/169/169367.svg"/>
        <Slider parent="hot"/>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/944/944883.svg"/>
      </BpkCard>
      <BpkCard className={c('card-thing')}>
        <BpkText tagName="h2" textStyle="xl">Activity or Relaxing?</BpkText>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/437/437043.svg"/>
        <Slider parent="activity" />
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/360/360867.svg"/>
      </BpkCard>
      <BpkCard className={c('card-thing')}>
        <BpkText tagName="h2" textStyle="xl">Close By or Far Away?</BpkText>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/185/185275.svg"/>
        <Slider parent="close"/>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/184/184231.svg"/>
      </BpkCard>
      <BpkCard className={c('card-thing')}>
        <BpkText tagName="h2" textStyle="xl">Classical or Club?</BpkText>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/140/140233.svg"/>
        <Slider parent="classical"/>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/807/807596.svg"/>
      </BpkCard>
      <BpkCard className={c('card-thing')}>
        <BpkText tagName="h2" textStyle="xl">Self-catered or All Inclusive?</BpkText>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/189/189926.svg"/>
        <Slider parent="catered"/>
        <img alt="icon" className={c('small-img')} src="https://image.flaticon.com/icons/svg/929/929104.svg"/>
      </BpkCard>

      <BpkCard className={c('card-thing')}>
        <BpkText tagName="h2" textStyle="xl" className={`result-image ${c('result-image')}`}>Where will you go?</BpkText>
      </BpkCard>

    </main>
  </div>
);

export default App;
