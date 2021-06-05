import React, { useState } from 'react';
import Frontpage from '../slides/Frontpage';
import Form from '../slides/Form';
import Result from '../slides/Result';
import Header from './Header';
import Result2 from '../slides/Result2';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/slides.css';

import { useStyles } from '../styles/Styles';

function App() {
  const classes = useStyles();
  const [settings, setSettings] = useState({
    car: "", speed1: "", speed2: "", distance: "", time1: "", time2: "", consumption1: "",
    consumption2: ""
  })
  const [message, setMessage] = useState('')

  const customeSlider = React.createRef()
  const SliderSettings = {
    centerMode: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    accessibility: true
  };

  const goToNext = () => {
    customeSlider.current.slickNext()
  }
  const goToPrev = () => {
    customeSlider.current.slickPrev()
  }
  const validateForm = () => {
    if (settings.car === "" || settings.speed1 === "" || settings.speed2 === "" ||
      settings.distance === "") {
      setMessage("Fill all the fields, please")
    } else {
      setMessage('')
      goToNext()
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    validateForm()
  }


  return (
    <div className={classes.background_picture}>
      <Header></Header>
      <div style={{ margin: 100 }}>
        <Slider {...SliderSettings} ref={customeSlider}>
          <div>
            <Frontpage goToPrev={goToPrev} goToNext={goToNext}></Frontpage>
          </div>
          <div>
            <Form handleSubmit={handleSubmit} settings={settings} setSettings={setSettings} goToPrev={goToPrev} message={message}></Form>
          </div>
          <div>
            <Result settings={settings} setSettings={setSettings} goToPrev={goToPrev} goToNext={goToNext}></Result>
          </div>
          <div>
            <Result2 goToPrev={goToPrev} goToNext={goToNext} settings={settings} setSettings={setSettings}></Result2>
          </div>

        </Slider>
      </div>
    </div >

  )
}


export default App;

