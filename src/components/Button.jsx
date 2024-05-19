import PropTypes from 'prop-types'

function Button(props) {

    const classvariant = {
        orange: 'bg-BrightRed text-white rounded-full text-xs py-3 px-6 font-semibold shadow-xl shadow-BrightRed/30 hover:bg-[#fa9075] ',
        white: 'bg-white text-BrightRed rounded-full text-xs py-3 px-6 font-semibold hover:text-[#fa9075] ',
        submit: 'bg-BrightRed text-white rounded-full text-xs py-[.9rem] px-7 font-semibold hover:bg-[#fa9075] ',
    }

    return (
        <>
        <button
        aria-label={props.ariaLabel}
        onClick={props.handleClick} 
        className={`${classvariant[props.variant]}`}>
            {props.textButton}
        </button>
        </>
    )
}

Button.propTypes = {
    ariaLabel: PropTypes.string,
    handleClick: PropTypes.func,
    textButton: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['orange', 'white', 'submit']).isRequired,
}

export default Button
