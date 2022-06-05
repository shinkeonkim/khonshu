const moonCycleDuration = 29.5;
const today = new Date();

const getMoonPhaseRotation = date => {
  const darkMoonDate = new Date('2022-03-02 18:34:00');
  const daysFromDarkMoonDay = (date - darkMoonDate) / 1000 / 60 / 60 / 24
  const currentMoonPhasePercentage = (daysFromDarkMoonDay % moonCycleDuration) / moonCycleDuration

  return 360 - Math.floor(currentMoonPhasePercentage * 360)
}

const setMoonRotation = deg => {
  document.querySelector('.divider').style.transform = `rotate3d(0, 1, 0, ${deg}deg)`

  const hemispheres = document.querySelectorAll('.hemisphere')

  if (deg < 180) {
    hemispheres[0].classList.remove('dark')
    hemispheres[1].classList.add('dark')
    
    hemispheres[0].classList.add('light')
    hemispheres[1].classList.remove('light')
  } else {
    hemispheres[0].classList.add('dark')
    hemispheres[1].classList.remove('dark')
    
    hemispheres[0].classList.remove('light')
    hemispheres[1].classList.add('light')
  }
}

setMoonRotation(getMoonPhaseRotation(today))