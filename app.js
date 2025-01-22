const form = document.myForm;

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let formData = new FormData(this);
    let formObject = {};

    // Loop through form data

    formData.forEach((value, key) => {
        if (key === 'file') {
            // Handle the file input and add it to the object
            if (value) {
                formObject[key] = {
                    name: value.name,
                    size: value.size,
                    type: value.type
                };
            }
        } else {
            formObject[key] = value;
        }
    });

    let jsonData = JSON.stringify(formObject,null, 2);
    console.log(jsonData);
}, false);

function clearForm() {
    document.myForm.reset();
}