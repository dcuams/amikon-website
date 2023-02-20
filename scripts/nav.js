function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
            var y = document.getElementById("socials");
            if (y.className === "social") {
                y.className += " responsive";
             } else {
                 y.className = "social";
             }
        }