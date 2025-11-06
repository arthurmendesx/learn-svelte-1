import { get } from "svelte/store";

const API_KEY = 't-690bed5bf5251f03ed8e855a-d411999beeb04ee384659a5c';
const URL_BASE = `https://api.tatum.io/v4/data/rate/symbol?symbol=BTC&basePair=USD`;


export class btcService {
    
    static async btc() {
		try{
			const resposta = await fetch(`${URL_BASE}`,{
				headers: {'x-api-key': `${API_KEY}`}
			})
			if(!resposta.ok) {
				throw new Error (`${resposta.status}`)
			}
			const dados = await resposta.json();
            return dados.value;
		} catch(erro) {
			console.error(erro);
			return null
		}
	}
}