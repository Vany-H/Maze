const textArea = document.querySelector('.text-area');
const interfaceBtn = document.querySelector('.interface-btn');

console.log(textArea);

interfaceBtn.addEventListener('click', (e) => {
	document.body.innerHTML += `<script>${textArea.value}</script>`;
});
