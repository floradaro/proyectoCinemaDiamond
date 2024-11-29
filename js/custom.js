//expande el textarea una vez que se llega al limite de lineas mostradas del comentario
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.auto-expand');
    
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.max(this.scrollHeight, this.rows * 20) + 'px';
    });

    // Validaciones de formulario
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        // Aquí puedes agregar tus validaciones
        const textarea = form.querySelector('.auto-expand');
        
        if (textarea.value.trim() === '') {
            event.preventDefault(); // Evita enviar el formulario
            textarea.classList.add('is-invalid');
        } else {
            textarea.classList.remove('is-invalid');
        }
    });
});




//Validacion
document.addEventListener('DOMContentLoaded', function() {
    (function() {
        'use strict';

        const forms = document.querySelectorAll('.needs-validation');

        Array.prototype.slice.call(forms).forEach(function(form) {

            // Función de validación reutilizable
            function validateInput(input) {

                const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                const numberRegex = /^[1-9]\d*$/;



                // Remover clases previas
                input.classList.remove('is-valid', 'is-invalid');
                // removeWarningIcon(input);

                // Validaciones específicas
                if (input.id === 'firstName' || input.id === 'lastName') {
                    if (input.value.trim() === '' || !nameRegex.test(input.value.trim())) {
                        input.classList.add('is-invalid');
                        // addWarningIcon(input);
                        return false;
                    } else {
                        input.classList.add('is-valid');
                        return true;
                    }
                }

                // Otras validaciones
                if (input.id === 'email') {
                    if (input.value.trim() === '' || !emailRegex.test(input.value.trim())) {
                        input.classList.add('is-invalid');
                        // addWarningIcon(input);
                        return false;
                    } else {
                        input.classList.add('is-valid');
                        return true;
                    }
                }
                // // Validación de Dirección (al menos 5 caracteres)
                if (input.id === 'address') {
                    if (input.value.trim().length < 5) {
                        input.classList.add('is-invalid');
                        // addWarningIcon(input);
                        return true;
                    } else {
                        input.classList.add('is-valid');
                        return true;
                    }
                }

                // // Validación de Número (solo números positivos)
                if (input.id === 'number') {
                    if (!numberRegex.test(input.value.trim())) {
                        input.classList.add('is-invalid');
                        // addWarningIcon(input);
                        return true;
                    } else {
                        input.classList.add('is-valid');
                        return true;
                    }
                }
                
                return true;
            }

            // Crear mensaje de error dinámico
            const errorMessage = document.createElement('div');
            errorMessage.textContent = 'Ingrese valores correctos en los campos.';
            errorMessage.classList.add('text-danger');
            errorMessage.style.display = 'none';
            errorMessage.style.textAlign = 'center'; // Centramos el texto usando CSS en línea
            form.appendChild(errorMessage);

            // Validación en tiempo real
            const inputs = form.querySelectorAll('input[required]');
            inputs.forEach(input => {
                input.addEventListener('input', function() {
                    validateInput(this);
                });
            });

            form.addEventListener('submit', function(event) {
                let isValid = true;

                // Validar cada input requerido
                inputs.forEach(input => {
                    if (!validateInput(input)) {
                        isValid = false;
                    }
                });

                if (!isValid) {
                    event.preventDefault();
                    event.stopPropagation();
                    errorMessage.style.display = 'block'; // Mostrar el mensaje de error
                } else {
                    errorMessage.style.display = 'none'; // Ocultar el mensaje de error
                }

                form.classList.add('was-validated');
            }, false);
        });
    })();
});
//             // Validación en tiempo real
//             const inputs = form.querySelectorAll('input[required]');
//             inputs.forEach(input => {
//                 input.addEventListener('input', function() {
//                     validateInput(this);
//                 });
//             });

//             form.addEventListener('submit', function(event) {
//                 let isValid = true;

//                 // Selectores para nombre y apellido
//                 const firstName = document.getElementById('firstName');
//                 const lastName = document.getElementById('lastName');

//                 // Regex para nombres
//                 const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;


//                 // Validar cada input requerido
//                 inputs.forEach(input => {
//                     if (!validateInput(input)) {
//                         isValid = false;
//                         event.preventDefault();
//                         event.stopPropagation();
//                     }
//                 });

//                 form.classList.add('was-validated');
//             }, false);
//         });
//     })();
// });