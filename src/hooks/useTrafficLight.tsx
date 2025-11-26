import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
};

type TrafficLightColors = keyof typeof colors;

export const useTrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColors>('red');

    const [countdown, setCountdown] = useState(5);

    //los efectos hay que tener mucho cuidado podmeos crear fugas de memorias
    useEffect(() => {
        if (countdown === 0) return;

        const intervalId = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }

    }, [countdown]);

    //Change light color effect -> es mejor tener dos efectos por separado y tenga una tarea especifica.
    useEffect(() => {
        if (countdown > 0) return;

        setCountdown(5);

        if (light === 'red') {
            setLight('green');
            return;
        }
        if (light === 'yellow') {
            setLight('red');
            return;
        }
        if (light === 'green') {
            setLight('yellow');
            return;
        }

    }, [countdown, light]);

    return {
        //props
        countdown,
        light,
        colors,

        //computed
        percentage: (countdown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
        //methods

    };
};
