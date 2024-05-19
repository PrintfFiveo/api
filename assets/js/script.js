const generateButton = document.getElementById('generateButton');
const genreDisplay = document.getElementById('genreDisplay');


generateButton.addEventListener('click', async () => {
  try {
    const response = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/'); 
    const data = await response.json();
    console.log(data);
    genreDisplay.textContent = data.genre; 

  } catch (error) {
    console.error('Erro no fetch:', error);
    genreDisplay.textContent = 'Erro no Fetch'; 
  }
});