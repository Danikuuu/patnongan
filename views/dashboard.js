<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DASHBOARD</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">


    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            color: white;
        }

        .container {
            display: flex;
            flex-direction: column;
            width: 100vw;
            height: 100vh;
            overflow-y: auto; /* Enable vertical scrolling */
            overflow-x: hidden;
            background: linear-gradient(to bottom, #01201b, #071a19);
            padding: 15px;
            box-sizing: border-box;
            align-items: center;
            box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
        }

        .main-frame {
            display: flex;
            flex-direction: column;
            width: 90%;
            height: 95%; /* Keep this height or adjust as needed */
            background-color: transparent;
            border-radius: 15px;
            margin-bottom: 2px;
            padding: 5px;
        }

        header {
            background-color: transparent;
            padding: 0;
            text-align: center;
            color: white;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            height: 70px;
            gap: 10px;
        }

        h1 {
            margin-top: 20px;
            background-color: transparent;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            line-height: 0.8em;
            padding: 0 20px;
            border-radius: 15px;
            font-size: 26px;
            color: #083a3c;
            width: 25%;
            border: 1px solid #c6c6c6;
        }

        p1 {
            font-size: 25px;
        }

        p2 {
            font-size: 12px;
            font-weight: normal;
        }

        p2 i {
            color: #fbad48;
        }

        table {
            width: 100%;
            border-collapse: separate;
            font-size: 10px;
            font-weight: normal;
            background-color: white;
            border-radius: 5px;
            border-spacing: 0;
            overflow: hidden;
            color: black;
        }

        td {
            text-align: left;
            padding: 0 0 0 10px;
            margin: 0;
            height: 30px;
            border-bottom: solid 0.5px rgb(174, 174, 174, 0.5);
        }

        tr {
            padding: 0;
            margin: 0;
            height: 5px;
        }

        th {
            color: black;
            font-size: 12px;
            padding: 5px 0 5px 10px;
            font-weight: normal;
            text-align: left;
            margin: 0;
            border-bottom: solid 0.5px rgb(174, 174, 174, 0.5);
        }

        .btn {
            background-color: #083a3c; /* Default color for the Edit button */
            color: white;
            padding: 10px;
            text-decoration: none;
            border-radius: 5px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 12px;
            border: none; /* Remove border for a consistent look */
        }

        .btn-danger {
            background-color: transparent; /* Color for the Delete button */
        }

        .btn-update {
            background-color: transparent; /* Color for the Update button */
            padding: 10px;
            font-size: 10px;
        }

        .icon {
            color: gray;
        }

        .icon:hover {
            color: #fbad48;
        }

        .menu-frame {
            display: flex;
            height: 10%;
            background-color: transparent;
            border-radius: 10px;
        }

        .menu-column {
            flex: 1;
            padding: 5px;
            box-sizing: border-box;
        }

        .logo-card {
            background-color: transparent;
            height: 100%;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: white;
            font-weight: bold;
        }

        .logo-card img {
            max-height: 80%;
            object-fit: contain;
        }

        .menu-items {
            background-color: transparent;
            height: 100%;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .profile-card {
            background-color: transparent;
            height: 100%;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: none;
        }

        .profile-card a {
            color: white;
        }

        .profile-card a:hover {
            color: #fbad48;
        }

        .button {
            background-color: transparent;
            border: none;
            padding: 5px 15px;
            color: rgb(161, 160, 160);
            font-size: 12px;
            cursor: pointer;
            margin: 0 10px;
            text-align: center;
            transition: background-color 0.3s;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;
            text-decoration: none;
        }

        .button:hover {
            color: white;
        }

        .analysis-frame {
            height: 100%;
            background-color: white;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            padding: 10px 20px;
            gap: 20px;
            color: #083a3c;
            font-weight: bold;
        }

        .title-frame {
            height: 20px;
            background-color: transparent;
            padding: 8px;
            font-size: 30px;
            display: flex;
            justify-content: space-between; /* Change to space-between to position items */
            align-items: center;
            font-weight: bold;
        }

        .addbtn {
            background-color: #497641; /* Default color for the Edit button */
            color: white;
            padding: 5px 10px;
            text-decoration: none;
            border-radius: 10px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 12px;
            text-align: center;
            font-weight: bold;
            border: 1px solid #c6c6c6;
            font-family: 'Poppins', sans-serif;
        }

        .addbtn:hover, .newbtn:hover, .clrbtn:hover {
            background-color: #fbad48;
        }

        .exitbtn:hover {
            color: #fbad48;
        }

        .das-btn i {
            color: #fbad48;
        }

        .das-btn {
            color: white;
        }

        .emphas {
            font-weight: bold;
        }
        
.modal {
    display: none; /* Hidden by default */
    position: fixed;
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */
}

.modal-content {
    background-color: #ffffff;
    margin: 10% auto; /* Center the modal */
    padding: 20px;
    border: 1px solid #888;
    border-radius: 15px;
    width: 90%; /* Adjust as needed */
    max-width: 600px; /* Limit max width */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: #083a3c;
    font-size: 12px;
}

.newbtn {
            background-color: #497641; /* Default color for the Edit button */
            color: white;
            padding: 5px 20px;
            text-decoration: none;
            border-radius: 12px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 12px;
            text-align: center;
            font-weight: bold;
            border: 1px solid #c6c6c6;
            font-family: 'Poppins', sans-serif;
        }

        .clrbtn {
            background-color: orangered;
            color: white;
            padding: 5px 20px;
            text-decoration: none;
            border-radius: 12px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 12px;
            text-align: center;
            font-weight: bold;
            border: 1px solid #c6c6c6;
            font-family: 'Poppins', sans-serif;
        }

        .exitbtn {
            background-color: transparent;
            color: #083a3c;
            padding: 0;
            text-decoration: none;
            border-radius: 12px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 20px;
            text-align: center;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
        }


        form {
            display: flex;
            flex-direction: column;
            align-items: stretch; /* Make form elements take full width */
            font-family: 'Poppins', sans-serif;
            color: black;
            margin-top: 20px;
            font-size: 12px;
        }
        .form-buttons {
            display: flex;
            justify-content: flex-end; /* Space evenly bet*/
            font-family: 'Poppins', sans-serif;
            margin-top: 10px; /* Space above the buttons */
        }
        .row {
            display: flex;
            margin-bottom: 10px; /* Space between rows */
            gap: 10px;
        }
        .field input,
        .field select {
            flex: 1; /* Allow inputs to grow */
            margin-right: 5px; /* Space between inputs */
            padding: 8px; /* Reduce padding for smaller inputs */
            border: 1px solid #888;
            border-radius: 5px;
            background-color: transparent;
            color: black;
            font-size: 14px; /* Font size for input */
            font-family: 'Poppins', sans-serif;
        }

        .field label {
            flex: 1; /* Allow inputs to grow */
            margin-right: 5px; /* Space between inputs */
            padding: 8px; /* Reduce padding for smaller inputs */
            background-color: transparent;
            color: #888;
            font-size: 14px; /* Font size for input */
            font-family: 'Poppins', sans-serif;
        }
        .field input:last-child,
        .field select:last-child {
            margin-right: 0; /* Remove margin from the last input in the row */
            border: 1px solid #888;
        }

        .field {
            flex: 1;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: left;
            line-height: 0.5em;
        }
        /* Dropdown styling */
select {
    appearance: none; /* Remove default dropdown styling */
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" %3E%3Cpolyline points="6 9 12 15 18 9" /%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
    font-family: 'Poppins', sans-serif;
    color: black; /* Change text color to black */
    border: 1px solid #888;
}

        /* Custom scrollbar styling */
        select::-webkit-scrollbar {
            width: 8px; /* Width of the scrollbar */
        }
        select::-webkit-scrollbar-track {
            background: transparent; /* Background of the scrollbar track */
        }
        select::-webkit-scrollbar-thumb {
            background: #555; /* Color of the scrollbar thumb */
            border-radius: 5px; /* Rounded corners for thumb */
        }
        select::-webkit-scrollbar-thumb:hover {
            background: #777; /* Color of the scrollbar thumb on hover */
        }

    </style>
</head>
<body>
    <div class="container">
        <div class="main-frame">
            <div class="menu-frame">
                <div class="menu-column logo-card">
                    <img src="/public/images/logo.png" alt="Logo">
                    PDELSYS
                </div>
                <div class="menu-column menu-items">
                    <a href="/admin/dashboard" class="button das-btn"><i class="fas fa-tachometer-alt"></i> DASHBOARD</a>
                    <a href="/admin/transactions" class="button inv-btn"><i class="fas fa-box"></i> INVENTORY</a>
                    <a href="/admin/orders" class="button dir-btn"><i class="fas fa-address-book"></i> DIRECTORY</a>
                </div>
                <div class="menu-column profile-card">
                    <a href="/logout" class="button out-btn">Logout</a>
                </div>
            </div>
            <div class="analysis-frame">
                <div class="title-frame">
                    <span>DASHBOARD</span>
                    <button id="create" class="addbtn">MORE</button>
                </div>
                <header>
                    <h1 class="h1a">
                        <p1 id="customerCount"></p1>
                        <p2><i class="fas fa-database"></i></p2>
                    </h1>
                </header>
                <div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const token = localStorage.getItem('token'); // Assuming you stored it after login

            fetch('/api/user/dashboard', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                if (!response.ok) throw new Error('Unauthorized');
                return response.json();
            })
            .then(data => {
                // Assuming data.customerCount is the field you want to display
                document.getElementById('customerCount').innerText = data.customerCount || '0';
            })
            .catch(error => {
                console.error(error);
                document.getElementById('customerCount').innerText = 'Error fetching data';
            });
        });
    </script>
</body>
</html>
