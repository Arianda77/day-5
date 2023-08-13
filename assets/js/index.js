function submitForm() {
    var name = document.getElementById("input-name").value;
    var email = document.getElementById("input-email").value;
    var phone = document.getElementById("input-phone").value;
    var subject = document.getElementById("input-subject").value;
    var message = document.getElementById("input-message").value;
    var form = document.getElementById("form")

    form.reset()

    if(name == "") {
        return alert("Please input your name !")
    } else if (email == "") {
        return alert("Please input your email !")
    } else if (phone == "") {
        return alert("Please input your phone !")
    } else if (subject == "") {
        return alert("Please select your subject")
    } else if(message == "") {
        return alert("Please input your message")
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    var emailReceiver = "roifarianda39@gmail.com"

    let a = document.createElement("a")
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name is ${name}, ${message}, Please contact me in this phone number ${phone}`
    a.click();
}