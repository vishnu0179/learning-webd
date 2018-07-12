$(function(){

    let newtodo = $('#newTodo')
    let addtodo = $('#addTodo')
    let todolist = $('#todoList')

    addtodo.click(function(){

        let todo = newtodo.val()

        $.post(
            '/todos/',
            {task:todo},
            function(data){
                todolist.empty();
                for(todo of data){                    // for(i=0;i<data.length();i++) { todo = data[i] }
                    todolist.append('<li>'+todo.task + '</li>')
                }
            }
        )
    })
})