import { BASE_URL } from "./constants";

export async function getCategories() {
  const response = await fetch(BASE_URL);
  return response.json();
}

export async function getBooks(id: string) {
  const response = await fetch(`${BASE_URL.slice(0, -1)}?name=${id}`);
  return response.json();
}
