const Input = ({ id ,type = 'text', placeholder, value, onChange, required = false }) => {
    return (
        <input
            id={id}
            type={type}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />
    );
};

export default Input;