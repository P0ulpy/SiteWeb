import navInit from "./nav.js";
import headerInit from "./header.js";
import contentInit from "./content.js";

export default function init()
{
    navInit();
    headerInit();
    contentInit();
}

// cf : https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport

export function isInViewport(element)
{
    const rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export function onViewportVisibilityChange(element, cb = (visible = false) => {})
{
    let old_visible = true;

    function handler() 
    {
        const visible = isInViewport(element);

        if (visible != old_visible) 
        {
            old_visible = visible;
            if (typeof cb == 'function') 
            {
                cb(visible);
            }
        }
    }

    document.addEventListener('DOMContentLoaded', handler);
    document.addEventListener('load', handler);
    document.addEventListener('scroll', handler);
    document.addEventListener('resize', handler);
}