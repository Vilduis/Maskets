/**
 * Custom hook para generar URLs de WhatsApp
 */
export const useWhatsApp = () => {
    // Número de WhatsApp (puedes cambiarlo o usar una variable de entorno)
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890";
    const defaultMessage =
        "Hola, me gustaría obtener más información sobre sus servicios.";

    const generateWhatsAppUrl = (message?: string): string => {
        const encodedMessage = encodeURIComponent(message || defaultMessage);
        const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
        return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    };

    return {
        whatsappNumber,
        generateWhatsAppUrl,
    };
};

