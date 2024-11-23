<?php

//This file must be placed in htdocs folder, with the required database and data else it will not work.

// Enable CORS for all domains
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

// Database connection
$host = "localhost";
$user = "root"; // Change to your MySQL username
$password = ""; // Change to your MySQL password
$dbname = "weatherbasedoutfitsystem"; // Your database name

$conn = new mysqli($host, $user, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if parameters are passed
if (!isset($_GET['weather_code']) || !isset($_GET['temperature'])) {
    die("Missing required parameters: weather_code or temperature.");
}

// Fetch parameters from the query string
$weather_code = $_GET['weather_code'];
$temperature = $_GET['temperature'];

// Log for debugging purposes
error_log("Received weather_code: " . $weather_code); 
error_log("Received temperature: " . $temperature); 

// Prepare SQL query
$sql = "SELECT outfit, rating, image_url FROM outfits 
        WHERE weather_code = ? AND min_temp <= ? AND max_temp >= ?
        ORDER BY rating DESC";

// Prepare the statement
$stmt = $conn->prepare($sql);

// Check if statement preparation was successful
if ($stmt === false) {
    error_log("Error in SQL preparation: " . $conn->error);
    die("Error in SQL preparation");
}

// Bind parameters to the SQL query
// We bind weather_code as integer (i) and temperature as float (d)
$stmt->bind_param("idd", $weather_code, $temperature, $temperature);

// Execute the query
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Check if there are any results
if ($result->num_rows > 0) {
    // Fetch all outfits
    $outfits = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($outfits); // Send the results as JSON
} else {
    // If no results, return an empty array
    echo json_encode([]);
}

// Close the statement and connection
$stmt->close();
$conn->close();

?>
