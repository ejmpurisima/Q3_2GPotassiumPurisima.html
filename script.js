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