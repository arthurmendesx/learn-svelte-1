<script>
	import { onMount } from "svelte"; //depois de salvar o codigo sera executado
	import { EthService } from './services/eth';
	import { GasService } from './services/gas';
  	import { writable } from "svelte/store";

	let dados = $state(writable(''));

	onMount(async () => {
		const output = await EthService.Prices()
		dados.set(output)
		console.log(output)
	})

</script>

<div class = price>
	<h1>{parseFloat($dados).toFixed(2)}</h1>
</div>

<div class = button>
	<button onclick={async () => {
		const output = await GasService.Gas();
		dados.set(output);
	}}>TEMPO CONIRMAÇÃO</button>
	<h1>{parseInt($dados)}s</h1>
</div>

<div class = button>
	<button onclick={async () => {
		const output = await EthService.Prices();
		dados.set(output);
	}}>PREÇO</button>
	<h1>{parseFloat($dados).toFixed(2)}</h1>
</div>

<style>
	div.price{
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