import { FooterLinks, SocialLink } from "@/types";
import {
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon,
} from "lucide-react";

export const footerLinks: FooterLinks = {
    empresa: [
        { label: "Nosotros", href: "/us" },
        { label: "Proyectos", href: "/projects" },
        { label: "Contacto", href: "/contact" },
    ],
    servicios: [
        { label: "Sistemas", href: "/services" },
        { label: "Tiendas online", href: "/services" },
        { label: "Páginas web", href: "/services" },
    ],
};

export const socialLinks: SocialLink[] = [
    { icon: FacebookIcon, href: "#", label: "Facebook" },
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: YoutubeIcon, href: "#", label: "Youtube" },
];

