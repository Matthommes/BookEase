 const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


export const validate = (data) => {
    if (!validateEmail(data)) { 
        return "Please enter a valid email address!"
    }
    return undefined;
}