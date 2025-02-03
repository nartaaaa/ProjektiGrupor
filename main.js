
        function showAlert(product) {
            alert('You selected ' + product);
        }

        function submitForm(event) {
            event.preventDefault();
            document.getElementById("form-message").style.display = "block";
            setTimeout(() => {
                document.getElementById("form-message").style.display = "none";
            }, 3000);
        }