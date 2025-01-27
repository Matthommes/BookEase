 const validate = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


export const validateEmail = (data) => {
    if (!validate(data)) { 
        return "Please enter a valid email address!"
    }
    return undefined;
}