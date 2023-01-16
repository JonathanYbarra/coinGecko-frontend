import { useState, useEffect } from 'react';

export const useIsPositive = (number: number) => {
    const [isPositive, setIsPositive] = useState<boolean>(false);
    const [color, setColor] = useState<string>("success");

    useEffect(() => {
        setIsPositive(number > 0)
    }, [number]);

    useEffect(() => {
        setColor(isPositive ? "success" : "warning");
    }, [isPositive])

    return { isPositive, color }
}
