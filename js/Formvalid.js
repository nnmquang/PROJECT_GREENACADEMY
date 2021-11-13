
//Đối tượng Validator
function Validator(options) {
    // console.log(options.form)

    function getParent(element, selector) {
        while (element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    //Hàm thực hiện validate
    function validate (inputElement, rule) {
        // var errorElement = getParent(inputElement, '.form-group')
        // var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage = rule.test((inputElement).value);

    // Lấy ra các rules của selector
    // Nếu có lỗi dừng việc kiểm tra        
        var rules = selectorRules[rule.selector];
    // Lặp qua từng rule (check) và kiểm tra
        for (var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        // console.log(selectorRules)
                    // console.log(errorMessage)
                    if (errorMessage) {
                        errorElement.innerText = errorMessage
                        getParent(inputElement, options.formGroupSelector).classList.add('invalid');
                    } else {
                        errorElement.innerText = '';        //truyen vao mot chuoi rong de khi blur ra ngoai se mat canh bao
                        getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                    }

                    return ! errorMessage;
                        
    
    
                }

    //Lấy element của form cần validate
    var formElement = document.querySelector(options.form)
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();        // mặc định khi click vào submit sẽ ko chạy load trang nữa

            var isFormValid = true

            //Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });
            
            // if(isFormValid) {                  //kiem tra khi submit co loi hay ko co loi
            //    console.log('Khong co loi')
            // } else {
            //    console.log('co loi')

            // }

            if(isFormValid) {
            // Trường hợp submit với Javascript
               if(typeof options.onSubmit === 'function') {
                  var enableInputs = formElement.querySelectorAll('[name]');
                  var formValues = Array.from(enableInputs).reduce(function (values, input) {
                    values[input.name] = input.value
                      return values ; 
                  }, {});
                  options.onSubmit(formValues);
               } 
            // Trường hợp submit với hành vi mặc định 
               else {
                   formElement.submit();
               }
            }

        }



        //Lặp qua rule và xử lý (lắng nghe sự kiện blur, input,....)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test]
            }
                    // selectorRules[rule.selector] = rule.test;
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);

                    // console.log('blur' + rule.selector)
                    // console.log(inputElement.value)
                    // value : inputElement.value
                    // test func : rule.test
                    // console.log(rule)

                    // var errorMessage = rule.test(inputElement.value)
                    // // console.log(errorMessage)
                    // if (errorMessage) {
                    //     errorElement.innerText = errorMessage
                    //     inputElement.parentElement.classList.add('invalid');
                    // } else {
                    //     errorElement.innerText = '';        //truyen vao mot chuoi rong de khi blur ra ngoai se mat canh bao
                    //     inputElement.parentElement.classList.remove('invalid');
                    // }

                    // console.log(inputElement.parentElement.querySelector('.form-message'))
                }
                // Xử lý người dùng mỗi khi nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';        //truyen vao mot chuoi rong de khi blur ra ngoai se mat canh bao
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            }
        });

        // console.log(selectorRules)    //lưu lại các rule thẻ input của chúng ta
    }
}

// Định nghĩa các rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi trả ra => message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
    // console.log(selector)
    return {
        selector : selector,
        test : function (value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'      // trim để loại bỏ dấu cách 
        }
    }
}

Validator.isEmail = function (selector, message) {
    // console.log(selector)
    return {
        selector : selector,
        test : function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này không phải là email'
        }
    }
}

Validator.minLength = function (selector, min, message) {
    // console.log(selector)
    return {
        selector : selector,
        test : function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector : selector,
        test : function (value) {
           return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}