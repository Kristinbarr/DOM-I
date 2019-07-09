function startTick() {
  document.querySelector("button").disabled = 'true'
  setTimeout(tick, 0)

  function tick() {
    document.querySelector('.digits').classList.remove('redDigit')
    let msTens = document.getElementById('msTens')
    let msHuds = document.getElementById('msHundreds')
    let secOnes = document.getElementById('secondOnes')
    let secTens = document.getElementById('secondTens')
    msTens.textContent = 0
    msHuds.textContent = 0
    secOnes.textContent = 0
    secTens.textContent = 0

    let ticking = setInterval(inner, 10)

    function inner() {
      msTens.textContent = parseInt(msTens.textContent) + 1

      if (msTens.textContent == 10) {
        msHuds.textContent = parseInt(msHuds.textContent) + 1
        msTens.textContent = 0
      }
      if (msHuds.textContent == 10) {
        msHuds.textContent = 0
        secOnes.textContent = parseInt(secOnes.textContent) + 1
      }
      if (secOnes.textContent == 10) {
        secOnes.textContent = 0
        secTens.textContent = parseInt(secTens.textContent) + 1
        document.querySelector('.digits').classList.add('redDigit')
        clearInterval(ticking)
      }
      document.querySelector('button').disabled = 'false'
    }
  }
}
