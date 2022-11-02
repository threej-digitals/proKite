async function showOpenPositions() {
    try {
        const url = 'https://kite.zerodha.com/oms/portfolio/positions';
        const response = await ajax(url, prokiteGlobals.enctoken);
        console.log(response);
        if(response.status == 'success' && false){
            let orders = '';
            response.data.reverse().forEach(order => {
                orders += `
                <div>

                </div>
                `
            });
        }
        
    } catch (error) {
        
    }
}