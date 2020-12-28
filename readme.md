
  

# post-preview

Open-source, Light-weight, client side blog post preview generator or HTML summarizer

[![npm](https://img.shields.io/npm/v/post-preview?color=green)](https://www.npmjs.com/package/post-preview) [![Build Status](https://travis-ci.org/hosseini44444/post-preview.svg?branch=main)](https://travis-ci.org/hosseini44444/post-preview) [![Coverage Status](https://coveralls.io/repos/github/hosseini44444/post-preview/badge.svg?branch=main)](https://coveralls.io/github/hosseini44444/post-preview?branch=main)

## Installation

using npm:
```sh
npm install --save post-preview `
```
## usage
```js
postPreview(postContainer: HTMLElement, length: number, additions?: string): string
```
@param **postContainer** — The Parent Element of your blog post editor or container

@param **length** — Maximum number of characters you want your post preview to be.

@param **additions** — optional text or HTML Element in string format that you want to be added to the beginning of the preview (It's length will be subtracted from the length property)

@returns — blog post preview as a HTML string

* Accepts a blog post container HTMLElement and returns a blog post preview as a HTML string that can be sent to and sanitized and stored in the backend.

* remember that this function will not return text only nodes that are not a child of an HTMLElement

* The result will contain the blog post container HTMLElement.


## example
js:
```js
import  postPreview  from  "post-preview";

const  postContainer = document.querySelector(".blogPostContainer");
const  previewContainer = document.querySelector(".preview");
previewContainer.innerHTML = postPreview(postContainer, 200);
```
html (complete blog post): 
```html
<div class="blogPostContainer">
  <div>
    <h2>Lorem ipsum</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, fugit hic! Quas similique
      cupiditate illum vitae eligendi harum. Magnam quam ex dolor nihil natus dolore voluptates
      accusantium. Reprehenderit, explicabo blanditiis?
    </p>
  </div>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam non incidunt, corporis debitis
    ducimus eum iure sed ab. Impedit, doloribus! Quos accusamus eos, incidunt enim amet maiores
    doloribus placeat explicabo.Eaque dolores tempore, quia temporibus placeat, consequuntur hic
    ullam quasi rem eveniet cupiditate est aliquam nisi aut suscipit fugit maiores ad neque sunt
    atque explicabo unde! Explicabo quae quia voluptatem.
  </p>
</div>

<div class="preview"></div>

```

result (blog post preview):
```html
<div class="preview">
  <div class="blogPostContainer">
    <div>
      <h2>Lorem ipsum</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, fugit hic! Quas similique
        cupiditate illum vitae eligendi ha
      </p>
    </div>
  </div>
</div>

```

## License:
[MIT](https://github.com/hosseini44444/post-preview/blob/master/license.md)