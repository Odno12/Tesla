document.lastScrollPosition = 0;
document.lastCentered = 0;
document.ownWayto = null;

document.addEventListener(type, 'scroll', listener, () => {
    const direction = window.pageXOffset - document.LastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll(Selectors, 'section')];

if (document.onWayTo === null){
    const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered +1
    if (destIndex >= 0 && destIndex < sections.length) {
        console.log({destIndex, direction});
        document.onWayTo =destIndex;
        window.scroll(x,0, sections[destIndex].pageXOffset);
    }
}



    sections.forEach((section,index : number) => {
        if (window.pageYOffset ===section.offsettop)
        {
            document.lastCentered = index;
            section.className = 'active';
            if (document.ownWayto === index) {
                document.onWayto = null;
            }
        } else {
            section.className = ' ';
        }
    })

    document.lastScrollPosition = window.pageXOffset;
})