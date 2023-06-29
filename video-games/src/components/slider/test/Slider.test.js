import driver from 'assets/images/heros/Desktop/search/friends@2x.jpg';
import friends from 'assets/images/heros/Desktop/search/family@2x.jpg';
import React from 'react';
import { render } from '@testing-library/react';
import Slider from '../Slider';

jest.useFakeTimers();
let currentOnSwipedR, currentOnSwipedL;
jest.mock('react-swipeable', () => ({
  useSwipeable: ({ onSwipedRight, onSwipedLeft }) => {
    currentOnSwipedR = onSwipedRight;
    currentOnSwipedL = onSwipedLeft;
  },
}));
describe('test ReactDOM.render', () => {
  let wrapper;
  it('render slider two images', async () => {
    const image = [friends, driver];
    wrapper = render(
      <Slider images={image} timeTransition={1} autoPlay={true} />,
    );
    jest.runTimersToTime(5000);
    expect(wrapper).toBeTruthy();
  });
  it('render slider without image', async () => {
    wrapper = render(
      <Slider
        timeTransition={1}
        counter={true}
        images={null}
        showMiniatures={null}
      />,
    );
    expect(wrapper).toBeTruthy();
  });
  it('advance image', async () => {
    const image = [friends, driver, driver];
    let change = false;
    const positionChange = () => {
      change = true;
    };
    wrapper = render(
      <Slider
        images={image}
        timeTransition={1}
        autoPlay={false}
        visibleImage={1}
        actualPosition={1}
        showMiniatures={2}
        infinity={true}
        positionChange={positionChange}
        counter={true}
      />,
    );
    const buttonNext = wrapper.container.querySelector('.next');
    buttonNext.click();
    buttonNext.click();
    const buttons = wrapper.container.querySelector('.prev');
    buttons.click();
    expect(change).toBeTruthy();
    expect(wrapper).toBeTruthy();
  });
  it('click image', async () => {
    const image = [];
    image[0] = { image: friends };
    image[1] = { image: driver };
    image[2] = { image: driver };
    let isOpen = false;
    const change = () => {
      isOpen = true;
    };
    wrapper = render(
      <Slider
        images={image}
        timeTransition={1}
        autoPlay={false}
        visibleImage={1}
        selectedItem={change}
        showMiniatures={4}
      />,
    );
    const buttonNext = wrapper.container.querySelector('.next');
    buttonNext.click();
    buttonNext.click();
    const buttons = wrapper.container.querySelector('.prev');
    buttons.click();
    const imageSelect = wrapper.container.querySelector('a img');
    const eventI = new Event('error');
    imageSelect.click();
    imageSelect.dispatchEvent(eventI);
    expect(isOpen).toBeTruthy();
  });
  it('send image object', async () => {
    const image = [
      {
        id: '1',
        name: 'Chevrolet',
        img: driver,
        url: 'https://www.carroya.com/vehiculos/chevrolet/',
      },
      {
        id: '2',
        name: 'Mazda',
        img: friends,
        url: 'https://www.carroya.com/vehiculos/mazda/',
      },
    ];
    wrapper = render(
      <Slider
        images={image}
        timeTransition={1}
        autoPlay={false}
        visibleImage={2}
      />,
    );
    const buttonNext = wrapper.container.querySelector('.next');
    buttonNext.click();
    const buttons = wrapper.container.querySelector('.prev');
    wrapper.container.querySelector('a img').click();
    expect(buttons).toBeFalsy();
  });
  it('should calculate when swiped', () => {
    const image = [
      {
        id: '1',
        name: 'Chevrolet',
        img: driver,
        url: 'https://www.carroya.com/vehiculos/chevrolet/',
      },
      {
        id: '2',
        name: 'Mazda',
        img: friends,
        url: 'https://www.carroya.com/vehiculos/mazda/',
      },
    ];
    const component = render(
      <Slider
        images={image}
        timeTransition={1}
        autoPlay={false}
        visibleImage={1}
      />,
    );
    currentOnSwipedR({ deltaX: 10, deltaY: 10 });
    currentOnSwipedL({ deltaX: 10, deltaY: 10 });
    expect(component).toBeTruthy();
  });
});
