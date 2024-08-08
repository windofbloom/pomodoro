import { createContext, useState } from "react"

export const SettingContext = createContext()

function SettingContextProvider (props) {

    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)


    //Animation
    function startTimer() {
        setStartAnimate(true)
    }

    function pauseTimer() {
        setStartAnimate(false)
    }

    function stopTimer() {
        setStartAnimate(false)
    }

    //Update Execute
    const SettingBtn = () => {
        setExecuting({})
        setPomodoro(0)
    }

    function setCurrentTimer(active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    //Fuction that determinates brakes
    const setTimerTime = evaluate => {
        switch (evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work)
                break;
            
            case 'short':
                setPomodoro(evaluate.short)
                break;

            case 'long':
                setPomodoro(evaluate.long)
                break;
            
            default:
                setPomodoro(0)
                break;
        }
    }

    const children = ({ remaindingTimer }) => {
        const minutes = Math.floor(remaindingTimer / 60)
        const seconds = remaindingTimer % 60

        return `${minutes}:${seconds}`
    }

    return (
        <SettingContext.Provider 
        value={{
            stopTimer, 
            updateExecute,
            pomodoro,
            executing,
            startAnimate,
            startTimer,
            pauseTimer,
            SettingBtn,
            setCurrentTimer,
            updateExecute,
            children
            }}>
            {props.children}
        </SettingContext.Provider>

    )
}

export { SettingContextProvider }