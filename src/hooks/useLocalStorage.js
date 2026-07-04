import { useState } from "react"
export default function useLocalStorage() {
    const [user, setUserValue] = useState(() => getUser());
    function setUser(value) {
        //"user" is the key over here
        localStorage.setItem("user", value)
    }
    function getUser() {
        const user = localStorage.getItem("user")
        return user;
    }

    //we are returning user and setUser because these two are used by other applications (which in this case is Login.jsx)
    return [user, setUser];
}