let errors = [];
     function checkValidity(input){
        let validity = input.validity;
         if (validity.valueMissing) {
          errors.push('Поле  ' + input.placeholder + ' не заполнено ');
         }
         if (validity.patternMismatch) {
          errors.push('Неверный формат заполнения');
         } 
         
      }
      function checkAll() {
        errors = [];
        let inputs = document.querySelectorAll("input") ;
        console.log(inputs);
        for (let input of inputs){
            checkValidity(input);
        }
        document.getElementById('errorMessage').innerHTML =
        errors.join('. <br>'); 
    }