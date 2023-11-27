import './App.css';
import { useState } from 'react';


function App() {
  const [password, setPassword] = useState("P4$5W0rD!");
  const [opacity, setOpacity] = useState(0.25);
  const [copyPassword, setCopyPassword] = useState("none");
  const [charLength, setCharLength] = useState(0);

  const [strength, setStrength] = useState("");

  const [arrowColor, setArrowColor] = useState("black")

  const [backgroud1, setBackground1] = useState(null)
  const [backgroud2, setBackground2] = useState(null)
  const [backgroud3, setBackground3] = useState(null)
  const [backgroud4, setBackground4] = useState(null)

  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);


  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVDXWZ";
  const lowercaseLetters = uppercaseLetters.toLowerCase();
  const numbers = '1234567890';
  const symbols = '!@#$%^&/?';


  const array = [upper, lower, number, symbol];
  const filter = array.filter(e => e == true)
  
  const allLetters = () => {
    let allPasswordLetters = '';
    if (array[0]) {
      allPasswordLetters += uppercaseLetters
    }
    if (array[1]) {
      allPasswordLetters += lowercaseLetters
    }
    if (array[2]) {
      allPasswordLetters += numbers
    }
    if (array[3]) {
      allPasswordLetters += symbols
    }
    return allPasswordLetters;
  }

  const passwordGenerator = (allLetters) => {
    let password = '';
    for (let i = 0; i < charLength; i++){
      const randNum = Math.floor(Math.random() * allLetters.length);
      password += allLetters[randNum]
    }
    return password
  }








  return (
    <div className='container'>
      <span className='title'>Password Generator</span>
      <div className='display'>
        <div className='screen' style={{opacity: opacity}}>{password}</div>
        <div className='copy'>
          <span className='copy-text' style={{ display: copyPassword}}>COPIED</span>
          <svg className='copy-svg'
            onClick={() => {
              navigator.clipboard.writeText(password);
              setCopyPassword('flex')
              setTimeout(() => {
                setCopyPassword('none')
              }, 3000)

          }} width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
          </svg>
        </div>
      </div>

      <div className='generator'>
        <div className='charLength'>
          <h2 className='char'>Character Length</h2>
          <h2 className='length'>{charLength}</h2>
        </div>
        <div className='input-range'>
          <div className='input-second-color' style={{ width: `${charLength * 4.8}%` }}></div>
          <input className='range' type='range' min='0' max='20' step='1'
            value={charLength}
            onChange={e => setCharLength(e.target.value)} />
        </div>  
        <div className='form'>
          <div className='check'>
            <input onChange={() => {
              setUpper(!upper)
            }} type='checkbox' value='uppercase-letters'></input>
            <label htmlFor='uppercase-letters'>Include Uppercase Letters</label>
          </div>

          <div className='check'>
            <input onChange={() => {
              setLower(!lower)
            }} type='checkbox' value='lower-letters'></input>
            <label htmlFor='lower-letters'>Include Lowercase Letters</label>
          </div>

          <div className='check'>
            <input onChange={() => {
              setNumber(!number)
            }} type='checkbox' value='include-numbers'></input>
            <label htmlFor='include-numbers'>Include Numbers</label>
          </div>

          <div className='check'>
            <input onChange={() => {
              setSymbol(!symbol)
            }} type='checkbox' value='include-symbols'></input>
            <label htmlFor='include-symbols'>Include Symbols</label>
          </div>
        </div>

        <div className='strength'>
          <h2 className='strength-text'>STRENGTH</h2>
          <div className='strength-show'>
            <h2 className='strength-type'>{strength}</h2>
            <div className='boxes'>
              <div className='box' style={{ background: backgroud1 }}></div>
              <div className='box' style={{ background: backgroud2 }}></div>
              <div className='box' style={{ background: backgroud3 }}></div>
              <div className='box' style={{ background: backgroud4 }}></div>
            </div>
          
          </div>
        </div>
        <button
          onMouseEnter={() => {
            setArrowColor("#A4FFAF")
          }}
          onMouseOut={() => {
            setArrowColor("black")
          }}
          onClick={() => {
          if (charLength > 0 && filter.length > 0) {
            setOpacity(1)
            setPassword(passwordGenerator(allLetters()))
            if (charLength < 6) {
              setStrength("TOO WEAK!")
              setBackground1("#F64A4A")
              setBackground2("")
              setBackground3("")
              setBackground4("")

            } else if (charLength < 11) {
              setStrength("WEAK")
              setBackground1("#FB7C58")
              setBackground2("#FB7C58")
              setBackground3("")
              setBackground4("")

            } else if (charLength < 16) {
              setStrength("MEDIUM")
              setBackground1("#F8CD65")
              setBackground2("#F8CD65")
              setBackground3("#F8CD65")
              setBackground4("")
            } else {
              setStrength("STRONG")
              setBackground1("#A4FFAF")
              setBackground2("#A4FFAF")
              setBackground3("#A4FFAF")
              setBackground4("#A4FFAF")
            }
           
          }

          }} className='generate' type='button'>
          GENERATE
          <svg style={{fill: arrowColor}} className='arrow' width='11px' height='12px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
          
        
      </div>
    </div>
  );
}

export default App;
