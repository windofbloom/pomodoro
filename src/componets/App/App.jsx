import { useContext } from 'react'
import { SetPomodoro } from '../SetPomodoro/SetPomodoro'
import { SettingContext } from '../../context/SettingsContext'

import './App.css'
import { Button } from '../Button/Button'
import { TimerButtons } from '../TimerButtons/TimerButtons'

function App() {
  const {pomodoro, executing, setCurrentTimer, SettingBtn} = useContext(SettingContext)

  return (
    <div className='App_container'>
      <h1>Pomodoro ‧₊˚❀༉‧₊˚</h1>
      <small>Be productive the right way</small>
        {pomodoro !== 0 ? 
        <SetPomodoro /> :
        <>
        <TimerButtons />
        <Button 
          title="Settings" _callback={SettingBtn}
        />
        </>
        }
    </div>
  )
}

export default App
