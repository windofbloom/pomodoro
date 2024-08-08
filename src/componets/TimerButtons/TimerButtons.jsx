import { useContext, useEffect } from 'react'
import { SettingContext } from '../../context/SettingsContext'

import { Button } from '../Button/Button'
import './TimerButtons.css'


function TimerButtons () {
    const {
      executing, 
      setCurrentTimer, 
      startAnimate, 
      updateExecute} = useContext(SettingContext)
      
    useEffect(() => {updateExecute(executing)}, [executing, startAnimate])

    return(
        <div className='TimerButtons_container'>
            <ul className="labels">
          <li>
            <Button 
              title="Work" 
              activeClass={executing.active === 'work' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('work')} 
            />
          </li>
          <li>
            <Button 
              title="Short Break" 
              activeClass={executing.active === 'short' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('short')} 
            />
          </li>
          <li>
            <Button 
              title="Long Break" 
              activeClass={executing.active === 'long' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('long')} 
            />
          </li>
        </ul>
        </div>
    )
}

export { TimerButtons }

