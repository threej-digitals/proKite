var prokiteGlobals = {}


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

        // Insert alert audio
        const bellSound = insertAfter('', $$('body>div'));
        if (bellSound) {
            bellSound.id = "prokite-alert";
            bellSound.innerHTML = '<audio src="beep.mp3"/>'
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
                    return showPopup('Alert', '<h3 class="red">No instruments found! Please select a chart before setting an alarm.</h3>');
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
        console.error(error.message);
    }

}

async function getCandles(instrument, timeframe) {

    try {
        const date = new Date().getFullYear() + '-' + ((new Date().getMonth()) + 1) + '-' + new Date().getDate();
        const url = `https://kite.zerodha.com/oms/instruments/historical/${instrument}/${timeframe}minute?user_id=${prokiteGlobals.userId}&oi=1&from=${date}&to=${date}`;

        let headersList = {
            "Accept": "*/*",
            "Authorization": "enctoken lucLE/etIve3IYxI6naGaFixW61tUhhqrLt4/LNu3ovpgzqFhiF+NE6kn0KlKcFU1XM6fYybw4XL5sipr9nBDpJtulXNWU6BsyJU+3oFwUeWEJHy1AYExw=="
        }

        let response = await fetch(url, {
            method: "GET",
            headers: headersList
        });

        if(response.status == 200){
            response = await response.text();
            try {
                return JSON.parse(response);
            } catch (e) {
                return response;
            }
        }
        return false;
    } catch (error) {
        console.error(error.message);
    }
}

function showPopup(title, content) {
    $$('#prokite-popup header>span').innerText = title;
    $$('#prokite-popup .content').innerHTML = content;
    $$('#prokite-popup').style.display = 'block';
}

function showAlertsWindow(chartId) {
    const html = `
    <div>
        <select
            name="alertType"
            style="padding: 10px;display: block;margin-bottom: 15px;width: 100%;background: inherit;color:inherit;border:1px solid;"
        >
            <option value="ema">Previous candle low above 5 EMA</option>
        </select>

        <label For="previousData">Previous candles EMA</label>
        <input type="number" name="previousData" />
        <br><br>
        <label For="timeframe">Timeframe</label>
        <input type="number" name="timeframe" />
        <br><br>
        <button
            onclick="window.postMessage({
                type: 'FROM_PAGE',
                alert: {
                    type: document.querySelector('#prokite-popup select').value,
                    previousData: document.querySelector('#prokite-popup input[name=previousData]').value,
                    timeframe: document.querySelector('#prokite-popup input[name=timeframe]').value
                },
                chartId: ${chartId}
            })"
            style="background:royalblue;"
        >Create Alert</button>
    </div>`;
    showPopup('Create alert', html);
}

// listen to messages coming from webpage
window.addEventListener("message", async (event) => {
    // We only accept messages from ourselves
    if (event.source != window) {
        return;
    }

    if (event.data.type && (event.data.type == "FROM_PAGE") && event.data.alert) {
        if (event.data.alert.type === 'ema') {
            return alertEMA(event.data);
        }
    }
}, false);

function alertEMA(edata) {
    setTimeout(async () => {
        const result = await getCandles(edata.chartId, edata.alert.timeframe || 5)

        if(result.data){
            //calculate ema
            console.log(result.data);
            ema = (result.data.candles[result.data.candles.length - 2] * 0.333) + (edata.alert.previousData * 0.667);
            console.log(ema);
            console.log(result.data.candles[result.data.candles.length - 2]);

            if(result.data.candles[result.data.candles.limit - 1] > ema){
                
                $$('#prokite-alert audio').play();
            }
        }
        alertEMA(edata);
    }, 60000);
}