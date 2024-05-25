import { useState } from "react";
import Button from "./Button";

function Form() {
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        let validEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/g;

        if (email === '' || !email.match(validEmail)) {
            setErrorMsg(true);
        } else {
            alert('Thanks for subscribing');
            setErrorMsg(false);
            setEmail('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} aria-describedby="email-error" className="flex items-start gap-x-1" >
                <div className="w-full">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Updates in your inbox…"
                        className={`
                            ${errorMsg ? 'border-2 border-red-400' : 'border-2 border-VeryDarkBlue'} 
                            py-2.5 px-4 rounded-full w-full text-sm placeholder-gray-400`
                        }
                        required
                        aria-invalid={errorMsg ? "true" : "false"}
                        aria-describedby="email-error"
                    />
                    {errorMsg &&
                        <p id="email-error" role="alert" className="text-red-500 text-xs italic text-left py-1" >
                            Please insert a valid email
                        </p>
                    }
                </div>
                <Button 
                    variant="submit" 
                    ariaLabel="Click to subscribe to Manage"
                    textButton="GO" 
                />
            </form>
        </>
    );
}

export default Form;
