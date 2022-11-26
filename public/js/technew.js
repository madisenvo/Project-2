const newFormHandler = async (event) => {
	event.preventDefault();

	const tech_title = document.querySelector('input[name="tech-post-title"]').value;
	const tech_text = document.querySelector('textarea[name="tech-post-body"]').value;


	await fetch("/api/techpost", {
		method: 'POST',
		body: JSON.stringify({
		tech_title,
		tech_text
		}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	
	document.location.replace('/technology');
};



document
.querySelector('#tech-post-form')
.addEventListener('submit', newFormHandler);