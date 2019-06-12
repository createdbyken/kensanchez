console.log("It works");

$(document).ready(function (){
    $('.submit').click(function (event){
        console.log('clicked')

        var name = $('.name').val()
        var email = $('.email').val()
        var message = $('.message').val()   
        var statusElm = $('.status')
        statusElm.empty()
        
        //Name Validation
        if(name.length > 3){
            statusElm.append('<div>Name is valid</div>')   
        }else {
            event.preventDefault()
            statusElm.append('<div>Name is not valid</div>')
        }

        //Email Validation
        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email is valid</div>')   
        }else {
            event.preventDefault()
            statusElm.append('<div>Something is missing or email not valid</div>')
        }

        //Message Validation
        if(message.length > 10){
            statusElm.append('<div>Message is valid</div>')   
        }else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }
    })
})