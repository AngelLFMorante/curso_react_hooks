import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner';

export const LoginPage = () => {

    const { login } = useContext(UserContext);

    const [userId, setUserId] = useState('');

    //navegacion manual
    const navigation = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const result = login(+userId);

        if (!result) {
            toast.error('Usuario no encontrado');
            return;
        }

        navigation('/profile');

        console.log({ result });
        console.log(userId);

    }

    return (
        <div className='flex flex-col items-center min-h-screen'>
            <h1 className='text-4xl font bold'>Iniciar sesión</h1>
            <hr />

            <form className='flex flex-col gap-2 my-10' onSubmit={handleSubmit}>
                <Input type="number" placeholder='Id del usuario' value={userId} onChange={event => setUserId(event.target.value)} />
                <Button type="submit">Login</Button>
            </form>

            <Link to="/about">
                <Button variant="ghost" >Volver a la página principal</Button>
            </Link>

        </div>
    )
}
