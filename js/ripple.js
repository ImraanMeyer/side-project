var rippleBtns = document.querySelectorAll('.navbar-is-success');

rippleBtns.forEach(rippleBtn => {
	rippleBtn.addEventListener('click', e => {
		if (!rippleBtn.classList.contains('rippling')) {
			rippleBtn.classList.add('rippling');
			rippleBtn.addEventListener('animationend', e => {
				rippleBtn.classList.add('fade');
				rippleBtn.classList.remove('rippling');
				setTimeout(() => {
					rippleBtn.classList.remove('fade');
				}, 300);
			});
		}
	});
});
