/*
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cravencoin%2Ctether&vs_currencies=gbp&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=false')
.then(data => {
return data.json();
})
    .then(post => {
        let = TotalCostBTC = (gbp_24h_change) => {
            if (post.bitcoin.gbp_24h_change > 0) {
                document.getElementById('btc-24hr').classList.add('green')
                document.getElementById('btc-price').classList.add('green')
                return gbp_24h_change;
            }
            else if (post.bitcoin.gbp_24h_change < 0) {
                document.getElementById('btc-24hr').classList.add('red')
                document.getElementById('btc-price').classList.add('red')
                return gbp_24h_change;
            }
            else (gbp_24h_change)
        };

        let = TotalCostETH = (gbp_24h_change) => {
            if (post.ethereum.gbp_24h_change > 0) {
                document.getElementById('eth-24hr').classList.add('green')
                document.getElementById('eth-price').classList.add('green')
                return gbp_24h_change;
            }
            else if (post.ethereum.gbp_24h_change < 0) {
                document.getElementById('eth-24hr').classList.add('red')
                document.getElementById('eth-price').classList.add('red')
                return gbp_24h_change;
            }
            else (gbp_24h_change)
        };

        let = TotalCostDOGE = (gbp_24h_change) => {
            if (post.dogecoin.gbp_24h_change > 0) {
                document.getElementById('doge-24hr').classList.add('green')
                document.getElementById('doge-price').classList.add('green')
                return gbp_24h_change;
            }
            else if (post.dogecoin.gbp_24h_change < 0) {
                document.getElementById('doge-24hr').classList.add('red')
                document.getElementById('doge-price').classList.add('red')
                return gbp_24h_change;
            }
            else (gbp_24h_change)
        };

        let = TotalCostRVN = (gbp_24h_change) => {
            if (post.ravencoin.gbp_24h_change > 0) {
                document.getElementById('rvn-24hr').classList.add('green')
                document.getElementById('rvn-price').classList.add('green')
                return gbp_24h_change;
            }
            else if (post.ravencoin.gbp_24h_change < 0) {
                document.getElementById('rvn-24hr').classList.add('red')
                document.getElementById('rvn-price').classList.add('red')
                return gbp_24h_change;
            }
            else (gbp_24h_change)
        };

        let = TotalCostTether = (gbp_24h_change) => {
            if (post.tether.gbp_24h_change > 0) {
                document.getElementById('tether-24hr').classList.add('green')
                document.getElementById('tether-price').classList.add('green')
                return gbp_24h_change;
            }
            else if (post.tether.gbp_24h_change < 0) {
                document.getElementById('tether-24hr').classList.add('red')
                document.getElementById('tether-price').classList.add('red')
                return gbp_24h_change;
            }
            else (gbp_24h_change)
        };

        //BTC
        document.getElementById("btc-price").innerHTML = '<div class="coingeckoBlockPrice">' + ' £' + post.bitcoin.gbp.toFixed(2)
        document.getElementById("btc-24hr").innerHTML = '<div class="coingeckoBlock24">' + TotalCostBTC(post.bitcoin.gbp_24h_change.toFixed(2)) + '% in last 24 hours'

        //ETH
        document.getElementById("eth-price").innerHTML = '<div class="coingeckoBlockPrice">' + ' £' + post.ethereum.gbp.toFixed(2)
        document.getElementById("eth-24hr").innerHTML = '<div class="coingeckoBlock24">' + TotalCostETH(post.ethereum.gbp_24h_change.toFixed(2)) + '% in last 24 hours'

        //ETH
        document.getElementById("doge-price").innerHTML = '<div class="coingeckoBlockPrice">' + ' £' + post.dogecoin.gbp.toFixed(2)
        document.getElementById("doge-24hr").innerHTML = '<div class="coingeckoBlock24">' + TotalCostDOGE(post.dogecoin.gbp_24h_change.toFixed(2)) + '% in last 24 hours'

        //RVN
        document.getElementById("rvn-price").innerHTML = '<div class="coingeckoBlockPrice">' + ' £' + post.ravencoin.gbp.toFixed(6)
        document.getElementById("rvn-24hr").innerHTML = '<div class="coingeckoBlock24">' + TotalCostRVN(post.ravencoin.gbp_24h_change.toFixed(2)) + '% in last 24 hours'

        //TETHER
        document.getElementById("tether-price").innerHTML = '<div class="coingeckoBlockPrice">' + ' £' + post.tether.gbp.toFixed(6)
        document.getElementById("tether-24hr").innerHTML = '<div class="coingeckoBlock24">' + TotalCostTether(post.tether.gbp_24h_change.toFixed(2)) + '% in last 24 hours'
    });

*/