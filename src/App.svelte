<script>
	import { onMount } from "svelte"; //depois de salvar o codigo sera executado


		let API_KEY = "4XZWI58MTIY12417FGW5JZ5CHU5K5K33ZT";

		const etherscan = `https://api.etherscan.io/v2/api?chainid=1&action=ethprice&module=&apikey=${API_KEY}`;

		let ethPriceUSD = null;

	async function apiEth(){
		try{
			const resposta = await fetch(etherscan)

			if(!resposta.ok){
				throw new Error (`${resposta.status}`)
			}

			const dados = await resposta.json();
			console.log(dados);

			ethPriceUSD = dados.result.ethusd;
			console.log(ethPriceUSD);

		} catch(erro) {
			console.error(erro);
			return null
		}
	}
onMount(() => {
        apiEth();
    });

</script>
