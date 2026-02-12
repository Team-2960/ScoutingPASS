{
  let image = document.createElement('img');
  image.src = './branding/2960_gear.png';
  image.style.width = "10vh";
  image.style.height = "10vh";

  let cont = document.createElement('div');
  cont.style.display = 'flex';
  cont.style.justifyContent = 'center';
  cont.appendChild(image);
  let spacer = document.createElement('div');
  spacer.style.flexGrow = 2;
  cont.appendChild(spacer);
  cont.appendChild(image.cloneNode());

  document.querySelectorAll('.page_title').forEach((title) => {
    title.parentElement.appendChild(cont.cloneNode(1));
    title.parentElement.insertAdjacentElement('afterbegin', cont.cloneNode(1));
  });
}
