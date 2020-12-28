/* eslint-disable no-undef */
const postPreview = require("./index").default;

const length = 200;
describe("[post-preview]", () => {
  it("should return a valid HTML string that has a length less than or equal to the specifed length", () => {
    document.body.innerHTML = `
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
    `;
    const preview = postPreview(document.querySelector(".blogPostContainer"), length);
    const previewContainer = document.querySelector(".preview");
    previewContainer.innerHTML = preview;
    expect(preview).toBeTruthy();
    expect(preview.length).toBeLessThanOrEqual(length);
    expect(previewContainer.innerHTML).toEqual(preview);
  });

  it("should return a valid HTML string that has a length equal to the specifed length", () => {
    document.body.innerHTML = `
  <div class="blogPostContainer">
    <div>
      <h2>Lorem ipsum</h2>
      <p>
        Lorem ipsum, dolor sit amet elit. Neque, similique
        cupiditate illum vitae eligendi
      </p>
    </div>
    <p>extra</p>
    <p>extra</p>
    <p>extra</p>
  </div>
  <div class="preview"></div>`;
    const preview = postPreview(document.querySelector(".blogPostContainer"), length);
    const previewContainer = document.querySelector(".preview");
    previewContainer.innerHTML = preview;
    expect(preview.length).toEqual(length);
    expect(previewContainer.innerHTML).toEqual(preview);
  });

  it("should return a valid HTML string that has a length less than the specifed length", () => {
    document.body.innerHTML = `
    <div class="blogPostContainer">
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum, dolor sit amet elit. Neque, similique
          cupiditate illum vitae eligendi
        </p>
    </div>
    <div class="preview"></div>`;
    const preview = postPreview(document.querySelector(".blogPostContainer"), length);
    const previewContainer = document.querySelector(".preview");
    previewContainer.innerHTML = preview;
    expect(preview.length).toBeLessThan(length);
    expect(previewContainer.innerHTML).toEqual(preview);
  });

  it("should return additions only", () => {
    const additions = `
  <div class="blogPostContainer">
    <div>
      <h2>Lorem ipsum</h2>
      <p>
        Lorem ipsum, dolor sit amet elit. Neque, similique
        cupiditate illum vitae eligendi
      </p>
    </div>
    <p>extra</p>
    <p>extra</p>
    <p>extra</p>
  </div>
  <div class="preview"></div>`;
    const preview = postPreview(document.querySelector(".blogPostContainer"), length, additions);
    const previewContainer = document.querySelector(".preview");
    previewContainer.innerHTML = preview;
    expect(previewContainer.innerHTML).toEqual(additions);
  });
});
