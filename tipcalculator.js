(function(){
  let calculate = document.querySelector("button");

    calculate.addEventListener("click", () => {
      
      let howmuch = Number(document.querySelector(".howmuch").value);
      let howmany = Number(document.querySelector(".howmany").value);
      let chooseone = Number(document.querySelector('#chooseone').value);

      let tip = chooseone * howmuch;
      tip = tip.toFixed(2);
      document.querySelector(".tip").value = Intl.NumberFormat().format(tip);

      let total = Number(tip) + howmuch;
      total =  total.toFixed(2);
      document.querySelector(".total").value = Intl.NumberFormat().format(total);

      let split = Number(total)/howmany;
      split = split.toFixed(2);
      document.querySelector(".split").value = Intl.NumberFormat().format(split);
    })
})();
