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
            margin-top: 10px;
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
            padding: 20px 150px;
            gap: 20px;
            color: #083a3c;
            font-weight: bold;
        }

        .title-frame {
            height: 20px;
            background-color: transparent;
            padding: 8px;
            font-size: 20px;
            display: flex;
            justify-content: space-between; /* Change to space-between to position items */
            align-items: center;
            font-weight: bold;
            flex-direction: row;
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

        .dir-btn i {
            color: #fbad48;
        }

        .dir-btn {
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
            padding: 10px;
        }

        .tdHead {
            font-weight: bold;
            font-size: 12.5px;
        }

        .green {
            color: green;
            font-weight: bold;
        }

        td, th {
            padding: 10px 2px 10px 0;
            text-align: left;
            border-bottom: solid 0.5px rgb(174, 174, 174, 0.5);
            margin: 0;

        }

        tr {
            padding: 0;
            height: 3px;
        }

        th {
            color: #497641;
            font-weight: bold;
            width: calc((100%-250px) / 7);
        }

        .fixed-width {
            width: 250px; /* Set the desired width for this column */
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
                    <a href="/profile" class="button prof-btn">Profile</a>
                    <a href="/welcome" class="button out-btn">Logout</a>
                </div>
            </div>
            <div class="analysis-frame">
                <div class="title-frame">
                    <a href="/directory" class="exitbtn"><i class="fas fa-arrow-left"></i></a>
                    Account Management
                    <button id="create" class="addbtn">Create New <i class="fas fa-plus"></i></button>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th class="fixed-width">Name</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Created</th>
                                <th colspan="2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <% users.forEach(user => { %>
                                <tr>
                                    <td><span class="tdHead"><%= user.first_name %> <%= user.last_name %></span><br>
                                        <span class="green"><%= user.role %></span>
                                    </td>
                                    <td><span class="tdHead"><%= user.username %></span></td>
                                    <td><span class="tdHead"><%= user.password %></span></td> <!-- Hide password for security -->
                                    <td><%= new Date(user.createAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) %></td>
                                    <td>
                                        <i class="fas fa-pen icon" onclick="openEditModal('<%= user.role %>', '<%= user._id %>', '<%= user.first_name %>', '<%= user.last_name %>', '<%= user.username %>', '<%= user.password %>')"></i>
                                    </td>                                    
                                    <td>
                                        <form action="/admin/delete/<%= user._id %>?_method=DELETE" method="POST" style="margin: 0;">
                                            <button type="submit" class="btn btn-danger">
                                                <i class="fas fa-trash-alt icon"></i> <!-- Removed the _id display here for cleanliness -->
                                            </button>
                                        </form>                                        
                                    </td>
                                </tr>
                            <% }); %>
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>


    <!-- Create Modal -->
<div id="createModal" class="modal">
    <div class="modal-content">
        <div class="title-frame">
            <p class="exitbtn" onclick="closecreateModal()"><i class="fas fa-arrow-left"></i></p>
            <span>CREATE NEW USER</span>
        </div>
        <form action="/admin/create-user" method="POST" id="createForm">
            <div class="row">
                <div class="field">
                    <label for="first_name">First Name:</label>
                    <input type="text" id="first_name" name="first_name" required>
                    
                </div>
                <div class="field">
                    <label for="last_name">Last Name:</label>
                    <input type="text" id="last_name" name="last_name" required>
                </div>
            </div>
            <div class="row">
                <div class="field">
                    <label for="type">Type:</label>
                    <select id="type" name="role" required>
                        <option value="admin">Admin</option>
                        <option value="cashier">Cashier</option>
                        <option value="courier">Courier</option>
                    </select>
                </div>
                <div class="field">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                </div>
            </div>
            <div class="row">
                <div class="field">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="field">
                    <label for="confirm_password">Confirm Password:</label>
                    <input type="password" id="confirm_password" name="confirm_password" required>
                </div>
            </div>
            <div class="form-buttons">
                <button type="reset" class="clrbtn">CLEAR</button>
                <button type="submit" class="newbtn">CREATE +</button>
            </div>
        </form>
    </div>
</div>

<div id="editModal" class="modal">
    <div class="modal-content">
        <div class="title-frame">
            <p class="exitbtn"><i class="fas fa-arrow-left"></i></p>
            <span>UPDATE ACCOUNT</span>
        </div>
        <form id="editForm" action="" method="POST"> <!-- Change method to POST -->
            <div class="row">
                <div class="field">
                    <label for="edit_type">Type:</label>
                    <select id="edit_type" name="role" required>
                        <option value="admin">Admin</option>
                        <option value="cashier">Cashier</option>
                        <option value="courier">Courier</option>
                    </select>
                    <input type="hidden" name="user_id" id="edit_user_id">
                </div>
                <div class="field">
                    <label for="edit_first_name">First Name:</label>
                    <input type="text" id="edit_first_name" name="first_name" required>
                </div>
            </div>
            <div class="row">
                <div class="field">
                    <label for="edit_last_name">Last Name:</label>
                    <input type="text" id="edit_last_name" name="last_name" required>
                </div>
                <div class="field">
                    <label for="edit_username">Username:</label>
                    <input type="text" id="edit_username" name="username" required>
                </div>
            </div>
            <div class="row">
                <div class="field">
                    <label for="edit_password">Password:</label>
                    <input type="password" id="edit_password" name="password">
                </div>
            </div>
            <input type="hidden" id="edit_user_id" name="user_id"> <!-- Optional, if you need it -->
            <div class="form-buttons">
                <button type="reset" class="clrbtn">CLEAR</button>
                <button type="submit" class="newbtn">UPDATE</button>
            </div>
        </form>
        
    </div>
</div>


<script>
    // Get modals
    const createModal = document.getElementById("createModal");
    const editModal = document.getElementById("editModal");

    // Get buttons that open modals
    const createBtn = document.getElementById("create");

    // Open Create Modal
    createBtn.onclick = function() {
        createModal.style.display = "block";
    }

    function closecreateModal() {
        document.getElementById("createModal").style.display = none;
    }

    // Validate Create Form
    document.getElementById('createForm').addEventListener('submit', function(event) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            event.preventDefault();
        }
    });

    function openEditModal(role, id, first_name, last_name, username) {
    document.getElementById("edit_user_id").value = id; 
    document.getElementById("edit_first_name").value = first_name;
    document.getElementById("edit_last_name").value = last_name;
    document.getElementById("edit_username").value = username;
    document.getElementById("edit_type").value = role;

    // Dynamically set the form action to the correct update URL
    document.getElementById('editForm').action = `/admin/update/${id}`;

    // Open the modal
    const editModal = document.getElementById("editModal");
    editModal.style.display = "block";
}


    // Update the click event for each edit icon in the table
    document.querySelectorAll(".icon.fa-pen").forEach((icon) => {
    icon.onclick = function() {
        const userRow = this.closest("tr");
        let actionUrl = userRow.querySelector('form').action;
        
        // Extract the user ID and remove the '?_method=DELETE' part
        const userId = actionUrl.split('/').pop().split('?')[0]; // Remove query string

        const user = {
            id: userId, // Now only the ID without the query string
            first_name: userRow.querySelector(".tdHead").textContent.split(" ")[0],
            last_name: userRow.querySelector(".tdHead").textContent.split(" ")[1],
            username: userRow.children[1].textContent,
            role: userRow.querySelector('.green').textContent // Get user role
        };

        // Call openEditModal with individual user data
        openEditModal(user.role, user.id, user.first_name, user.last_name, user.username);
    };
});


    // Close modals when clicking outside or escape (optional feature)
    window.onclick = function(event) {
        if (event.target === createModal) {
            createModal.style.display = "none";
        } else if (event.target === editModal) {
            editModal.style.display = "none";
        }
    };

    // Close modals on Escape key
    window.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            createModal.style.display = "none";
            editModal.style.display = "none";
        }
    });
</script>



    
</body>
</html>
