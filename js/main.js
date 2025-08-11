const dashboard=document.querySelector(".nav-toggler");
const aside=document.querySelector(".aside");
function addToggle(){
    aside.classList.toggle("open");
}
window.addEventListener("scroll",()=>{
            aside.classList.remove("open")
        })


        const activelist=document.querySelectorAll(".activeMe")
        function setActive(link){
            activelist.forEach((index)=>{
                if(link===index.getAttribute("title")){
                    index.classList.add("active")
                }else{
                    index.classList.remove("active")
                }
                

            })
            localStorage.setItem("link",link)

        }
        document.addEventListener("DOMContentLoaded",()=>{
            const savedlink=localStorage.getItem("link")
            if(savedlink){
                setActive(savedlink)
            }
        })

        // const section=document.querySelectorAll(".section");
        // function showSection(sec){
        //     console.log(sec)
        //     // section.forEach((index)=>{
        //     //    const activesec=index.getAttribute("href").split("#")[1];
        //     //    console.log(activesec)
        //     //    document.querySelector("#"+ activesec).classList.add("addsec")
        //     // })
        // }
        
