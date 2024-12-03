'use client'
import Image from 'next/image';

export default function Appearancecomponent() {
    return (
        <div className='mt-5'>
            <div>
                <div>Appearance</div>
                <div className="flex space-x-[30px] mt-3 mb-5">
                    <div className="items-center justify-center text-center">
                        <Image
                            className="dark:invert w-40 h-35"
                            src="/dashLight.png"
                            alt="Next.js logo"
                            width={1500}
                            height={700}
                            priority
                        />
                        <p>light</p>
                    </div>
                    <div className="items-center justify-center text-center">
                        <Image
                            className="dark:invert w-40 h-20"
                            src="/dashBlack.jpg"
                            alt="Next.js logo"
                            width={312}
                            height={162}
                            priority
                        />
                        <p>black</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 w-[1005px]">

</div>
        </div>
    );
}
