const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '', ...props}) => {
    const variantClass = variant === 'primary' ? 'login-button' : 'register-button';

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${variantClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;