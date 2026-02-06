{
  let image = document.createElement('img');
  image.src = './branding/2960_gear.png';
  image.style.width = "15vh";
  image.style.height = "15vh";

  let cont = document.createElement('div');
  cont.style.display = 'flex';
  cont.style.justifyContent = 'center';
  cont.appendChild(image);

  document.querySelectorAll('.page_title').forEach((title) => {
    title.parentElement.appendChild(cont.cloneNode(1));
  });
}
