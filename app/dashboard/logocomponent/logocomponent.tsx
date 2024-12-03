'use client'
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import Image from 'next/image';

export default function Logocomponent() {
    return (
        <div >
            <div className="mt-5 mb-5">
                Logo
            </div>
            <div className="flex font-bold ">
                <div>
                    <div>Dark Theme</div>
                    <div className="flex mt-5 mb-5 ">
                        <div>
                            <Image
                                className="dark:invert rounded-full w-16 h-16"
                                src="/photo.jpg"
                                alt="Next.js logo"
                                width={1024}
                                height={1024}
                                priority
                            />
                        </div>
                        <div className="ml-[3rem]">
                            <div>Up to 10MB, at least 500*500px</div>
                            <div className="flex">
                                <Button variant="secondary">
                                    <Upload className="mr-2" /> Upload
                                </Button>
                                <Button variant="secondary" className="ml-[2rem] text-red-500 font-bold w-[150px]">
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-[12rem]">
                    <div>Light Theme</div>
                    <div className="flex py-5">
                        <div>
                            <Image
                                className="dark:invert rounded-full w-16 h-16"
                                src="/photo.jpg"
                                alt="Next.js logo"
                                width={1024}
                                height={1024}
                                priority
                            />
                        </div>
                        <div className="ml-[3rem]">
                            <div>Up to 10MB, at least 500*500px</div>
                            <div className="flex">
                                <Button variant="secondary">
                                    <Upload className="mr-2" /> Upload
                                </Button>
                                <Button variant="secondary" className="ml-[2rem] text-red-500 font-bold w-[150px]">
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 w-[1005px] mt-5">

            </div>
        </div>
    );
}
