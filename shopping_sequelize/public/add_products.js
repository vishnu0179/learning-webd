$(function(){
    let productName=$('#productName')
    let productManufacturer=$('#productManufacturer')
    let productPrice =$('#productPrice')

    $('#btnProductAdd').click(function(){
        addProducts(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function(addedProduct){
                window.alert("added Product"+addedProduct.name+"to database")
            }
        )
    })
})