"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import ContactModal from "./ContactModal";

interface ContactModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

// Modal context
const ContactModalContext = createContext<ContactModalContextType>({
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
});

export const useContactModal = () => useContext(ContactModalContext);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // Global click
    useEffect(() => {
        const handleGlobalClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('[data-open-modal="contact"]');
            if (target) {
                e.preventDefault();
                setIsOpen(true);
            }
        };

        window.addEventListener("click", handleGlobalClick);
        return () => window.removeEventListener("click", handleGlobalClick);
    }, []);

    return (
        <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
            <ContactModal open={isOpen} onOpenChange={setIsOpen} />
        </ContactModalContext.Provider>
    );
}
