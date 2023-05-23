const dpselectBtn = document.querySelector(".dpselect-btn"),
      dpitems = document.querySelectorAll(".dpitem");


dpselectBtn.addEventListener("click", ()  => dpselectBtn.classList.toggle("open"));       

dpitems.forEach(item => {
    item.addEventListener("click", () =>{
        item.classList.toggle("checked");
    });
});
