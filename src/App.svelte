<script>
	import { onMount } from "svelte"; //depois de salvar o codigo sera executado
	import { EthService } from './services/eth';
	import { GasService } from './services/gas';
  	import { writable } from "svelte/store";
    import { btcService } from "./services/btc";

	let ethPrice = $state(writable(''));
	let btcPrice = $state(writable(''));
	let gasEstimate = $state(writable(''));
	let resultFormated = $state(0);

	let src = '/public/refresh.png';
	let name = 'refresh'

	onMount(async () => {
		const output = await EthService.Prices()
		ethPrice.set(output)
	})


	function formatNumber(value){
		const FormatedValue = parseFloat(value).toFixed(2)
		return FormatedValue
	}

</script>


<div class = button id=confirm>
	<button onclick={async () => {
		const output = await GasService.Gas();
		gasEstimate.set(output);
	}}>GAS ESTIMATE <img {src} alt="{name}"/></button>
	<h1>
		{parseInt($gasEstimate)}s
	</h1>
</div>

<div class = button id=price>
	<button onclick={async () => {
		const output = await EthService.Prices();
		ethPrice.set(output);
		console.log($ethPrice);
	}}>PREÇO ETH <img {src} alt="{name}"/></button>
	<h1>
		USD {formatNumber({$ethPrice})};
	</h1>
</div>
<div class = button id=priceBtc>
	<button onclick={async () => {
		const output = await btcService.btc();
		btcPrice.set(output);
	}}>PREÇO BTC <img {src} alt="{name}"/></button>
	<h1>
		USD {parseFloat($btcPrice).toFixed(2)}
	</h1>
</div>




<style>
	h1{
		text-align: left;
	}
	div.button{
		margin-left: -300px;
		margin-top: 20px;
	}
	img{
		width: 25px;
		margin-left: 20px;
	}
	button{
		color: black;
		font-family: 'Atkinson Hyperlegible', sans-serif;
	}
</style>