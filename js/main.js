const taskApp = new Vue({
    el: '#taskApp',
    data: {
        title: "TaskApp",
        tasks: [],
        newTask:''
    },
    methods: {
        addTask: function(){
            if(this.newTask !== ''){
                this.tasks.push({
                    name: this.newTask,
                    state: false
                });
                this.newTask='';
                localStorage.setItem("taskLocal",JSON.stringify(this.tasks));
            }else{
                alert("You need write a task!");
            }
        },
        editTask: function(index){
            this.tasks[index].state = !this.tasks[index].state;
            console.log(this.tasks[index].state)
            localStorage.setItem("taskLocal",JSON.stringify(this.tasks));
        },
        deleteTask: function(index){
            deleteTaskConfirmation = confirm("Do you want delete this task?");
            if(deleteTaskConfirmation){
                this.tasks.splice(index, 1);
                localStorage.setItem("taskLocal",JSON.stringify(this.tasks));
            }
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem("taskLocal"));
        if(datosDB === null){
            this.tasks = [];
        }else{
            this.tasks = datosDB;
        }
    }
});