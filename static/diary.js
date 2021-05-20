function hiddenClicked() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain"; 
    input.onchange = function (event) {
        processFile(event.target.files[0]);
    };
    input.click();
}

function processFile(file) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById("hidden_diary_text");
        var hiddendiary = document.getElementById("hidden_diary_card");
        
        console.log(reader.result);
        output.innerText = reader.result;
        output.style.textAlign = 'end';
        hiddendiary.style.display = 'flex';
    };
    reader.readAsText(file, "UTF-8");
}
