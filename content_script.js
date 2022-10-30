if(typeof stickyBar == 'undefined'){
    const stickyBar = insertAfter('', $$('.container-right > div.page-content'));
    
    // Attach sticky toolbar to kite platform on page load
    if(stickyBar){
        stickyBar.id = 'prokite';
        stickyBar.innerHTML = `
        <ul>
            <!-- hide sidebar icon -->
            <li id="hideSidebarIcon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABUElEQVRoge2ZQU7DMBBFnxDqDYjgDixZUXacDQqH6gJFgECsaCUuQLrIIWgXGURETLHbjDNK50lWZDn2zJf97UQGx3EOjglwD6yAtfFSATPJucOdgQRTy21ISCWNl6HGSL4DaDPlZ2ZUksglpBPrKFNQdQ5CyCNQtuolYcOV3a752Sbki7j1nuqJAngCHhL7RZPD7AWwkHdetGJpCzkB3qX9AzjVivW7YReP/DV4eyYWUt+X6O23L48UwBw4B5bANVBHjLszWkvrjX5nIhhrNOdIGy2PaPijEyuHR2oaXyxpfDKn3yUWTCjn9numFSv3gfiqFUvzHGlT0OxkzylZ/5fv8ZYXtb61auAisU8S/mNlARdiDRdiDRdiDRdiDRdiDRdiDRdijVEKWclzOkQiiVzJM3j1NmOYC819yk1IyETEVImDDVE+RUTwetpxnBGzAf1MPZst8WLdAAAAAElFTkSuQmCC">
            </li>

            <!-- expand icon -->
            <li id="fullScreenIcon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABXUlEQVRoge2ZwW7CMAyGf+0dVsH7P8lWaQi2EzvwOHBgnUKWOLbruJnwJ1Vc4tZfg5rYAYIgeGquwmte8axZ8bw/vKxIIKV48xFI7S8A9hvm8grgjMaM1FgCvpPfyThBDlOWg1okfRveM5M/e4cVIqUbesiUJPK8WOQBnjI1iVJeTUoBHjKURC0vklpAT5mWBJVXFSqghwxHopWXKsBShivByUsVYCEjkeDm9cAM4J0xLl+wJIumJpablwrNzEhnwg2JzLASC+lf5USM+8S2+zcWE4AvAB/EmMPPmGElgiAI/h8T7p/eN2LMjME/v+mCeCTGnTDwgijZdmzZ0CDR7J3cZI64byVaeG/juXn9oimsNLtY6cx0L3XXbMUlMl2bDxb1BFemWzvIsijiyHRp0PWo7Foy5i3TnuUpJWPaxPaosWsyZscKno2Ckkwc9IzQsjE5euNecaobBEEg4gZzdCtYDNEjQQAAAABJRU5ErkJggg==">
            </li>
        </ul>`;
    }

    // Apply margin on bottom so that user can see the content behind toolbar
    $$('.container-right').style.marginBottom = "50px";

    //toggle full screen width
    const expandBtn = $('#fullScreenIcon');
    on('click', expandBtn, ()=>{
        if(expandBtn.classList.contains('active')){
            expandBtn.classList.remove('active');
            $$('#app div.wrapper', 1).forEach(e => {
                e.style = ''
            })
            $$('.container-right').style = '';
            return;
        }
    
        //apply
        expandBtn.classList.add('active');
        $$('#app div.wrapper', 1).forEach(e => {
            e.style.maxWidth = '100%'
        })
        $$('.container-right').style.maxWidth = '100%';
    })
    
    //toggle sidebar
    const sidebarBtn = $('#hideSidebarIcon');
    on('click', sidebarBtn, ()=>{
        if(sidebarBtn.classList.contains('active')){
            sidebarBtn.classList.remove('active');
            $$('.container-left').style = ''
            return;
        }
    
        //apply
        sidebarBtn.classList.add('active');
        $$('.container-left').style.cssText="position:fixed; display:none;"
    })

    // enable default toggles
    simulateClick('fullScreenIcon');
}