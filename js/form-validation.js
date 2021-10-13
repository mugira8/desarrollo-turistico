//DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()

                        var email = document.querySelector("#email")
                        if(/^.*abc$/.test(email.value)){
                            email.classList.add('required')
                        }
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()
    
    
    
});