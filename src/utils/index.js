import toast from "react-hot-toast";

export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) return JSON.parse(favorites);
  return [];
};

export const addFavorite = (phone) => {
  // console.log(phone);

  const favorites = getFavorites();

  const isExist = favorites.find((p) => p.id === phone.id);
  if (isExist) return toast.error("phone already in favorites");
  favorites.push(phone);
  console.log(favorites);
  toast.success("Added to favorites");

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const removeFavorite = (id) => {
  const favorites = getFavorites();

  const remainingFavorites = favorites.filter((phone) => phone.id !== id);

  localStorage.setItem("favorites", JSON.stringify(remainingFavorites));
  toast.success("Successfully removed from favorites");
};

export const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) return JSON.parse(cart);
  return [];
};

export const addToCart = (phone) => {
  // console.log(phone);

  const cart = getCart();

  const isExist = cart.find((p) => p.id === phone.id);
  if (isExist) return toast.error("phone already in cart");
  cart.push(phone);
  console.log(cart);
  toast.success("Added to favorites");

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCart = (id) => {
  const cart = getCart();

  const remainingCart = cart.filter((phone) => phone.id !== id);
  localStorage.setItem("cart", JSON.stringify(remainingCart));
};
