import { useContext } from "react"
import { SettingContext } from "../../context/SettingsContext"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

function CountdownAnimation ({key = 1, timer = 20, animate = true, children}) {

    const {stopTimer} = useContext(SettingContext)

    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={ timer * 60}
            colors={['#AC2142', 0.33]}
            strokeWidth={6}
            trailColor="#346abe"
            onComplete={ () => {
                stopTimer()
            }}
            >
            {children}
        </CountdownCircleTimer>
    )
}

export { CountdownAnimation }