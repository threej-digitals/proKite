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
            onclick="
            window.postMessage({
                type: 'FROM_PAGE',
                alert: {
                    type: document.querySelector('#prokite-popup select').value,
                    previousData: document.querySelector('#prokite-popup input[name=previousData]').value,
                    timeframe: document.querySelector('#prokite-popup input[name=timeframe]').value
                },
                chartId: ${chartId}
            }); document.getElementById('prokite-popup').style.display = 'none'"
            style="background:royalblue;"
        >Create Alert</button>
    </div>`;

    const activeAlertHtml = `
    <h3>Alert is active! refresh the page to reset the alert.</h3>`
    showPopup('Create alert', prokiteGlobals.alert.active ? activeAlertHtml : html);
}

// listen to messages coming from webpage
window.addEventListener("message", async (event) => {
    // We only accept messages from ourselves
    if (event.source != window) {
        return;
    }

    if (event.data.type && (event.data.type == "FROM_PAGE") && event.data.alert) {
        if (event.data.alert.type === 'ema') {
            prokiteGlobals.alert.active = true;
            return alertEMA(event.data);
        }
    }
}, false);

function alertEMA(edata) {
    // insert sound link
    const alertSound = insertAfter('', $$('body'));
    alertSound.innerHTML = `<a id="prokite-alert" href="https://soc.threej.in/beep.mp3" style="display:none;" target="_blank">`;
    
    setTimeout(async () => {
        const date = new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2);
        const url = `https://kite.zerodha.com/oms/instruments/historical/${edata.chartId}/${edata.alert.timeframe || 5}minute?user_id=${prokiteGlobals.userId}&oi=1&from=${date}&to=${date}`;
        const result = await ajax(url, prokiteGlobals.enctoken)

        if(result.data){
            //calculate ema
            ema = (result.data.candles[result.data.candles.length - 2][1] * 0.333) + (edata.alert.previousData * 0.667);
            edata.alert.previousData = ema;

            if(result.data.candles[result.data.candles.length - 1][3] > ema){
                $('#prokite-alert').click();
                alert('5EMA alert triggered');
            }
        }
        alertEMA(edata);
    }, 240000);
}