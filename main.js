const app= new Vue({
el:"#app",

data:{
    logo:"https://www.boolean.careers/images/misc/logo.png",
    newTask:"",
    tasks:[
        "Learn Vue",
        "Learn CSS",
        "Leran JS"
    ],
    completeTasks:[

    ]
},
methods:{
    addTask(){
        if(!this.newTask==""){
            this.tasks.push(this.newTask);
            this.newTask=""

        }
    },
    removeTask(index){
        this.tasks.splice(index,1)
    },
    checkedTask(task,index){
        this.completeTasks.push(task)
        this.tasks.splice(index,1)
        
    }

}


})