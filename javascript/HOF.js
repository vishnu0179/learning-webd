function creategreeter(name) {
    function greeter(){
        console.log("Hello"+name)
    }
    return greeter;
    
}

vishnugreeter=creategreeter('Vishnu');
vishnugreeter();