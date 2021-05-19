const app= new Vue({
el:"#app",

data:{
    logo:"https://www.boolean.careers/images/misc/logo.png",
    newTask:"",
    tasks:[
        "learn html",
        "leran CSS",
        "Leran JS"
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
        /* usare splice */
        this.tasks.splice(index,1)
    }
}


})