class tarefas {

    constructor(tasks) {

        this.tasks = tasks
    }



}

const clique = document.getElementById("botao")

function click() {

    Object.onclick = function (){clique};
    Object.addEventListener("click", clique);

    alert("vain");

}