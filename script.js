const appForm = document.getElementById("appForm");

function confSubmit(){
            return confirm("Please check your application. Click Submit if all details are confirmed.");
        }

function confReset(){
            return confirm("Are you sure you want to reset the form?");
    }

function checkEmpty(element) {
    if (element.value.trim() === "") {
            element.classList.add("error");
        } else {
            element.classList.remove("error");
            }
}

function saveData(){
    const formData = {
        studentID: document.getElementById("studentID").value,
        birthday: document.getElementById("birthday").value,
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        grade: document.getElementById("grade").value,
        type: document.getElementById("type").value,
        club: document.getElementById("club").value,
        reason: document.getElementById("reason").value,
        timestamp: new Date().toLocaleString()
    }
};
