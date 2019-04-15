<?php                                                                                                                                              
include('constant.php');

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Portfolio</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:700">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.min.css">
    <link rel="stylesheet" href="assets/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c">
</head>

<body>
    <!-- Start: HEADER for supersamii -->
    <nav class="navbar navbar-light navbar-expand-md navbar navbar-expand-lg fixed-top" id="mainNav" style="background-color: #000000;">
        <div class="container"><a class="navbar-brand js-scroll-trigger" href="<?php echo $Supersami;?>" style="font-family: Montserrat, sans-serif;">SUPER<span style="color: rgb(177,63,63);">SAMI</span></a><button class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarResponsive"
                type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu"><i class="fa fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="nav navbar-nav ml-auto">
                <li class="nav-item nav-link js-scroll-trigger" role="presentation"><a class="nav-link active js-scroll-trigger" href="<?php echo $navlink1;?>"><?php echo $navlink1t;?></a></li>
                    <li class="nav-item nav-link js-scroll-trigger" role="presentation"><a class="nav-link js-scroll-trigger" href="<?php echo $navlink2;?>"><?php echo $navlink2t;?></a></li>
                    <li class="nav-item nav-link js-scroll-trigger" role="presentation"><a class="nav-link js-scroll-trigger" href="<?php echo $navlink1;?>"><?php echo $navlink3t;?></a></li>
               </ul>
            </div>
        </div>
    </nav>
    
    <!-- End: HEADER for supersamii -->
    <!-- Start: Lightbox Gallery -->
    <div class="photo-gallery"></div>
    <!-- End: Lightbox Gallery -->
    <!-- Start: Projects Clean -->
    <div class="projects-clean">
        <div class="container" style="margin-top: 91px;">
        <?php
         $title = "";
         $desc = "";
         if(isset($_GET['Websites'])){
            $title  = "Websites";
             $desc = "HERE are some Web Applicaitons that i have build";
            
         }else if(isset($_GET['Mobile'])){
            $title  = "Mobile";
            $desc = "HERE are some Mobile Applicaitons that i have build";
            
        }else if(isset($_GET['Desktop'])){
            $title  = "Desktop";
            $desc = "HERE are some Desktop Applicaitons that i have build";

        }else{
            $title = "YOU GOT HERE Accidently"; $desc = "You need to head back SIR ";
        }
         ?>
            <!-- Start: Intro -->
            <div class="intro">
                <h2 class="text-center"><?php echo $title;?></h2>
                <p class="text-center"><?php echo $desc;?> </p>
            </div>
            <!-- End: Intro -->
            <!-- Start: Projects -->
            <div class="row projects">

            <?php
            include('function.php');
            POSTS();
            ?>
             
            </div>
            <!-- End: Projects -->
        </div>
    </div>
    <!-- End: Projects Clean -->
    <!-- Start: Footer for super samii -->
    <footer>
        <div class="container text-center">
        <p><?php echo $footer;?></p>
        </div>
    </footer>
    <!-- End: Footer for super samii -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/js/lightbox.min.js"></script>
    <script src="assets/js/script.min.js?h=e71f742d5a5111350b8ed7e0e12c1e4d"></script>
</body>

</html>