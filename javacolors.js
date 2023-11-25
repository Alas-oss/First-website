const PurpleTones = ['#505285', '#585e92', '#65689f', '#7474b0', '#7e7ebb', '#8389c7', '#9795d4', '#a2a1dc', '#b5aee4'];

  function getRandIndx(array) {
    return Math.floor(Math.random() * array.length);
  }

  function Colorchange() {
    const randIndx = getRandIndx(PurpleTones);
    document.body.style.backgroundColor = PurpleTones[randIndx];
  }
  setInterval(Colorchange, 1000); 
