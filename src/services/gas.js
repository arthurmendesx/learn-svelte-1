const API_KEY = '4XZWI58MTIY12417FGW5JZ5CHU5K5K33ZT';
const URL_BASE = `https://api.etherscan.io/v2/api?chainid=1&apikey=${API_KEY}`;


export class GasService {
    
    static async Gas() {
		try{
			const resposta = await fetch(`${URL_BASE}&module=gastracker&action=gasestimate&gasprice=2000000000`)
			if(!resposta.ok) {
				throw new Error (`${resposta.status}`)
			}
			const dados = await resposta.json();
            return dados.result;
		} catch(erro) {
			console.error(erro);
			return null
		}
	}
}