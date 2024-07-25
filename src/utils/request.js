import axios from "axios";
const request = axios.create({
  baseURL: "https://dummyjson.com/",
});

async function login(username, password) {
  const response = await request.post("auth/login", {
    username,
    password,
  });
  return response.data;
}

async function fetchProducts(limit = 0, skip = 0, select = []) {
  const queryParams = {
    limit: limit,
    skip: skip,
    select: select.length > 0 ? select.join(",") : undefined,
  };
  const response = await request.get("products", { params: queryParams });
  return response.data;
}

async function fetchProductById(id) {
  const response = await request.get(`products/${id}`);
  return response.data;
}

async function searchProducts(query) {
  const response = await request.get("products/search", {
    params: { q: query },
  });
  return response.data;
}

async function getCategories() {
  const response = await request.get("products/category-list");
  return response.data;
}

async function fetchProductsByCategory(slug) {
  const response = await request.get(`products/category/${slug}`);
  return response.data;
}

// cart requests

async function addNewCart(userId, products) {
  const response = await request.post("carts/add", {
    userId,
    products,
  });
  return response.data;
}

async function updateCart(cartId, products) {
  const response = await request.put(`carts/${cartId}`, {
    merge: true,
    products,
  });
  return response.data;
}

export {
  login,
  fetchProducts,
  fetchProductById,
  searchProducts,
  getCategories,
  fetchProductsByCategory,
  addNewCart,
  updateCart,
};
