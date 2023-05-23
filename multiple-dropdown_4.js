const dpselectBtn_3 = document.querySelector(".dpselect-btn_3"),
      dpitems_3 = document.querySelectorAll(".dpitem_3");


dpselectBtn_3.addEventListener("click", ()  => dpselectBtn_3.classList.toggle("open"));       

dpitems_3.forEach(item => {
    item.addEventListener("click", () =>{
        item.classList.toggle("checked");
    });
});