app.validation = {
    name: 'validation',
    description: 'your script description',
    init() {
        const forms = document.querySelectorAll('.js-form');

        let defaultConfig = {
            // class of the parent element where the error/success class is added
            classTo: 'form-item',
            errorClass: 'error',
            successClass: 'success',
            // class of the parent element where error text element is appended
            errorTextParent: 'form-item',
            // type of element to create for the error text
            errorTextTag: 'span',
            // class of the error text element
            errorTextClass: 'error-text'
        };

        // create the pristine instance
        forms.forEach((form) => {
            let pristine = form && new Pristine(form, defaultConfig);

            form.addEventListener('submit', function (e) {
                e.preventDefault();

                pristine.validate(); // returns true or false
            });
        });

        // input mask
        const phoneInputs = document.querySelectorAll('input[type=tel]');

        if (!phoneInputs.length) return;

        const maskOptions = {
            mask: '+{375}(00)000-00-00',
            lazy: false
        }
    
        let mask;
    
        phoneInputs.forEach((input) => {
            input.addEventListener('focus', function () {
                mask = new IMask(input, maskOptions);
            });
        
            input.addEventListener('blur', function () {
                if (this.value.match('_')) {
                    mask.masked.reset();
                }
            });
        });
    },
};