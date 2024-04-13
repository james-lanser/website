const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
	image.addEventListener('click', e => {
		lightbox.classList.add('active')
		const img = document.createElement('img')
		img.src = image.src
		img.style.height = '70%'
		img.style.width = 'auto'
		while (lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild)
		}
		lightbox.appendChild(img)
	})
})

lightbox.addEventListener('click', e => {
	if (e.target !== e.currentTarget) return
		lightbox.classList.remove('active')
})





/*
const docs = document.querySelectorAll('iframe')
docs.forEach(doc => {
	doc.addEventListener('click', e => {
		lightbox.classList.add('active')
		const iframe = document.createElement('iframe')
		iframe.src = doc.src
		iframe.style.height = '70%'
		iframe.style.width = 'auto'
		while (lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild)
		}
		lightbox.appendChild(iframe)
	})
})

lightbox.addEventListener('click', e => {
	if (e.target !== e.currentTarget) return
		lightbox.classList.remove('active')
})
*/



