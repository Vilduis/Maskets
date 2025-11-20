import { Service } from "@/types";
import { Boxes, ShoppingBag, FileCode } from "lucide-react";

export const services: Service[] = [
    {
        icon: Boxes,
        title: "Sistemas",
        description: "Website & Mobile App",
        brief:
            "Automatización de procesos y gestión de datos para optimizar tu negocio",
        features: [
            "Automatización de procesos",
            "Gestión de datos y usuarios",
            "Paneles de control personalizados",
            "Flujos de trabajo eficientes",
            "Integraciones simples",
        ],
        highlight: "Website & Mobile App",
    },
    {
        icon: ShoppingBag,
        title: "Tiendas online",
        description: "Web + Mobile Ready",
        brief:
            "E-commerce completo con métodos de pago integrados y gestión de productos",
        features: [
            "Diseño fácil de navegar",
            "Catálogo y carrito funcional",
            "Métodos de pago integrados",
            "Seguimiento de pedidos",
            "Admin de productos y stock",
        ],
        highlight: "Web + Mobile Ready",
    },
    {
        icon: FileCode,
        title: "Páginas web",
        description: "Web profesional + adaptable",
        brief: "Diseño responsive y optimizado para destacar tu marca en internet",
        features: [
            "Diseño responsive",
            "Optimización SEO básica",
            "Integración con formularios",
            "Contenido editable",
            "Navegación clara y directa",
        ],
        highlight: "Web profesional + adaptable",
    },
];

