import { onViewportVisibilityChange } from "./main.js";

export default function init()
{
    if(!document) throw "wrong context";

    Splitting();

    for(const animatedTitle of document.querySelectorAll('.animated-title'))
    {
        onViewportVisibilityChange(animatedTitle, (v) => v ? animateTitle(animatedTitle) : undefined);
    }

    for(const typeWriter of document.querySelectorAll('.type-writer'))
    {
        typeWriter.setAttribute('style', `--typewriterCharacters:${typeWriter.innerHTML.length}`);
        onViewportVisibilityChange(typeWriter, (v) => v ? animateTypeWriter(typeWriter) : undefined);
    }
}

function animateTitle(title)
{
    for(const char of title.querySelectorAll(".char"))
    {
        char.classList.remove("char");
        char.classList.add("not-char-i-wear");
    }

    setTimeout(() => 
    {
        for(const char of title.querySelectorAll(".not-char-i-wear"))
        {
            char.classList.remove("not-char-i-wear");
            char.classList.add("char");
        }
    }, 1);
}

function animateTypeWriter(typeWriter)
{
    typeWriter.classList.remove("type-writer");
    typeWriter.classList.add("not-type-writer");

    setTimeout(() => 
    {
        typeWriter.classList.remove("not-type-writer");
        typeWriter.classList.add("type-writer");
    }, 1);
}