'use client'
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";


export default function Navcomponent() {
    return (
        <div>
            <div className="flex justify-between w-full">
                <div>
                    <h1 className="text-3xl">My Account</h1>
                </div>
                <div>
                    <Button variant="secondary">
                        <LogOut className="mr-2" /> Log out
                    </Button>
                </div>
            </div>
            <div className="flex space-x-[90px] py-5 border-b border-gray-200 font-bold">
                <div className="text-gray-700 hover:text-blue-500 hover:underline cursor-pointer">
                    General
                </div>
                <div className="text-gray-700 hover:text-blue-500 hover:underline cursor-pointer">
                    Business Info
                </div>
                <div className="text-gray-700 hover:text-blue-500 hover:underline cursor-pointer">
                    Password & Security
                </div>
                <div className="text-gray-700 hover:text-blue-500 hover:underline cursor-pointer">
                    Branding
                </div>
            </div>
        </div>
    );
}
