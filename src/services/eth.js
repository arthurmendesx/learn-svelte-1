const API_KEY = '4XZWI58MTIY12417FGW5JZ5CHU5K5K33ZT';
const URL_BASE = `https://api.etherscan.io/v2/api?chainid=1&apikey=${API_KEY}`;

export class EthService {

    static async Prices() {
		try{
			const resposta = await fetch(`${URL_BASE}&action=ethprice&module=stats`)
			if(!resposta.ok) {
				throw new Error (`${resposta.status}`)
			}
			const dados = await resposta.json();
            return dados.result.ethusd;
		} catch(erro) {
			console.error(erro);
			return null
		}
	}
}