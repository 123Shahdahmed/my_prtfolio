
        const toggler = document.querySelector(".style-switcher-toggler");
        const switcher = document.querySelector(".style-switcher");
        console.log(toggler)

        toggler.addEventListener("click",()=>{
            switcher.classList.toggle("open")

        })

        window.addEventListener("scroll",()=>{
            switcher.classList.remove("open")
        })

        const alternate=document.querySelectorAll(".alternate-style");
        function setActiveStyle(color){
            alternate.forEach((index)=>{
                if(color===index.getAttribute("title")){
                    index.removeAttribute("disabled")
                }else{
                    index.setAttribute("disabled","true")
                }
                
            })
            localStorage.setItem("color",color)

        }

        document.addEventListener("DOMContentLoaded",()=>{
            const savedcolor=localStorage.getItem("color")
            if(savedcolor){
                setActiveStyle(savedcolor)
            }
        })







        const night=document.querySelector(".day-night")
        const icon=night.querySelector("i")
        night.addEventListener("click",()=>{
            night.querySelector("i").classList.toggle("fa-sun")
            night.querySelector("i").classList.toggle("fa-moon")
            document.body.classList.toggle("dark")
            const mode = document.body.classList.contains("dark") ? "dark" : "light";
            const iconClass = icon.classList.contains("fa-sun") ? "fa-sun" : "fa-moon";

           localStorage.setItem("themeMode", mode);
           localStorage.setItem("themeIcon", iconClass);
        })
        window.addEventListener("load",()=>{
            const savedMode = localStorage.getItem("themeMode");
           const savedIcon = localStorage.getItem("themeIcon");

        if (savedMode === "dark") {
           document.body.classList.add("dark");
        } else {
           document.body.classList.remove("dark");
        }

        if (savedIcon) {
          icon.classList.remove("fa-sun", "fa-moon");
          icon.classList.add(savedIcon);
        } else {
          icon.classList.add("fa-moon"); // الوضع الافتراضي
        }
        })


   