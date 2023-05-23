const dpselectBtn_2 = document.querySelector(".dpselect-btn_2"),
      dpitems_2 = document.querySelectorAll(".dpitem_2");


dpselectBtn_2.addEventListener("click", ()  => dpselectBtn_2.classList.toggle("open"));       

dpitems_2.forEach(item => {
    item.addEventListener("click", () =>{
        item.classList.toggle("checked");
    });
});