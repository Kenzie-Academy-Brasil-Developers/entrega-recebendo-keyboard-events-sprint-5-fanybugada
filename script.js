let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);

    switch (keyName) {
        case "ArrowDown":
            boxTop = boxTop + 10;
            break;
        case "ArrowUp":
            boxTop = boxTop - 10;
            break;
        case "ArrowRight":
            boxLeft = boxLeft + 10;
            break;
        case "ArrowLeft":
            boxLeft = boxLeft - 10;
            break;
    }
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
});