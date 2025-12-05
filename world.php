<?php
$host = '127.0.0.1';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

<<<<<<< HEAD
$conn = new PDO("mysql:host=$host;port=3306;dbname=$dbname;charset=utf8mb4", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
=======
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}


$country = isset($_GET['country']) ? $_GET['country'] : '';


if ($country !== '') {
    
    $stmt = $conn->prepare("SELECT * FROM countries WHERE name LIKE :country");
    $stmt->execute(['country' => "%$country%"]);
} else {
    $stmt = $conn->query("SELECT * FROM countries");
}
>>>>>>> ad1cb5f1704db10bb17691d9d83c1be2d6c7ee19

$country = $_GET['country'] ?? '';
$lookup  = $_GET['lookup'] ?? 'country';

if ($lookup === 'country') {
    $stmt = $conn->prepare("SELECT * 
                            FROM countries 
                            WHERE name LIKE :country");
    $stmt ->execute([':country' => "%$country%"]);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo "<table id='table1' border='1'>
            <tr>
                <th>Country Name</th>
                <th>Continent</th>
                <th>Independence Year</th>
                <th>Head of State</th>
            </tr>";
    foreach ($results as $row) {
        echo "<tr>
                <td>" . htmlspecialchars($row['name']) . "</td>
                <td>" . htmlspecialchars($row['continent']) . "</td>
                <td>" . htmlspecialchars($row['independence_year']) . "</td>
                <td>" . htmlspecialchars($row['head_of_state']) . "</td>
              </tr>";
    }
    echo "</table>";

} elseif ($lookup === 'cities') {
    $stmt = $conn->prepare("SELECT c.name AS city_name, c.district, c.population
                            FROM cities c
                            JOIN countries co ON co.code = c.country_code
                            WHERE co.name LIKE :country");
    $stmt->execute([':country' => "%$country%"]);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo "<table id='table2' border='1'>
            <tr>
                <th>City Name</th>
                <th>District</th>
                <th>Population</th>
            </tr>";
    foreach ($results as $row) {
        echo "<tr>
                <td>" . htmlspecialchars($row['city_name']) . "</td>
                <td>" . htmlspecialchars($row['district']) . "</td>
                <td>" . htmlspecialchars($row['population']) . "</td>
              </tr>";
    }
    echo "</table>";
}
?>
<<<<<<< HEAD




=======
<table border= "1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Continent</th>
            <th>Independence</th>
            <th>Head of State</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($results as $row): ?>
            <tr>
                <td><?= $row['name']; ?></td>
                <td><?= $row['continent']; ?></td>
                <td><?= $row['independence_year']; ?></td>
                <td><?= $row['head_of_state']; ?></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>
>>>>>>> ad1cb5f1704db10bb17691d9d83c1be2d6c7ee19
