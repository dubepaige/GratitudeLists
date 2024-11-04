let myList = [];

function addList() {
    const itemInput = document.getElementById("item").value;
    
    myList.push(`<li>${itemInput}</li>`);
    document.getElementById("list").innerHTML = myList.join("");
    document.getElementById("item").value = "";
    
}
