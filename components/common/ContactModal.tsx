"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { HiArrowRight } from "react-icons/hi2";
import { FaUser, FaEnvelope, FaPhoneAlt, FaSpa, FaRegCommentDots, FaCheckCircle } from "react-icons/fa";
import site from "@/data/index";

interface ContactModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
    const data = site.contactModal;
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", service: "", message: "" });
            onOpenChange(false);
        }, 2200);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[95vw] sm:max-w-[490px] p-6 sm:p-8">
                {/* Header container */}
                <DialogHeader className="text-center space-y-1.5 pr-6">
                    <DialogTitle className="font-serif text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">
                        {data.title}{" "}
                        <span className="bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] bg-clip-text text-transparent">
                            {data.titleHighlight}
                        </span>
                    </DialogTitle>
                    <DialogDescription className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                        {data.description}
                    </DialogDescription>
                </DialogHeader>

                {submitted ? (
                    /* Success message */
                    <div className="py-8 flex flex-col items-center text-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-rose-50 border border-[#C46D77] flex items-center justify-center text-[#C46D77] text-2xl shadow-sm">
                            <FaCheckCircle />
                        </div>
                        <h4 className="font-serif text-xl font-bold text-gray-900">
                            {data.success?.title || "Thank You!"}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 max-w-xs">
                            {data.success?.message || "Your appointment request has been received. Our team will contact you shortly."}
                        </p>
                    </div>
                ) : (
                    /* Form container */
                    <form onSubmit={handleSubmit} className="space-y-3.5 mt-2">
                        {/* Input fields */}
                        <div className="relative">
                            <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#C46D77] transition-colors bg-white shadow-xs"
                            />
                        </div>

                        <div className="relative">
                            <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#C46D77] transition-colors bg-white shadow-xs"
                            />
                        </div>

                        <div className="relative">
                            <FaPhoneAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#C46D77] transition-colors bg-white shadow-xs"
                            />
                        </div>

                        <div className="relative">
                            <FaSpa className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
                            <select
                                name="service"
                                required
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#C46D77] transition-colors bg-white shadow-xs appearance-none cursor-pointer"
                            >
                                <option value="" disabled>Select Treatment</option>
                                <option value="Hair Styling">Hair Styling & Colour</option>
                                <option value="Skin Care">Skin & Facial Treatments</option>
                                <option value="Bridal Makeup">Bridal & Party Makeup</option>
                                <option value="Nail Art">Nail Care & Extensions</option>
                                <option value="Body Spa">Body Spa & Relaxation</option>
                                <option value="General Consultation">General Consultation</option>
                            </select>
                        </div>

                        <div className="relative">
                            <FaRegCommentDots className="absolute left-3.5 top-3 text-gray-400 text-xs" />
                            <textarea
                                name="message"
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message or Preferred Time"
                                className="w-full pl-9 pr-3.5 py-2 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#C46D77] transition-colors bg-white shadow-xs resize-none"
                            />
                        </div>

                        {/* Submit button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="group w-full py-3 px-5 rounded-lg bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-[#C46D77]/25 transition-all cursor-pointer"
                            >
                                <span>{data.submitButton?.text || "Confirm Appointment"}</span>
                                <HiArrowRight className="text-base transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}
