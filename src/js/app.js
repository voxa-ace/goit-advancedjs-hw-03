import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const breedSelect = document.getElementById('breed-select');
  const loader = document.querySelector('.loader');
  const errorElem = document.querySelector('.error');
  const catInfo = document.querySelector('.cat-info');
  const catImage = document.getElementById('cat-image');
  const catName = document.getElementById('cat-name');
  const catDescription = document.getElementById('cat-description');
  const catTemperament = document.getElementById('cat-temperament');

  const showLoader = () => {
    loader.classList.add('show');
  };

  const hideLoader = () => {
    loader.classList.remove('show');
  };

  const showError = (message) => {
    errorElem.style.display = 'block';
    iziToast.error({ title: 'Error', message: message });
  };

  const hideError = () => {
    errorElem.style.display = 'none';
  };

  const loadBreeds = async () => {
    showLoader();
    try {
      const breeds = await fetchBreeds();
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });
      new SlimSelect({
        select: '#breed-select'
      });
    } catch (error) {
      showError('Failed to fetch breeds');
    } finally {
      hideLoader();
    }
  };

  const handleBreedChange = async (e) => {
    const breedId = e.target.value;
    if (!breedId) return;
    
    showLoader();
    hideError();
    try {
      const catData = await fetchCatByBreed(breedId);
      const cat = catData[0];
      catImage.src = cat.url;
      catName.textContent = cat.breeds[0].name;
      catDescription.textContent = cat.breeds[0].description;
      catTemperament.textContent = cat.breeds[0].temperament;
      catInfo.style.display = 'block';
    } catch (error) {
      showError('Failed to fetch cat information');
    } finally {
      hideLoader();
    }
  };

  breedSelect.addEventListener('change', handleBreedChange);

  await loadBreeds();
});
