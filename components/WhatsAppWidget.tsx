"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp, FaUsers, FaComments, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function WhatsAppWidget() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const widgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Slight delay before showing the widget for a smooth entrance
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Hide on specific administrative routes
    const hiddenRoutes = ["/dashboard/admin", "/store"];
    const isHiddenRoute = hiddenRoutes.some(route => pathname?.startsWith(route));

    if (isHiddenRoute || !isVisible) return null;

    return (
        <div 
            ref={widgetRef}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end animate-in fade-in slide-in-from-bottom-5 duration-700"
        >
            {/* Pop-up Dropdown Options */}
            {isOpen && (
                <div className="mb-3 w-72 rounded-2xl bg-white p-4 shadow-2xl border border-zinc-100 animate-in fade-in zoom-in-95 duration-200 origin-bottom-right">
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-3">
                        <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-[#25D366] animate-pulse"></div>
                            <span className="text-xs font-bold text-zinc-800 uppercase tracking-wider">WhatsApp Support</span>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-zinc-400 hover:text-zinc-600 p-1 rounded-full hover:bg-zinc-100 transition"
                            aria-label="Close menu"
                        >
                            <FaTimes className="h-3.5 w-3.5" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        {/* Option 1: Direct Support Chat */}
                        <Link 
                            href="https://wa.me/233597542788" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="group flex items-center gap-3 rounded-xl bg-[#25D366] p-3 text-white shadow-md transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-lg active:scale-[0.98]"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">
                                <FaComments className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold leading-tight">Chat Support</span>
                                <span className="text-[11px] opacity-90 leading-tight">Talk to us directly</span>
                            </div>
                        </Link>

                        {/* Option 2: WhatsApp Support */}
                        <Link 
                            href="https://wa.me/233597542788" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="group flex items-center gap-3 rounded-xl bg-emerald-50 p-3 text-emerald-900 border border-emerald-200/70 shadow-sm transition-all duration-200 hover:bg-emerald-100/80 hover:shadow-md active:scale-[0.98]"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white">
                                <FaUsers className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold leading-tight text-emerald-950">WhatsApp Customer Care</span>
                                <span className="text-[11px] text-emerald-700 leading-tight">Get fast assistance & updates</span>
                            </div>
                        </Link>
                    </div>
                </div>
            )}

            {/* Floating Main Button */}
            <button 
                onClick={() => setIsOpen(prev => !prev)}
                className="group relative flex md:h-[60px] md:w-[60px] h-[50px] w-[50px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
                aria-label="WhatsApp options"
            >
                {!isOpen && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30"></span>
                )}
                {isOpen ? (
                    <FaTimes className="relative z-10 h-6 w-6 text-white transition-transform duration-300 rotate-90" />
                ) : (
                    <FaWhatsapp className="relative z-10 h-7 w-7 transition-transform duration-300 group-hover:rotate-12" />
                )}
            </button>
        </div>
    );
}
