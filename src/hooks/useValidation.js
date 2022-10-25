import { useState, useEffect } from 'react'

const usePasswordValidation = (password) => {
    const [atLeastEight, setAtLeastEight] = useState(false)
    const [uppercase, setUppercase] = useState(false)
    const [lowercase, setLowercase] = useState(false)
    const [specialCharacter, setSpecialCharacter] = useState(false)

    useEffect(() => {
        (/.{8,}/.test(password)) ? setAtLeastEight(true) : setAtLeastEight(false);
        (/(?=.*?[A-Z])/.test(password)) ? setUppercase(true) : setUppercase(false);
        (/(?=.*?[a-z])/.test(password)) ? setLowercase(true) : setLowercase(false);
        (/(?=.*?[#?!@$%^&*-])/.test(password)) ? setSpecialCharacter(true) : setSpecialCharacter(false);

        return () => {
            setAtLeastEight(false)
            setUppercase(false)
            setLowercase(false)
            setSpecialCharacter(false)
        }
    }, [password])

    const output = [atLeastEight, uppercase, lowercase, specialCharacter]
    const isValid = output.every((item) => item === true)
    
    return { atLeastEight, uppercase, lowercase, specialCharacter, isValid }
}

export default usePasswordValidation