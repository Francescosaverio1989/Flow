export function removeItem(itemToRemove) {
  window.localStorage.removeItem(itemToRemove);
}

export function getItem(message) {
  window.localStorage.getItem(message);
}

export function addItem(localeStorageName, newItem) {
  window.localStorage.setItem(localeStorageName, newItem);
}
