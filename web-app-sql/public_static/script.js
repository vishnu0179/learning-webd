
$(function () {
    
    let inp_name = $('#name')
    let inp_age = $('#age')
    let inp_city = $('#city')
    let btn_submit = $('#submit')
    let tbl_persons = $('#persons')
    let del_btn= $('#delbtn')
    let inp_id=$('#id')
    
    function refreshPersonTable (persons) {
        tbl_persons.empty()
        tbl_persons.append(
            `<tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            </tr>`
        )
        for (person of persons) {
            tbl_persons.append(
                `<tr>
                <td>${person.id}</td>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.city}</td>
                </tr>`
            )
        }
    }
    
    $.get('/api/persons', function (data) {
        refreshPersonTable(data)
    })
    
    btn_submit.click(function () {
        $.post('/api/persons', 
        {
            name: inp_name.val(),
            age: inp_age.val(),
            city: inp_city.val()
        },
        function (data) {
            refreshPersonTable(data)
        }
    )
    
})

/* del_btn.click(function(){
    $.post('/api/persons',
    {   
        id: inp_id.val()
    },
    function(data){ 
        refreshPersonTable(data)
    }
)
}) */

})