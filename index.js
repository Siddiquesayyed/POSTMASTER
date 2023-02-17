console.log('project master clone')

// radio for adding json 
document.getElementById("jsonBox").style.display = 'none'
let postradio = document.getElementById("postRadio")
postradio.addEventListener('click', () => {
    document.getElementById("jsonBox").style.display = 'block'
})

// radio for removing json
let getradio = document.getElementById("getRadio")
getradio.addEventListener('click', () => {
    document.getElementById("jsonBox").style.display = 'none'
})

// add submit button
let submit = document.getElementById("submit")
submit.addEventListener('click', () => {

    document.getElementById("responsePrism").innerHTML = 'please wait.. fetching'

    let url = document.getElementById('inputtext').value;
    let requestType = document.querySelector('input[name="gridRadios"]:checked').value;
    if (requestType == "post") {

        let data = document.getElementById("JsonText").value;
        data = JSON.parse(data)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.text())
            .then((text) => document.getElementById("responsePrism").innerHTML = text)
            .catch(error => {
                document.getElementById("responsePrism").innerHTML = error;

            })

    } else if (requestType == 'get') {
        if (url == '') {
            document.getElementById("responsePrism").innerHTML = '';
        } else {
            fetch(url)
                .then((response) => response.text())
                .then((text) => {

                    document.getElementById("responsePrism").innerHTML = text;
                })
                .catch(error => {
                    document.getElementById("responsePrism").innerHTML = error;

                })
        }
    }
})
let newbtn = document.getElementById('new')
newbtn.addEventListener('click', () => {
    location.reload();
})
