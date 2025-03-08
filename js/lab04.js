// Problem 1
function checkAndDisplay() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone-number").value;

    let namePattern = /^[A-Za-z\s]+$/;
    let phonePattern = /^\(\d{3}\)\d{3}-\d{4}$/;

    if (name.trim() === "") {
        alert("The Name textfield is empty!")
    }
    if (phone.trim() === ""){
        alert("The Phone Number textfield is empty!")
    }

    if (address.trim() === "") {
        alert("The Address textfield is empty!")
    }
    else if (!name.match(namePattern) && phone.match(phonePattern)){
        alert("Please enter a valid name (no numbers).")
    }
    else if (name.match(namePattern) && !phone.match(phonePattern)){
        alert("Please enter a valid phone number in the format: (e.g., (416)555-5555).")
    }
    else if (!name.match(namePattern) && !phone.match(phonePattern)){
        alert("Please enter a valid name (no numbers) and a valid phone number (e.g., (416)555-5555).");
    }
    else {
        let formattedPhone = transformPhoneNumber(phone);
        displayInfo(name, address, formattedPhone);
    }
}

function transformPhoneNumber(phone) {
    let formatPhone = phone.replace(/[()]/g, '');
    
    let areaCode = formatPhone.slice(0, 3);
    let exchange = formatPhone.slice(3, 6);
    let number = formatPhone.slice(6);

    return `${areaCode}-${exchange}${number}`;
}

function displayInfo(name, address, phone) {
    let outputDiv = document.getElementById("p1-output");

    let infoTitle = document.createElement("div");
    infoTitle.className = "displayTitle";
    infoTitle.innerHTML = "User Info:";

    let infoName = document.createElement("div");
    infoName.className = "displayName";
    infoName.innerHTML = "Name: " + name;

    let infoAddress = document.createElement("div");
    infoAddress.className = "displayAddress";
    infoAddress.innerHTML = "Address: " + address;

    let infoPhone = document.createElement("div");
    infoPhone.className = "displayPhone";
    infoPhone.innerHTML = "Phone Number: " + phone;

    outputDiv.appendChild(infoTitle);
    outputDiv.appendChild(infoName);
    outputDiv.appendChild(infoAddress);
    outputDiv.appendChild(infoPhone);

}


// Problem 2
function characterCount(){
    let textArea = document.getElementById("text-area");
    let charCountDisplay = document.getElementById("character-count");
    let letterCountDisplay = document.getElementById("letter-count");

    let text = textArea.value;
    let charCount = text.length;
    charCountDisplay.textContent = `Characters: ${charCount}`;

    let letterCount = countLetters(text);
    letterCountDisplay.textContent = `Letters: ${letterCount}`;

}

function countLetters(text){
    let letterPattern = /[A-Za-z]/g;
    let letters = text.match(letterPattern);
    return letters ? letters.length : 0
}

characterCount();


// Problem 3
function checkURL(){
    let urlInput = document.getElementById("p3-input");
    let url = urlInput.value;
    let secureURL = url.startsWith("https");

    if (url) {
        let bookmarkList = document.getElementById("p3-output");
        let bookmarkItem = createBookmarkItem(url, secureURL);
        bookmarkList.appendChild(bookmarkItem);
        urlInput.value = "";
    }

}

function createBookmarkItem(url, secure) {
    let bookmarkItem = document.createElement("div");
    bookmarkItem.className = "bookmark-item";
    bookmarkItem.textContent = url;
    
    let lockIcon = document.createElement("i");
    lockIcon.className = secure ? "gg-lock" : "gg-lock-unlock";
    bookmarkItem.appendChild(lockIcon);

    return bookmarkItem;
}


function createBookmarkList() {
    let bookmarks = [ 
        { url: "https://www.google.ca", secure: true},
        { url: "http://www.123movies.com", secure: false}
    ];
    let bookmarkList = document.getElementById("p3-output");

    bookmarks.forEach(bookmark => {
        let bookmarkItem = createBookmarkItem(bookmark.url, bookmark.secure);
        bookmarkList.appendChild(bookmarkItem);
    });

}

createBookmarkList();

