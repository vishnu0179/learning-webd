function fetchProducts(done){
    $.get('/api/products',function(data){
        done(data)
    })
}

function addProducts(name, manuf ,price , done){
    $.post('/api/products',{
        name: name,
        manufacturer:manuf,
        price:price
    },function(data){
        done(data)
    })
}

function createProductCard(product){
    return $(`
            <div class="col-4 card mx-2 p-2">
                <h4 class="product-name">${product.name}</h4>
                <div class="product-manufacturer">${product.manufacturer}</div>
                <div class="row">
                    <div class="col m-2 p-2">
                        Rs. ${product.price}
                    </div>
                </div>
                <button class="btn btn-primary btn-block">BUY</button>
            </div>
    `)
}
