const h2Valor = document.getElementById('h2Valor');
const consult = document.getElementById('consult');

//Lógica

const api = axios.create({
    baseURL: 'https://www.mercadobitcoin.net/api/BTC/ticker/'
});

async function consultabit(){
    const response = await api.get();
    console.log(response.data.ticker.high);
    lblBTC.innerHTML = response.data.ticker.high;
}

consult.onclick = ()=>{
    consultabit();
};