import './Button.css'

function Button ({title, activeClass, _callback}) {
    return (
        <button 
            className={activeClass}
            onClick={_callback}>
            {title}
        </button>
    )
}

export { Button }