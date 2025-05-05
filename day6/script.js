
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.items = [];
    }
    // Add
    Playlist.prototype.addItem = function (item) {
        this.items.push(item);
    };
    // Remove 
    Playlist.prototype.removeItem = function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    };
    
    Playlist.prototype.getItems = function () {
        return this.items;
    };

    Playlist.prototype.getItemsByLanguage = function (language) {
        return this.items.filter(function (item) { return item.language.toLowerCase() === language.toLowerCase(); });
    };

    Playlist.prototype.sortItems = function () {
        this.items.sort(function (a, b) { return a.title.localeCompare(b.title); });
    };
    // Shuffle
    Playlist.prototype.shuffleItems = function () {
        var _a;
        for (var i = this.items.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.items[j], this.items[i]], this.items[i] = _a[0], this.items[j] = _a[1];
        }
    };
    return Playlist;
}());

var playlist = new Playlist();
var playlistContainer = document.getElementById("playlist");
var addItemForm = document.getElementById("addItemForm");
var shuffleButton = document.getElementById("shuffleButton");
var languageFilterForm = document.getElementById("languageFilterForm");
var playlistItemTemplate = document.getElementById("playlistItemTemplate");

function renderPlaylist(filteredItems) {
    playlistContainer.innerHTML = ""; 
    var itemsToRender = filteredItems || playlist.getItems();
    itemsToRender.forEach(function (item) {
        var listItem = playlistItemTemplate.content.cloneNode(true);
        var titleElement = listItem.querySelector(".title");
        var languageElement = listItem.querySelector(".language");
        var playLink = listItem.querySelector(".playLink");
        var removeButton = listItem.querySelector(".removeButton");
        titleElement.textContent = item.title;
        languageElement.textContent = item.language;
        playLink.href = item.url;
        playLink.textContent = "Play";
        removeButton.onclick = function () {
            playlist.removeItem(item.id);
            renderPlaylist();
        };
        playlistContainer.appendChild(listItem);
    });
}

addItemForm.onsubmit = function (event) {
    event.preventDefault();
    var titleInput = document.getElementById("title");
    var urlInput = document.getElementById("url");
    var languageInput = document.getElementById("language");
    var title = titleInput.value;
    var url = urlInput.value;
    var language = languageInput.value;
    if (title && url && language) {
        var newItem = {
            id: String(Date.now()),
            title: title,
            url: url,
            language: language
        };
        playlist.addItem(newItem);
        renderPlaylist();
        titleInput.value = "";
        urlInput.value = "";
        languageInput.value = "";
    }
};

shuffleButton.onclick = function () {
    playlist.shuffleItems();
    renderPlaylist();
};

languageFilterForm.onsubmit = function (event) {
    event.preventDefault();
    var languageInput = document.getElementById("filterLanguage");
    var language = languageInput.value;
    if (language) {
        var filteredItems = playlist.getItemsByLanguage(language);
        renderPlaylist(filteredItems);
    }
    else {
        renderPlaylist();
    }
};

renderPlaylist();
