<?php                                                                                                                                                       
function con(){
$con = mysqli_connect("localhost","dominion_root","123asd","dominion_accounts");
    if(!$con){
        echo "FAILED";
    }
return $con;
}

function POSTS(){
if(isset($_GET['Websites'])){
    $query = "SELECT * FROM `projects` WHERE `project` = 0";
    $exe = mysqli_query(con(),$query);
    if(!$exe){
        echo "Error";
    }else{
        while($row = mysqli_fetch_assoc($exe)){
            ?>

            <div class="col-sm-6 col-lg-4 item">
                <a href="<?php echo $row["url"] ?>"><img class="img-fluid" src="assets/img/<?php echo $row["imge"];?>.png">
        </a><h3 class="name"><?php echo $row["title"] ?></h3>
                    <p class="description"><?php echo $row["des"] ?></p>
                </div>

            <?php
        }
    }
}
}
?>