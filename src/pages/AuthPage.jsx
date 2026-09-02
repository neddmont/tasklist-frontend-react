import {Link} from 'react-router-dom'
const authPage = () => {

    return (
       <div className="auth-page-wrapper">
            <h1 class="title-wrapper">
                Welcome to <span class="highlight">TaskList</span> APP
            </h1>
            <div className="container">
                <div className="form-container">
                    <Link to="/login" className="login-button" target="_blank" rel="noopener noreferrer">
                        Login
                    </Link>
                    <Link to="/register" className="register-button" target="_blank" rel="noopener noreferrer" >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default authPage