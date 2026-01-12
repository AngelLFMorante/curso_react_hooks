

export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}

export const getUserAction = async (id: number) => {
    await new Promise((res) => setTimeout(res, 2000));

    return {
        id: id,
        name: 'Angel Fm',
        location: 'Ottawa, Canada',
        role: 'Instructor de tiro'
    };
}


