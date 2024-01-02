import logo from './logo.svg';
import './App.css';
import Label from './Components/Label';
import VariableChanger from './Components/VariableComponent';
import Clock from './Components/Clock';
import ControlsGroup from './Components/ControlsGroup';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    const [breakT, setBreakT] = useState(5);
    const [session, setSession] = useState(25);
    const [activateClock, setActivateClock] = useState(false);
    const [min, setMin] = useState(session);
    const [sec, setSec] = useState(0);
    const [clockState, setClockState] = useState('Session');
    const audio = document.getElementById('beep');
    useEffect(() => {
      let intTick;
      if (activateClock) {
        intTick = setInterval(() => {
          setSec((prevSec) => {
            if (prevSec > 0) {
              return prevSec - 1;
            } else {
              if (min > 0) {
                setMin((prevMin) => prevMin - 1);
                return 59;
              } 
            }
          });
        }, 1000);
      }

      return () => {
        clearInterval(intTick);
      };
    }, [activateClock]);
    if(min === 0 && sec === 0) {
      setActivateClock(false);
      console.log('her')
      if(clockState === "Session") {
        setClockState("Break");
        setMin(breakT);
      }
      else {
        setClockState("Session");
        setMin(session);
      }

      setSec(0);
      audio.play();
      setActivateClock(true);
    }

    function resume(){
      setActivateClock(!activateClock);
    }

    function pause(){
      setActivateClock(!activateClock);
    }

    function reset(){
      setMin(25);
      setClockState("Session");
      setSec(0);
      setSession(25);
      setBreakT(5);
      setActivateClock(false);
    }

    function changeInitSession(incdec){
      if(session>1 && session<60){
        setSession(session+incdec);
        setMin(session+incdec);
      }
      else if(session === 1 && incdec>0) {
        setSession(session+incdec);
        setMin(session+incdec);
      }
      else if(session === 60 && incdec<0) {
        setSession(session+incdec);
        setMin(session+incdec);        
      }
    }
    function changeInitBreak(incdec){
      if(breakT>1 && breakT<=60){
        setBreakT(breakT+incdec);
      }      
      else if(breakT === 1 && incdec>0) {
        setSession(breakT+incdec);
        setMin(breakT+incdec);
      }
      else if(breakT === 60 && incdec<0) {
        setSession(breakT+incdec);
        setMin(breakT+incdec);        
      }
    }

    return (
      <div className='main-content'>
        <Label text="Pomodoro Clock"/>
        <div className='variable-changer'>
          <VariableChanger text="Choose Break" variable={breakT} changeValue={changeInitBreak} idLabel="break-label" idInc="break-increment"  idDecr="break-decrement" idLen="break-length"/>
          <VariableChanger text="Choose Session" variable={session} changeValue={changeInitSession} idLabel="session-label" idInc="session-increment"  idDecr="session-decrement"  idLen="session-length"/>   
        </div>
        <Clock min={min} sec={sec} clockState={clockState} idLabel="timer-label"/>
        <ControlsGroup resume={resume} pause={pause} reset={reset}/>
      </div>
    );
}

export default App;
