import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from './ui/MySubtitle';

//si la function la saco fuera no re-renderiza acordarse. si no usar el useCallback

export const MemoHook = () => {

    const [title, setTitle] = useState('Hola');
    const [subTitle, setSubTitle] = useState('Mundo');

    //evitamos que se re-renderice
    const handleMyAPICall = useCallback(() => {
        console.log('Llamar a mi API - ', subTitle)
    }, [subTitle]);


    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoApp</h1>

            <MyTitle title={title} />
            <MySubtitle subtitle={subTitle} callMyAPI={handleMyAPICall} />


            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle('Hello')}>
                Cambia titulo
            </button>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setSubTitle('World')}>
                Cambiar subtitulo
            </button>
        </div>
    )
}