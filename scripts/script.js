let rangevalue = document.getElementById("myRange");
            let setvalue = document.getElementById("rangevalue");
            let imgchangevalue = document.getElementById("imgchange")
                //setvalue.innerHTML = rangevalue.value;
                //console.log(rangevalue.value)
    
            //Now will use oninput event.
            rangevalue.oninput = function() {
                let getvalue = rangevalue.value;
                setvalue.innerHTML = this.value;
                if (getvalue > 0 && getvalue < 26) {
                    imgchangevalue.setAttribute("src", "assets/b-RAIN landing page v3 1 (Gemiddeld).png")
                } else if (getvalue >= 27 && getvalue <= 49) {
                    imgchangevalue.setAttribute("src", "assets/b-RAIN landing page v3 2 (Gemiddeld).png")
                } else if (getvalue >= 50 && getvalue <= 73) {
                    imgchangevalue.setAttribute("src", "assets/b-RAIN landing page v3 3 (Gemiddeld).png")
                } else if (getvalue >= 74 && getvalue <= 97) {
                    imgchangevalue.setAttribute("src", "assets/b-RAIN landing page v3 4 (Gemiddeld).png")
                } else if (getvalue >= 98 && getvalue <= 99) {
                    imgchangevalue.setAttribute("src", "assets/b-RAIN landing page v3 5 (Gemiddeld).png")
                }
            };

            var button = document.querySelector("button");
            var element = document.querySelector("span");

            button.addEventListener("click", function() {
            element.classList.toggle("show");
            });
