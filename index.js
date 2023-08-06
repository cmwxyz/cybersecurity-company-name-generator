const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'ã‚¢ã‚¡ã‚«ã‚µã‚¿ãƒŠãƒãƒžãƒ¤ãƒ£ãƒ©ãƒ¯ã‚¬ã‚¶ãƒ€ãƒãƒ‘ã‚¤ã‚£ã‚­ã‚·ãƒãƒ‹ãƒ’ãƒŸãƒªãƒ°ã‚®ã‚¸ãƒ‚ãƒ“ãƒ”ã‚¦ã‚¥ã‚¯ã‚¹ãƒ„ãƒŒãƒ•ãƒ ãƒ¦ãƒ¥ãƒ«ã‚°ã‚ºãƒ–ãƒ…ãƒ—ã‚¨ã‚§ã‚±ã‚»ãƒ†ãƒãƒ˜ãƒ¡ãƒ¬ãƒ±ã‚²ã‚¼ãƒ‡ãƒ™ãƒšã‚ªã‚©ã‚³ã‚½ãƒˆãƒŽãƒ›ãƒ¢ãƒ¨ãƒ§ãƒ­ãƒ²ã‚´ã‚¾ãƒ‰ãƒœãƒãƒ´ãƒƒãƒ³';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);