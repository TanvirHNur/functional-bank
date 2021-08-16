document.getElementById('login-submit').addEventListener('click', function (){
    // get user email
    const emailFeild = document.getElementById('user-email')
    const userEmail = emailFeild.value
    const userPassword = document.getElementById('user-password').value
// checking
    if(userEmail == 'child@fathergmail.com' && userPassword == 'secret'){
        window.location.href = 'banking.html'
    }
})


