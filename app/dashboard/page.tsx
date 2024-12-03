'use client'

import Navcomponent from "./navcomponent/navcomponent";
import Logocomponent from './logocomponent/logocomponent';
import Appearancecomponent from "./appearancecomponent/appearancecomponent";
import Colorthemecomponent from "./colorthemecomponent/colorthemecomponent";

export default function Page() {
    return (
        <div>
            <Navcomponent/>
            <Logocomponent/>
            <Appearancecomponent/>
            <Colorthemecomponent/>
        </div>
    );
}