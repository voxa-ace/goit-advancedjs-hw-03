const apiKey = "live_nQdU30L5Pi3CRefNOxMdqR2hpDOu0bh6jtMVDgUqk1CW9D0NDZmBsQIS8vpnxulw";

export const fetchBreeds = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "x-api-key": apiKey
    }
  });
  if (!response.ok) {
    throw new Error("Error fetching breeds");
  }
  return await response.json();
};

export const fetchCatByBreed = async (breedId) => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
    headers: {
      "x-api-key": apiKey
    }
  });
  if (!response.ok) {
    throw new Error("Error fetching cat by breed");
  }
  return await response.json();
};
