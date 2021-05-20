const app= new Vue({
el:"#app",

data:{
    logo:"https://www.boolean.careers/images/misc/logo.png",
    newTask:"",
    tasks:[
        "Learn Vue",
        "Learn CSS",
        "Learn JS"
    ],
    completeTasks:[

    ],
    trashedTasks:[

    ]
},
methods:{
    addTask(){
        if(this.newTask.length >=3){
            this.tasks.push(this.newTask);
            this.newTask=""

        }
    },
    
    removeTask(task,index){
        this.trashedTasks.push(task);
        this.tasks.splice(index,1);
    },

    /* Bonus tasks completate */
    checkedTask(task,index){
        this.completeTasks.push(task)
        this.tasks.splice(index,1)
    },

    /* bonus undo complete tasks */
    undoTask(complete,index){
        this.tasks.push(complete)
        this.completeTasks.splice(index,1);

    },
    /* Bonus recuperare una task cestinata */
    recoverTask(trashed,index){
        this.tasks.push(trashed);
        this.trashedTasks.splice(index,1);
    },
    /*Bonus modifica della task premendo Enter */
    modifiedTask(task){
        alert('hai modificato correttamente in -' + task + "-");
    },

    /* Bonus svuotare il cestino */
    confirmCanc(){
        const confirm = prompt("sei sicuro di rimuovere tutti gli elementi dal cestino? Y/N");
        
        if(confirm=="Y" || confirm=="y"){
            this.trashedTasks =[];

        }else if(confirm=="N" || confirm=="n"){
            alert("il cestino non è stato svuotato")
        }else{
            alert("input errato")
        }
    }

}


})

