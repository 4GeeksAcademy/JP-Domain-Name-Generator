import "bootstrap";
import "./style.css";

let array = [];

window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io", ".etc"];
  let domainString = "";
  var a, b, c, d, e;

  for (a = 0; a < pronoun.length; a++) {
    for (b = 0; b < adj.length; b++) {
      for (c = 0; c < noun.length; c++) {
        for (d = 0; d < extension.length; d++) {
          domainString = pronoun[a] + adj[b] + noun[c] + extension[d];
          array.push(domainString);
        }
      }
    }
  }

  for (e = 0; e < array.length; e++) {
    let newElement = document.createElement("h6");
    newElement.innerHTML = array[e];
    document.querySelector("#domainName").appendChild(newElement);
  }
};
