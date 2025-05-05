
interface PlayableItem {
  id: string;
  title: string;
  language: string; 
  lastPlayed?: Date;
  url: string;
}


class Playlist<T extends PlayableItem> {
  private items: T[] = [];

 
  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  getItems(): T[] {
    return this.items;
  }

 //filter
  getItemsByLanguage(language: string): T[] {
    return this.items.filter(item => item.language.toLowerCase() === language.toLowerCase());
  }

  
  // sortItems(): void {
  //   this.items.sort((a, b) => a.title.localeCompare(b.title));
  // }

  // Shuffle items randomly
  shuffleItems(): void {
    for (let i = this.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
    }
  }
}

// DOM Manipulation
const playlist = new Playlist<PlayableItem>();

const playlistContainer = document.getElementById("playlist") as HTMLUListElement;
const addItemForm = document.getElementById("addItemForm") as HTMLFormElement;
const shuffleButton = document.getElementById("shuffleButton") as HTMLButtonElement;
const languageFilterForm = document.getElementById("languageFilterForm") as HTMLFormElement;
const playlistItemTemplate = document.getElementById("playlistItemTemplate") as HTMLTemplateElement;

function renderPlaylist(filteredItems?: PlayableItem[]) {
  playlistContainer.innerHTML = ""; 
  const itemsToRender = filteredItems || playlist.getItems();

  itemsToRender.forEach(item => {
    const listItem = playlistItemTemplate.content.cloneNode(true) as HTMLElement;

    const titleElement = listItem.querySelector(".title") as HTMLElement;
    const languageElement = listItem.querySelector(".language") as HTMLElement;
    const playLink = listItem.querySelector(".playLink") as HTMLAnchorElement;
    const removeButton = listItem.querySelector(".removeButton") as HTMLButtonElement;

    titleElement.textContent = item.title;
    languageElement.textContent = item.language;
    playLink.href = item.url;
    playLink.textContent = "Play";

    removeButton.onclick = () => {
      playlist.removeItem(item.id);
      renderPlaylist();
    };

    playlistContainer.appendChild(listItem);
  });
}

// add items
addItemForm.onsubmit = (event) => {
  event.preventDefault();
  const titleInput = document.getElementById("title") as HTMLInputElement;
  const urlInput = document.getElementById("url") as HTMLInputElement;
  const languageInput = document.getElementById("language") as HTMLInputElement;

  const title = titleInput.value;
  const url = urlInput.value;
  const language = languageInput.value;

  if (title && url && language) {
    const newItem: PlayableItem = {
      id: String(Date.now()), 
      title,
      url,
      language,
    };
    playlist.addItem(newItem);
    renderPlaylist();
    titleInput.value = "";
    urlInput.value = "";
    languageInput.value = "";
  }
};

//shuffling
shuffleButton.onclick = () => {
  playlist.shuffleItems();
  renderPlaylist();
};

//filtering
languageFilterForm.onsubmit = (event) => {
  event.preventDefault();
  const languageInput = document.getElementById("filterLanguage") as HTMLInputElement;
  const language = languageInput.value;

  if (language) {
    const filteredItems = playlist.getItemsByLanguage(language);
    renderPlaylist(filteredItems);
  } else {
    renderPlaylist(); 
  }
};


renderPlaylist();