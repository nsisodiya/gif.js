/**
 * Created by narendrasisodiya on 16/02/17.
 */
function fixBinary(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

export default function loadGifOnDiv(node, base64Image, defaultConfig) {

    var binary = fixBinary(atob(base64Image.split(",")[1]));
    var blob = new Blob([binary], {type: 'image/png'});
    var url = URL.createObjectURL(blob);
    node.innerHTML = "";
    var counter = 0;
    node.style.backgroundImage = 'url(' + url + ')';
    node.style.display = "inline-block";
    node.style.backgroundSize = "cover";
    node.style.backgroundRepeat = "no-repeat"
    node.style.cursor = "pointer";
    var intervalId;

    var nodeWidth = node.getBoundingClientRect().width;
    if (nodeWidth === 0) {
        node.style.height = defaultConfig.blockHeight + "px";
        node.style.width = defaultConfig.blockWidth + "px";
        nodeWidth = defaultConfig.blockWidth;
    }
    //var nodeWidth = node.getBoundingClientRect().width;

    function startAnimation() {
        intervalId = setInterval(function () {
            node.style.backgroundPosition = -1 * counter * nodeWidth + "px";
            counter = counter + 1;
            if (counter === defaultConfig.numberOfImages) {
                counter = 0;
            }
        }, defaultConfig.intervalTime);
    }

    function stopAnimation() {
        counter = 0;
        node.style.backgroundPosition = "";
        clearInterval(intervalId);
    }

    node.addEventListener("mouseenter", function () {
        startAnimation();
    });
    node.addEventListener("mouseout", function () {
        stopAnimation();
    });
}