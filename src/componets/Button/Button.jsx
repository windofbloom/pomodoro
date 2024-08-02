import './Button.css'

function Button ({title, activeClass, _callback}) {
    return (
        <div className='button_container'>
            <button 
                className={activeClass}
                onClick={_callback}>
                {title}
            </button>
        </div>
    )
}

export { Button }