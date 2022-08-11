const popup = document.querySelector('.popup');
const modeButton = document.querySelector('.mode');

let popupColorSwitch = false;

const exitFunction = () => {
  popup.style.display = 'none';
  document.body.style.background = 'rgba(0,0,0,0)';
};

const showPopupFunction = () => {
  popup.style.display = 'flex';
  document.body.style.background = 'rgba(0,0,0,0.4)';
  document.body.style.transition = '0.3s';
};

const chandeMode = () => {
  popupColorSwitch = !popupColorSwitch;
  if (popupColorSwitch) {
    popup.style.background = '#111111';
    popup.style.transition = '0.3s';
    modeButton.value = 'Light Mode';
  } else {
    popup.style.background = '#FFFFFF';
    popup.style.transition = '0.3s';
    modeButton.value = 'Dark Mode';
  }
};
