"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Builds HTML blog post previews with the specified character length on client side.
 * Accepts a blog post container HTMLElement and returns a blog post preview as a HTML string that can be sent to and sanitized and stored in the backend.
 * remember that this function will not return text only nodes that are not a child of an HTMLElement 
 * The result will contain the blog post container HTMLElement.
 * Readme and Examples can be found at {@link https://github.com/hosseini44444/post-preview GitHub}
 * @param {HTMLElement} postContainer  The Parent Element of your blog post editor
 * @param {Number} length Maximum number of characters you want your post preview to be.
 * @param {String} additions optional text or HTML Element in string format that you want to be added to the beginning of the preview (It's length will be subtracted from the length property)
 * @returns {String} blog post preview as a HTML string
 */
const postPreview = (postContainer, length, additions = "") => {
  const outerHtml = postContainer.outerHTML;
  const sum = additions + outerHtml;
  if (sum.length <= length) return sum;
  const elements = postContainer.children;
  const nullSource = postContainer.cloneNode(true);
  nullSource.innerHTML = "";
  const emptySource = nullSource.outerHTML;
  const emptyLength = emptySource.length;
  if (additions.length + emptyLength >= length) return additions;

  if (elements.length === 0) {
    const innerHTML = postContainer.innerHTML;
    const cutLength = length - additions.length - emptyLength;
    const shortInner = innerHTML.substr(0, cutLength);
    nullSource.innerHTML = shortInner;
    const result = additions + nullSource.outerHTML;
    return result;
  }

  let currentSum = "";

  for (let i = 0; i < elements.length; i++) {
    const childOuterHTML = elements[i].outerHTML;
    const totalLength = additions.length + emptyLength + currentSum.length + childOuterHTML.length;

    if (totalLength === length) {
      nullSource.innerHTML = currentSum + childOuterHTML;
      return additions + nullSource.outerHTML;
    } else if (totalLength < length) {
      currentSum += childOuterHTML;
    } else {
      const remainingLength = length - additions.length - emptyLength - currentSum.length;
      nullSource.innerHTML = currentSum + postPreview(elements[i], remainingLength);
      return additions + nullSource.outerHTML;
    }
  }

  return additions + currentSum;
};

var _default = postPreview;
exports.default = _default;