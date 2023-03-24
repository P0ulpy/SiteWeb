const config = {
    scrollChangeStateDistance : 50
};

export default function init()
{
    if(!document) throw "wrong context";

    const DOM = {
        navigationContainer: document.getElementById('navigation-container')
    };

    // lors ce que le scroll a atteint un certain point on change l'état de la navbar
    document.addEventListener('scroll', () => 
    {
        // cf : https://stackoverflow.com/questions/4096863/how-to-get-and-set-the-current-web-page-scroll-position#28488360
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop || 0;

        if(currentScroll > config.scrollChangeStateDistance)
        {
            DOM.navigationContainer.classList.add('body-mode');
        }
        else
        {
            DOM.navigationContainer.classList.remove('body-mode');
        }
    });
}