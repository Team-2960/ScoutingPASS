{
  let image = document.createElement('img');
  image.src = './branding/2960_gear.png';
<<<<<<< HEAD
  image.style.width = "15vh";
  image.style.height = "15vh";
=======
  image.style.width = "10vh";
  image.style.height = "10vh";
>>>>>>> 5fe95d5 (- 4 logos, 1 per corner)

  let cont = document.createElement('div');
  cont.style.display = 'flex';
  cont.style.justifyContent = 'center';
  cont.appendChild(image);
<<<<<<< HEAD

  document.querySelectorAll('.page_title').forEach((title) => {
    title.parentElement.appendChild(cont.cloneNode(1));
=======
  let spacer = document.createElement('div');
  spacer.style.flexGrow = 2;
  cont.appendChild(spacer);
  cont.appendChild(image.cloneNode());

  document.querySelectorAll('.page_title').forEach((title) => {
    title.parentElement.appendChild(cont.cloneNode(1));
    title.parentElement.insertAdjacentElement('afterbegin', cont.cloneNode(1));
>>>>>>> 5fe95d5 (- 4 logos, 1 per corner)
  });
}
