var prokiteGlobals = {
    alert : { active: false }
}


if (typeof stickyBar == 'undefined') {
    try {

        // Attach sticky toolbar to bottom of kite website
        const stickyBar = insertAfter('', $$('.container-right > div.page-content'));
        if (stickyBar) {
            stickyBar.id = 'prokite';
            stickyBar.innerHTML = `
            <ul>
                <!-- hide sidebar icon -->
                <li id="hideSidebarIcon" title="Hide sidebar">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABUElEQVRoge2ZQU7DMBBFnxDqDYjgDixZUXacDQqH6gJFgECsaCUuQLrIIWgXGURETLHbjDNK50lWZDn2zJf97UQGx3EOjglwD6yAtfFSATPJucOdgQRTy21ISCWNl6HGSL4DaDPlZ2ZUksglpBPrKFNQdQ5CyCNQtuolYcOV3a752Sbki7j1nuqJAngCHhL7RZPD7AWwkHdetGJpCzkB3qX9AzjVivW7YReP/DV4eyYWUt+X6O23L48UwBw4B5bANVBHjLszWkvrjX5nIhhrNOdIGy2PaPijEyuHR2oaXyxpfDKn3yUWTCjn9numFSv3gfiqFUvzHGlT0OxkzylZ/5fv8ZYXtb61auAisU8S/mNlARdiDRdiDRdiDRdiDRdiDRdiDRdijVEKWclzOkQiiVzJM3j1NmOYC819yk1IyETEVImDDVE+RUTwetpxnBGzAf1MPZst8WLdAAAAAElFTkSuQmCC">
                </li>

                <!-- Positions -->
                <li id="openPositions" title="Open positions">
                    <span style="font-weight: 800;font-size: 20px;">OP</span>
                </li>

                <!-- alarm icon -->
                <li id="prokiteAlarmIcon" title="Create an alert">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACR0lEQVRYhe2WP2tUQRTFf1q4rq64D6y0EoSN38EYNImgRUpbCZoUdgFRI/4JfgwLP4AICqk0QmJhRC2NuNlIQBG0EQ1R1iauxZzLjuN78/4khUgOXOa9O/eeOTPz5s6DbfyDqAE3gA7QBd4Bt4E9JTjqwAywIo6O3utFBn8K9FLsYgkB5zM4FvNEXFPgR2AUN+sh4JL6E2AceAi0ge+yNvBAfYlip4CT4hgG3ot7JibgjYJOB/46MA18y5iZb1+Bq8DugGNE/SsxAWsKSjzfQeCVN8Aj4ALQAvbKBuR77MW9VK6hIX83JmBJQWe8wT/I1waOxZKFQcX2lGsiRuXrxJKnFXQFt+w283mgmRJvsw3RBBbU9wK3HVN6vxUTUAMmAjFvMwaPCQC3jcvehMCdjtyjaMn2wcWWPSYA3AmyDzOJxP2FcfofXAx5AgDmFHMurXNnRtKY2ns55EVgHGPRqAC2d62cuCIrMED/FBXGupIaGQOGFoOd//W0zqwt2ErYGL/KCPik9lDg35FhMVgh+lxGwJLawRzyIjiu9nUZAbNqz26BAOOYjUYFaOKKR4/NrYIVoi/A/rLJVorbZJfiGBLcxdMDLlfIpwY8F8EC5UppQv8yWgR2VREAcBjYENEybknzMER/5hviqIybHpEVnTlgEjiKKzINPU8CT7w4y7ledfAW8BNXQIZx/4v2xxSzNdwv2Yhyu8CRKgLmRXjH8+3DzfQ+sAr8kK3KN8Gf5fsuxW7VVJwCnlHyHg9wQBwnNsGxjf8cvwFC0buPe9c4fQAAAABJRU5ErkJggg==">
                </li>

                <!-- expand icon -->
                <li id="fullScreenIcon" title="Enable full screen width">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABXUlEQVRoge2ZwW7CMAyGf+0dVsH7P8lWaQi2EzvwOHBgnUKWOLbruJnwJ1Vc4tZfg5rYAYIgeGquwmte8axZ8bw/vKxIIKV48xFI7S8A9hvm8grgjMaM1FgCvpPfyThBDlOWg1okfRveM5M/e4cVIqUbesiUJPK8WOQBnjI1iVJeTUoBHjKURC0vklpAT5mWBJVXFSqghwxHopWXKsBShivByUsVYCEjkeDm9cAM4J0xLl+wJIumJpablwrNzEhnwg2JzLASC+lf5USM+8S2+zcWE4AvAB/EmMPPmGElgiAI/h8T7p/eN2LMjME/v+mCeCTGnTDwgijZdmzZ0CDR7J3cZI64byVaeG/juXn9oimsNLtY6cx0L3XXbMUlMl2bDxb1BFemWzvIsijiyHRp0PWo7Foy5i3TnuUpJWPaxPaosWsyZscKno2Ckkwc9IzQsjE5euNecaobBEEg4gZzdCtYDNEjQQAAAABJRU5ErkJggg==">
                </li>
            </ul>`;

            // Apply margin on bottom so that user can see the content behind toolbar
            $$('.container-right').style.marginBottom = "50px";
        }

        // Insert popup window
        const popupWindow = insertAfter('', $$('body>div'));
        if (popupWindow) {
            popupWindow.id = "prokite-popup";
            popupWindow.innerHTML = `
                <header>
                    <span></span>
                    <span 
                        onclick="this.parentNode.parentNode.style.display = 'none'"
                        style="float: right;padding: 2px;cursor:pointer;"
                    >X</span>
                </header>
                <div class="content"></div>`;
        }

        // ------------ Attach Events ----------------//

        // toggle sidebar
        const sidebarBtn = $('#hideSidebarIcon');
        on('click', sidebarBtn, () => {
            if (sidebarBtn.classList.contains('active')) {
                sidebarBtn.classList.remove('active');
                $$('.container-left').style = ''
                return;
            }

            //apply
            sidebarBtn.classList.add('active');
            $$('.container-left').style.cssText = "position:fixed; display:none;"
        })

        const openPos = $('#openPositions');
        on('click', openPos, async () => {
            if (openPos.classList.contains('active')) {
                openPos.classList.remove('active');
                hide($('#prokite-popup'))
                return;
            }

            //apply
            openPos.classList.add('active');
            showPopup('Open Positions', await showOpenPositions())
        });

        // set alarm
        const alarmBtn = $('#prokiteAlarmIcon');
        on('click', alarmBtn, () => {
            try {
                let url = document.querySelector('iframe').src;
                if (url) {
                    let chartId = decodeURI(url).split('#')[1].split('&')[0].split('%3A')[2];
                    showAlertsWindow(chartId);
                }
            } catch (error) {
                if (error.message.indexOf("reading 'src'")) {
                    return showPopup('Alert', '<h3>No instruments found! Please select a chart before setting an alarm.</h3>');
                }
                console.error(error.message);
            }
        })

        // toggle full screen width
        const expandBtn = $('#fullScreenIcon');
        on('click', expandBtn, () => {
            if (expandBtn.classList.contains('active')) {
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

        // enable default toggles
        simulateClick('fullScreenIcon');

        // get session token and userid from cookies
        document.cookie.split('; ').forEach(e => {
            if (/enctoken=.*/.test(e)) {
                prokiteGlobals.enctoken = e.slice(9);
            }
            if (/user_id=.*/.test(e)) {
                prokiteGlobals.userId = e.split('=')[1];
            }
        });
    } catch (error) {
        if(error.message.indexOf("reading 'parentNode'") < 0)
            console.error(error.message);
    }

}

function showPopup(title, content) {
    $$('#prokite-popup header>span').innerText = title;
    $$('#prokite-popup .content').innerHTML = content;
    $$('#prokite-popup').style.display = 'block';
}