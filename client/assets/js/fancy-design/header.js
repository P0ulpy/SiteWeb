import { onViewportVisibilityChange } from "./main.js";

const config = {
    easeSpeed: 1.7
};

export default function init()
{
    if(!document) throw "wrong context";

    $(document).ready(() => 
    {
        $(".cool-title").lettering();

        for(const coolTitle of document.querySelectorAll('.cool-title-container'))
        {
            animateHeaderText(coolTitle);
            onViewportVisibilityChange(coolTitle, (v) => v ? animateHeaderText(coolTitle) : undefined);
        }
    });
}

function animateHeaderText(coolTitle)
{
    const title = new TimelineMax();

    title.staggerFromTo(
        coolTitle.querySelectorAll("span"), 
        0.5, 
        { ease: Back.easeOut.config(config.easeSpeed), opacity: 0, bottom: -80 },
        { ease: Back.easeOut.config(config.easeSpeed), opacity: 1, bottom: 0 },
        0.05
    );
}