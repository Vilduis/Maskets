import { useState, useCallback } from "react";

/**
 * Custom hook genérico para manejar formularios
 */
export const useForm = <T extends Record<string, string> = Record<string, string>>(
    initialValues: T
) => {
    const [formData, setFormData] = useState<T>(initialValues);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        },
        []
    );

    const reset = useCallback(() => {
        setFormData(initialValues);
    }, [initialValues]);

    const setField = useCallback((name: keyof T, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }, []);

    return {
        formData,
        handleChange,
        reset,
        setField,
        setFormData,
    };
};

