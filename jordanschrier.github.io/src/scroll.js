/*
 * Helper function that scrolls to the top when each page is loaded instead
 *  of preserving the scroll position from the home page.
 * Special thanks to Saeed Rohani on Stack Overflow: 
 * https://stackoverflow.com/a/61602724
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Scroll() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}