import { useState, useCallback } from "react";

/**
 * Custom hook para manejar el estado del menú móvil
 */
export const useMobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    const open = useCallback(() => {
        setIsOpen(true);
    }, []);

    return {
        isOpen,
        toggle,
        close,
        open,
    };
};

