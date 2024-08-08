import { useContext } from 'react';
import { SetPomodoro } from '../SetPomodoro/SetPomodoro';
import { SettingContext } from '../../context/SettingsContext';

import './App.css';
import { Button } from '../Button/Button';
import { TimerButtons } from '../TimerButtons/TimerButtons';
import { CountdownAnimation } from '../CountdownAnimation/CountdownAnimation';

function App() {
  const {
    pomodoro, 
    SettingBtn, 
    children, 
    startAnimate, 
    startTimer, 
    pauseTimer
  } = useContext(SettingContext);

  return (
    <div className='App_container'>
      <h1>Pomodoro ‧₊˚❀༉‧₊˚</h1>
      <small>Be productive the right way</small>
      
      {pomodoro === 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <TimerButtons />
          
          <Button title="Settings" _callback={SettingBtn} />
          
          <div className='time-container'>
            <div className='time-wrapper'>
              <CountdownAnimation
                keyProp={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>

          <div className='button-wrapper'>
            <Button 
              title="Start" 
              activeClass={!startAnimate ? 'active' : undefined} 
              _callback={startTimer} 
            />
            <Button 
              title="Pause" 
              activeClass={startAnimate ? 'active' : undefined} 
              _callback={pauseTimer} 
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
