import { useState } from "react";
import {toast} from "react-toastify";
import { useAuthGlobalContext } from "../context/AuthContext";
import axios from "axios";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthGlobalContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await axios.post("/api/auth/logout", {
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.data;
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.removeItem("chat-user");
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};
export default useLogout;