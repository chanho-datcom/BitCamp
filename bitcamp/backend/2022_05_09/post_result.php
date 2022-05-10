<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <?php 
      
      $Uname = $_POST["Uname"];
      $Uaddress = $_POST["Uaddress"];
      $Unumber = $_POST["Unumber"];
      $Uid = $_POST["Uid"];
      $Upwd = $_POST["Upwd"];
      $Nationality = $_POST["Nationality"];
      $Pwd_len = strlen($Upwd);
      $replace = '';
    ?>

    <h1>Name: <?php echo $_POST["Uname"]; ?></h1><hr/>
    <h2>Address: <?php echo $_POST["Uaddress"]; ?></h2><hr/>
    <h2>Number: <?php echo $_POST["Unumber"]; ?></h2><hr/>
    
    <?php 
      if($Uid == 'admin'){
        echo "<h5 style='color: green;'>Id : ". $Uid ."</h5>" ;
      }else{
        echo "<h5 style='color: blue;'>Id : ". $Uid ."</h5>" ;
      }
    ?><hr />
    <?php
      for($i=0; $i < $Pwd_len; $i++){
        $replace = $replace . '*';
      }
      echo "<h5 style='color:red'>".$replace."</h5>";
    ?><hr/>
    <h5>Nation: <?php echo $_POST["Nationality"]; ?></h5>
  
  </body>
</html>


