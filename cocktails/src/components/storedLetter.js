const getStoredLetter = () => {
  let storedLetter = localStorage.getItem('storedLetter');
  if (!storedLetter || storedLetter === null || storedLetter.length === 0)
    storedLetter = 'A';
  return storedLetter;
}

const setStoredLetter = (letter) => {
  localStorage.setItem('storedLetter', letter);
}

export {getStoredLetter, setStoredLetter};
