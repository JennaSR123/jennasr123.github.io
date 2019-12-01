<html>
<body>

<?php
$message = $_POST["message"];
echo $message;
mail("jennnasroberts@yahoo.com","Someone used the contact button!",$message);
 ?>

</body>
</html>