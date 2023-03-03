<script>
import {onMount} from 'svelte'
let innerHeight
let homeOpen = true
onMount(() => {
  innerHeight = window.innerHeight
})
function changePage() {
  homeOpen = false
}
let phrasesEnded = false
const phrases = ["Feliz aniversário, Vico!", "Gosto muito de ti.", "O melhor que aconteceu foi a gente voltar a se falar mais depois do ano novo.", "Tudo de bom mesmo pra ti.", "Beijão querido lindo!"]
let phraseIndex = 0
function nextPhrase() {
  if (phraseIndex < phrases.length - 1) {
    phraseIndex++
  } else {
    phrasesEnded = true
  }
}
</script>

{#if homeOpen }
<div style="height: {innerHeight}px" class="bg-blue-200 flex flex-col">
  <header class="bg-blue-500 px-3 py-3 text-white">Banco Oficial do Brasil</header>
  <main class="flex-1 flex flex-col justify-center px-3 gap-10">
    <h1 class="text-4xl text-center">Parabéns, você ganhou um IPhone 14!!!</h1>
    <img src="https://imgs.extra.com.br/1517609673/1xg.jpg?imwidth=292" class="h-40" alt="iphone">
    <button on:click="{changePage}" class="text-white bg-green-500 py-3 text-lg rounded-md">Resgatar recompensa</button>
  </main>
</div>
{:else}
  <div on:click="{nextPhrase}" style="height: {innerHeight}px" class="h-full bg-ranpo bg-cover flex flex-col justify-center">
  <div class="bg-white text-center px-1 py-4">
  {#if !phrasesEnded}
  <h1 class="{phraseIndex === 0 ? "text-3xl" : "text-2xl"} mb-4">{phrases[phraseIndex]}</h1>
  <p>Clica em qualquer lugar</p>
  {:else}
  <h1 class="text-2xl mb-4">Separei um vídeo especialmente pra ti</h1>
  <a rel="noreferrer" class="text-white bg-green-500 py-2 px-6 rounded-md" target="_blank" href="https://youtu.be/dQw4w9WgXcQ">Ir para o vídeo</a>
  {/if}
  </div>
  </div>
{/if}