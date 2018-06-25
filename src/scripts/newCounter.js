var newCounter = function(id){
    let f = document.createElement("div");
    f.style.width = "50px";
    f.style.height = "50px";
    f.style.border = "1px solid black";
    f.style.margin = "2px";
    f.id = `songCounter${id}`;
    f.className = "songCounterOff"
    return f;
}

module.exports = newCounter