import { use, type Usable, useEffect } from 'react'
import { type User } from './api/get-user.action'


// const userPromise = getUserAction(1); hay que mandarle algo usable

interface Props {
    getUser: Usable<User>;
}

export const ClientInformation = ({ getUser }: Props) => {

    const user = use(getUser);

    //! los useEffect no se puede usar async await con lo que usamos .then
    // useEffect(() => {
    //     getUserAction(id)
    //         .then(user => console.log(user))
    // }, [id])

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h2 className="text-4xl font-thin text-white">{user.name} - #{user.id}</h2>

            <p className="text-white text-2xl">{user.location}</p>
            <p className="text-white text-xl">{user.role}</p>
        </div>
    )
}
