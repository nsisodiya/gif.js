import base64Image from "./16180567_1846059625669935_593734054205980672_n.png";
import defaultConfig from "./config.json";
import loadGifOnDiv from "./loadGifOnDiv";
loadGifOnDiv(document.querySelector("#app"), base64Image, defaultConfig);
//http://codepen.io/Guilh/pen/yldGp
//https://bl.ocks.org/nolanlawson/0eac306e4dac2114c752
export default loadGifOnDiv;