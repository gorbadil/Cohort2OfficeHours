import './App.css'
import B2 from "../public/rings/B2.mp3"
import C2 from "../public/rings/C2.mp3"
import G2 from "../public/rings/G2.mp3"
import E2 from "../public/rings/E2.mp3"
import { useState } from 'react'
import { useEffect } from 'react'

const boardItem = [
  {id:1, name: "green", sound: B2},
  {id:2, name: "blue", sound: C2},
  {id:3, name: "yellow", sound: G2},
  {id:4, name: "red", sound: E2}
]

function sleep (ms=500) {
  return new Promise(res => setTimeout(res, ms))
}

function App() {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [compArr, setCompArr] = useState([]);
  const [userArr, setUserArr] = useState([]);
  const [turn, setTurn] = useState(true)

  const handleStart = () => {
    setIsPlaying(true);
    setCompArr([]);
    setUserArr([]);
    setScore(0);
    setTimeout(() => {
      computerTurn();
    }, 1000)
  }

  const computerTurn = () => {
    const random = Math.floor(Math.random() * 4) + 1; // 0 < random < 1
    setCompArr(prev => [...prev, random]); // 0,999999999999
  }

  useEffect(() => {
    const animateCompArr = async () => {
      for(let i = 0; i < compArr.length; i++){
        const pad = document.getElementById(compArr[i]);
        pad?.classList.add("active");
        const sound = new Audio(boardItem[compArr[i] - 1].sound)
        sound.play();
        await sleep()
        pad?.classList.remove("active");
        await sleep()
      }
      if(compArr.length !==0) {
        setTurn(!turn)
      }
    }
    animateCompArr();
  }, [compArr])

  const handleUserClick = async (e) => {
    const id = parseInt(e.target.id);
    setUserArr(prev => [...prev, id]);
    const pad = document.getElementById(id);
    pad.classList.add("active");
    const sound = new Audio(boardItem[id - 1].sound)
    sound.play();
    await sleep();
    pad.classList.remove("active")
  }

  useEffect(() => {
    if(userArr.length === 0) return
    if(userArr.length === compArr.length) {
      if (JSON.stringify(userArr) === JSON.stringify(compArr)){ // userArr === compArr
        setScore(prev => prev + 1);
        setUserArr([]);
        setTimeout(() => {
            computerTurn();
        }, 1000)
        setTurn(!turn)
      } else {
        setIsPlaying(false)
      }
    }
  }, [userArr])

  return (
    <div className='App'>
        <h2>Score: {score}</h2>
        {isPlaying && <p> {turn ? "Simon" : "You"} </p>}
        {!isPlaying && (
          <div className="start">
            <h2>Simon Game</h2>
            <div className="startBtn" onClick={handleStart} >Start Game</div>
          </div>
        )}
        {isPlaying && (
          <div className="board">
            <div className="pads">
              {boardItem.map(item => (
                <div
                key={item.name}
                id={item.id}
                className={`pad ${item.name}`}
                onClick={handleUserClick}
                ></div>
              ))}
            </div>
          </div>
        )}
    </div>
  )
}

export default App
