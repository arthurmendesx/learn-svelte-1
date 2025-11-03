<script>
	import { slide } from 'svelte/transition'

	let { todo, toggleTodo, updateTodo, removeTodo } = $props()
</script>

<li transition:slide>
	<input
		type="checkbox"
		checked={todo.completed}
		onchange={() => toggleTodo(todo)}
	/>
	<input
		type="text"
		value={todo.text}
		oninput={(e) => updateTodo({ ...todo, text: e.currentTarget.value })}
	/>
	<button onclick={() => removeTodo(todo)}>🗙</button>
</li>
