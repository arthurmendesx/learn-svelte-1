<script>
	import { onMount } from "svelte"; //depois de salvar o codigo sera executado
	import { EthService } from './services/eth';
	import { GasService } from './services/gas';
  	import { writable } from "svelte/store";
    import { btcService } from "./services/btc";

	let dados = $state(writable(''));

	onMount(async () => {
		const output = await EthService.Prices()
		dados.set(output)
		console.log(output)
	})

</script>





<div class = result>
	<h1>{parseFloat($dados).toFixed(2)}</h1>
</div>

<div class = button id=confirm>
	<button onclick={async () => {
		const output = await GasService.Gas();
		dados.set(output);
	}}>TEMPO CONIRMAÇÃO</button>
	<h1>
		{parseInt($dados)}s
	</h1>
</div>

<div class = button id=price>
	<button onclick={async () => {
		const output = await EthService.Prices();
		dados.set(output);
	}}>PREÇO ETH</button>
	<h1>
		{parseFloat($dados).toFixed(2)}
	</h1>
</div>
<div class = button id=priceBtc>
	<button onclick={async () => {
		const output = await btcService.btc();
		dados.set(output);
	}}>PREÇO BTC</button>
	<h1>
		{parseFloat($dados).toFixed(2)}
	</h1>
</div>





<style>
	div.result{
		text-align: center;
	}
	h1{
		text-align: left;
	}
	div.button{
		margin-left: -300px;
		margin-top: 20px;
	}
</style>