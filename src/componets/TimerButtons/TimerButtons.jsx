import { useContext } from 'react'
import { SettingContext } from '../../context/SettingsContext'

import { Button } from '../Button/Button'


function TimerButtons () {
    const {executing, setCurrentTimer} = useContext(SettingContext)

    return(
        <ul className='labels'>
          <li>
            <Button 
              title="Work"
              activeClass={executing.active === 'work' && 'active-label'}
              _callback={() => setCurrentTimer('work')}
            />
          </li>
          <li>
            <Button 
              title="Short Break"
              activeClass={executing.active === 'short' && 'active-label'}
              _callback={() => setCurrentTimer('short')}
            />
          </li>
          <li>
            <Button 
              title="Long Break"
              activeClass={executing.active === 'long' && 'active-label'}
              _callback={() => setCurrentTimer('long')}
            />
          </li>
        </ul>
    )
}

export { TimerButtons }

