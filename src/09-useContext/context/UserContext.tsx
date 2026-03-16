import { useState, type PropsWithChildren, createContext, useEffect } from 'react';
import { users, type User } from "../data/user-mock.data";


// interface UserContextProps{
//     children:React.ReactNode;
// }

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

//estado y logica para leer los hijos
interface UserContextProps {
    //state
    authStatus: AuthStatus;
    user: User | null;
    isAuthenticated: boolean;

    //methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

//use context es muy parecido a use. El use es mas flexible y se usa mas
export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    const handlelogin = (userId: number) => {
        console.log({ userId });

        const user = users.find(user => user.id === userId);

        if (!user) {
            console.log(`USer not found ${userId}`);
            setUser(null)
            setAuthStatus('not-authenticated');
            return false;
        }

        setUser(user)
        setAuthStatus('authenticated');
        localStorage.setItem('userId', userId.toString());
        return true;
    }

    const handleLogout = () => {
        console.log('logout');
        setAuthStatus('not-authenticated');
        setUser(null);
        localStorage.removeItem('userId');
    }

    //efectos
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            handlelogin(+storedUserId);
            return;
        }
        handleLogout();

    }, []);

    //no se recomienda que devuelva html cuando hay children, solo logica y acciones
    return <UserContext value={{
        authStatus: authStatus,
        isAuthenticated: authStatus === 'authenticated',
        user: user,
        login: handlelogin,
        logout: handleLogout
    }}> {children}</UserContext>;
}
