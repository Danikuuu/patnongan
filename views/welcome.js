<!-- views/welcome.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accounts</title>
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
            background: linear-gradient(to bottom, #02342c, #071a19);
            padding: 15px;
            box-sizing: border-box;
            align-items: center;
            box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
            color: white;
        }

        .main-frame {
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            justify-content: center;
            width: 90%;
            height: 95%; /* Keep this height or adjust as needed */
            background-color: transparent;
            border-radius: 15px;
            margin-bottom: 2px;
            padding: 5px;
        }

        .newbtn {
            background-color: #fbad48; /* Default color for the Edit button */
            color: rgb(122, 38, 38);
            padding: 3px 35px;
            text-decoration: none;
            border-radius: 10px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.1s ease;
            font-size: 18px;
            text-align: center;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            align-self: center;
            border: 0;
        }

        .newbtn:hover {
            padding: 3px 36px;
            color: white;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: stretch; /* Make form elements take full width */
            font-family: 'Poppins', sans-serif;
            color: white;
            margin-top: 20px;
            font-size: 12px;
            gap: 10px;
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
            color: white;
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

        .logo-card {
            background-color: transparent;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
            gap: 10px;
            color: white;
            font-weight: bold;
            line-height: 1em;
        }

        .logo-card img {
            max-height: 80%;
            object-fit: contain;
        }

        .forgot {
            text-align: center;
            align-self: center;
            margin-top: 20px;
            color: white;
            font-weight: normal;
        }

        p1, p2 {
            text-align: center;
            font-family: poppins, sans-serif;
        }

        p2 {
            font-size: 15px;
            font-weight: normal;
        }

        p1 {
            font-size: 30px;
            font-weight: bold;
        }

    </style>
</head>
<body>
    <div class="container">
        <div class="main-frame">
                <div>
                    
                    <div class="logo-card">
                        <img src="/public/images/logo.png" alt="Logo">
                        <p1>PDELISYS</p1>
                        <p2>Patnongan Delivery Inventory System</p2>
                    </div>
                    
                    <form id="loginForm" action="/login" method="POST">
                        <div class="row"><div class="field"></div></div>
                        <div class="row">
                            <div class="field">
                            <input type="text" id="username" placeholder="Enter Username" name="username" required>
                            </div>
                        </div><div class="row">
                            <div class="field">
                            <input type="password" id="password" placeholder="Enter Password" name="password" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="field">
                        <button type="submit" class="newbtn">LOGIN</button>
                        <a href="/dashboard" class="forgot">Forgot Password?</a>
                    </div>
                    </div>
                    </form>
                </div>
        </div>
    </div>
</body>
</html>
