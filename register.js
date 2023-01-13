// initiate variables and get input
let username_input = document.getElementById("name");

let email_input = document.getElementById('email');

let password_input = document.getElementById('password');
let confirm_password_input = document.getElementById('confirm-password');

let gender_male_input = document.getElementById('radio-male');
let gender_female_input = document.getElementById('radio-female');
let gender_other_input = document.getElementById('radio-other');

let phone_number_input = document.getElementById('phone-number');

let city_input = document.getElementById("home-address");

// let submit_input = document.getElementById('submit');
let submit_input = document.getElementsByClassName("btn btn-primary-red btn-regis");

//form validator
function form_validator()
{
    let validate_flag = false

    // Username Validator
    // needs to be atleast 5 characters
    var username_text = username_input.value;
    if(username_text.length < 5)
    {
        //alert
        console.log(username_text);
        alert("username must be at least 5 character long!")
    }
    else
    {
            //gender validator
            var gender_female_value = gender_female_input.checked;
            var gender_male_value = gender_male_input.checked;
            var gender_other_value = gender_other_input.checked

            if(gender_female_value == false && gender_male_value == false && gender_other_value == false)
            {
                alert("Please pick 1 gender");
            }
            else
            {
                //email validator
                var email_value = email_input.value;

                if(email_value.endsWith("@gmail.com") == false)
                {
                    alert("Please input a valid Email");
                }
                else
                {
                    console.log(email_value);

                    //phone number validator
                    var phone_number_value = phone_number_input.value;

                    if(phone_number_value.length < 11 || phone_number_validator(phone_number_value) == false)
                    {
                        alert("Enter a Valid Phone Number");
                        console.log(phone_number_value)
                    }
                    else
                    {
                        //city validator
                        var city_value = city_input.value;
                        if(city_value == "none")
                        {
                            alert("select a valid city");
                        }
                        else
                        {
                            //password validator
                            //password needs
                            var password_value = password_input.value;
                            if(password_validator(password_value) == false)
                            {
                                alert("Password Must be 8 Characters Long and Must Have Letters and Numbers");
                                console.log(password_value);
                            }
                            else
                            {
                                var confirm_password_value = confirm_password_input.value;
                                if(confirm_password_validator(password_value,confirm_password_value) == false)
                                {
                                    alert("Please Re-check Confirm Password");
                                    console.log(confirm_password_value);
                                }
                                else
                                {
                                    validate_flag = true;
                                }
                            }
                        }
                    }
                }
            }
    }
}

function phone_number_validator(string)
{
    for(var i = 0 ; i < string.length ; i ++)
    {
        if(string[i] > '9' || string[i] < '0')
        {
            return false;
        }
    }
    return true;
}

function password_validator(password_value)
{
    //pass length
    if(password_value.length < 8) return false;

    //nums and nan
    var check_num = false;
    var check_nan = false;

    for(var i = 0 ; i < password_value.length ; i ++)
    {
        var temp_c = password_value[i];

        if(!isNaN(temp_c) == true)check_num = true;
        else if ((temp_c >= 'A' && temp_c <= 'Z') || ( temp_c >= 'a' && temp_c <= 'z'))check_nan = true;
    }

    if(check_num && check_nan) return true;
    else return false;
}

function confirm_password_validator(password_value,confirm_password_value)
{
    for(var i = 0 ; i < confirm_password_value.length ; i ++)
    {
        if(password_value[i] != confirm_password_value[i]) return false;
    }
    return true;
}


//event listener    
submit_input[0].addEventListener("click", form_validator);

