"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Cover } from "./ui/cover";

export function Contact() {
    const [loadingMessage, setLoadingMessage] = useState({
        loading: false,
        message: '',
        sucess: false,
    })
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!formData?.firstName || !formData?.lastName || !formData?.email || !formData?.message) {
                setLoadingMessage({
                    loading: false,
                    message: 'Please fill all fields!',
                    sucess: false,
                });
                return;
            }
            setLoadingMessage({
                loading: true,
                message: '',
                sucess: false,
            })

            const formatData = {
                name: `${formData?.firstName} ${formData?.lastName}`,
                email: formData?.email,
                message: formData?.message,
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formatData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const res = await response.json();

            if (res?.message) {
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                })

                setLoadingMessage({
                    loading: false,
                    message: res?.message,
                    sucess: true,
                });
            }
            else {
                setLoadingMessage({
                    loading: false,
                    message: "Failed to send message!",
                    sucess: false
                })
            }
        } catch (error) {
            setLoadingMessage({
                loading: false,
                message: "Failed to send message!",
                sucess: false,
            });

            console.log('Contact form error: ', error);
        }
    };
    return (
        (<div
            id="contact"
            className="max-w-[800px] backdrop-blur-[180x] bg-[#11121617] z-[20] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200">
                Do you have A Project, <Cover>Lets Discus</Cover>
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login to aceternity if you can because we don&apos;t have a login flow
                yet
            </p>
            {loadingMessage?.message && <p className={`mt-[20px] text-[0.9rem] ${loadingMessage?.sucess ? "text-grenn-400" : "text-red-400"}`}>* {loadingMessage?.message}</p>}
            <form className="my-8" onSubmit={handleSubmit}>
                <div
                    className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" name="firstName" value={formData?.firstName} onChange={handleChange} placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" name="lastName" value={formData?.lastName} onChange={handleChange} placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" value={formData?.email} onChange={handleChange} placeholder="example@gmail.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Enter Your Message</Label>
                    <textarea id="message" name="message" value={formData?.message} onChange={handleChange} placeholder="Write a Message..." className="p-[10px] rounded-[4px] outline-none border-none resize-none h-[140px] bg-zinc-800 text-white" />
                </LabelInputContainer>

                <button
                    className="bg-blue-900 relative group/btn block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit">
                    {!loadingMessage?.loading ? "Submit" : "..."}
                    <BottomGradient />
                </button>

                <div
                    className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
        </div >)
    );
}

const BottomGradient = () => {
    return (<>
        <span
            className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span
            className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>);
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        (<div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>)
    );
};
