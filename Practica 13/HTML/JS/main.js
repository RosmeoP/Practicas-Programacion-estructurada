document.addEventListener("DOMContentLoaded", function (){
    const darkModeButton = document.getElementById("darkModeButton")
    const lightModeButton = document.getElementById("lightModeButton")
    const resetButton = document.getElementById ("resetButton")

    darkModeButton.addEventListener("click", function (){
        toggleMode("dark")
    });

    lightModeButton.addEventListener("click", function (){
        toggleMode("light")
    });

    resetButton.addEventListener("click", function (){
        toggleMode("reset")
    })

    function toggleMode(mode){
        document.body.classList.remove("dark-mode", "light-mode", "reset-mode")

        if (mode == "dark"){
            document.body.classList.add("dark-mode");
            alert("Dark mode activated it")
        } else if (mode == "light"){
            document.body.classList.add("Light-mode");
            alert("Light mode activated it")
        } else if (mode == "reset"){
            document.body.classList.add("reset-mode");
            alert("The appearance has been reset")
        }
        
    }
})     