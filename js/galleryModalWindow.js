document.querySelectorAll(".gridItem").forEach((galleryItem) => {
  galleryItem.onclick = () => {
    const imgSrc = galleryItem
      .querySelector(".galleryImage")
      .getAttribute("src");
    const popup = document.querySelector(".popup-container");
    popup.querySelector("img").setAttribute("src", imgSrc);
    popup.style.display = "block";
  };
});

document.querySelector(".popup-container span").onclick = () => {
  document.querySelector(".popup-container").style.display = "none";
};
