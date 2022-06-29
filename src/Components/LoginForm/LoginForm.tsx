import React from "react";
// import validate from './LoginFormValidation';


// interface InitType {
//     email: string;
//     password: string;
// }
const useForm = (callback: any, initialState = {} ) =>{
    const [values, setValues] = React.useState(initialState)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback(); //triggering the call back
    };

    return {
        handleChange,
        handleSubmit,
        values
    }
}


const LoginForm = () => {
    // our initial state
    const initialState = {
        email: "",
        password: "",
    };

    const {handleChange, handleSubmit, values } = useForm(loginUserCallback, initialState) 
    
    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send 'values' to the database
        console.log(values)
    }

    console.log(values)
    return (
        <div className="login-item3">
            <div className="login-item3-container">
                <div className="login-item3-welcome">
                    <span className="login-item3-welcome-title">Welcome!</span>
                </div>
                <div className="login-item3-welcome">
                    <span className="login-item3-welcome-details">
                        Enter details to login
                    </span>
                </div>
                <div className="login-item3-welcome">
                    <div className="login-item3-welcome-form">
                        <form onSubmit={handleSubmit} >
                            <label>
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Password
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <div className="login-item3-welcome-form-forgotpassword">
                                <span className="">
                                    <a href="http://fretzcastano.com">forgot Password</a>
                                </span>
                            </div>
                            <div className="login-item3-welcome-form-button">
                                <button type="submit">LOG IN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
