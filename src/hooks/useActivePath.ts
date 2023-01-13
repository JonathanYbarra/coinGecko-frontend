import { useLocation } from 'react-router-dom';

export const useActivePath = () => {
    const location = useLocation();

    const activeColorItem = (to: string) => {
        return { color: location.pathname.slice(1) === to ? "primary" : "inherit" }
    }

    return {
        activeColorItem
    }
}
