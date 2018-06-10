<?php include "header.php" ?>
<?php 
$success_message="";
$error_message="";
$error=$first_name_error=$email_error=$password_error=$confrmpass_error=$phone_error=$institute_error="";

$fname=$pass=$cnfrm_password=$email=$phone=$institute_name="";


if ($_SERVER["REQUEST_METHOD"] == "POST")
{

    $fname=$_POST['fname'];
    
    $pass=$_POST['pass1'];
    $cnfrm_password=$_POST['cnfrm-pass'];
    $email=$_POST['email'];
    $phone=$_POST['tel'];
    // $institute_name=$_POST['ins-name'];


    if(empty($fname) && empty($pass) && empty($cnfrm_password) && empty($email))
    {
        $error="All fields are mandatory.";
    }
    else
    {
        if (empty($_POST["fname"])) 
        {

            $first_name_error="Name is must";
        }
        else
        {
            $fname=test_input($_POST["fname"]);
            if (!preg_match("/^[a-zA-Z]*$/", $fname)) 
            {
              
              $first_name_error="only character are valid"; 
            }
        }
       

       
        if (empty($_POST["ins-name"])) 
        {

           $institute_error="Name is must";
        }
        else
        {
            $institute_name=test_input($_POST["ins-name"]);
            if (!preg_match("/^[a-zA-Z]*$/", $institute_name)) 
            {
              
              $institute_error="only character are valid"; 
            }
        }

        if(empty($_POST["pass1"]))
        {
            $password_error="Password is must";
        }
        else
        { 
            $pass=test_input($_POST["pass1"]);

            if(!preg_match("/^[a-zA-Z@_0-9]{7,16}$/",$pass))
            {
                $password_error="Password must ";
            }
        }

        if(empty($_POST["cnfrm-pass"]))
        {
            $confrmpass_error="Confirm pass must";
        }
        else if($pass!=$cnfrm_password)
        {

            $confrmpass_error="Password must be same";

        }

       if(empty($_POST["email"]))
        {
            $email_error="Email is must";
        }
        else
        {
            $email=test_input($_POST["email"]);

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
            {
                $email_error = "Invalid email format"; 
            }
        }
        if(empty($_POST["tel"]))
        {
            $phone_error="Phone number is must";
        }
        else
        {
            $phone=test_input($_POST["tel"]);
             if(!preg_match('/^[0-9]{10}$/', $phone))
             {
              $phone_error="only Digits are valid";  
             }
        }



    }
    if( empty($error) && empty($first_name_error) && empty($email_error)&& empty($password_error) && empty($confrmpass_error)){
        include 'connection.php';

       // $sql="SELECT email from `users` where email='$email'";
        
        $result=mysqli_query($conn,$sql);
        
        if(mysqli_num_rows($result)>0)
        {
            $error_message="Email id already exists.";
             mysqli_close($conn);
        }
        else
        {     $salt = uniqid(mt_rand(), true);
              $md5=md5($salt.$pass);
              $sql="INSERT INTO users (firstname,password,email,salt)
              values('$fname','$lname','$md5','$email','$salt')";
              if(mysqli_query($conn,$sql))
              {
                $success_message="Account created succesfully";
                $fname="";
                
                $email="";
                $phone="";
                $institute_name="";
              }
              else
              {
                $error_message="Error: ".mysqli_error($conn);
              }

              mysqli_close($conn);

              
        }

      
   }
}



function test_input($data)
{
  $data=trim($data);
  $data=stripslashes($data);
    $data=htmlspecialchars($data);
  return $data;
}

?>
<section class="register-section">

    <div class="register-page-body"></div>
        <div class="container">
             <div class="row">
                  <div class="col-md-8 col-md-offset-2">
                    <div class="register-layout">
                        <div class="register-content-opacity">
                           <h1 class="text-center register-heading">Sign Up For Free</h1>
                            <div class="">
                                <div class="row">
                                     <div class="col-md-12">
                                         <div class="inner-body">
                                            <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>"  method="POST">
                                            
                                            <label class="register-label">
                                                <input type="radio" name="signup_form_select" value="1" id="register_select_student" placeholder="Name" checked> Student  
                                            </label>
                                                  
                                            <label class="register-label">
                                                <input type="radio" name="signup_form_select" id="register_select_faculty" value="2"> Faculty
                                            </label>
                                                  
                                            <label class="register-label">
                                                <input type="radio" name="signup_form_select" id="register_select_institute" value="3"> Institute
                                            </label>
                                            
                                            <div class="input--with-icon">
                                                <i class="fa fa-user"></i>
                                                <input type="text" class="form-control" name="fname" placeholder=" Name.." id="change_placeholder" value="<?php echo $fname ?>">
                                            </div>

                        
                                            <div class="input--with-icon">
                                                <i class="fa fa-envelope"></i>
                                                <input type="email" class="form-control" name="email" placeholder="Email id.." >
                                                <span class="error"> <?php echo $email_error ?></span>
                                            </div>

                                            <div class="input--with-icon">
                                                <i class="fa fa-lock"></i>
                                                <input type="password" class="form-control" name="pass1" placeholder="Password..">
                                                <span class="error"> <?php echo $password_error ?></span>   
                                            </div>
                                            
                                            <div class="input--with-icon">
                                                <i class="fa fa-lock"></i>
                                                <input type="password" class="form-control" name="cnfrm-pass" placeholder="confirm password..">
                                                <span class="error"> <?php echo $confrmpass_error ?></span>   
                                            </div>
                                            <div class="input--with-icon">
                                                <i class=" fa fa-phone"></i>
                                                <input type="password" class="form-control" name="tel" placeholder="Phone number..">
                                                <span class="error"> <?php echo $phone_error ?></span>   
                                            </div>
                                            <div class="register-submit">
                                                <input type="submit" name="" value="submit">
                                            </div>
                                       </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
 </div>
    
</section>
<?php include "footer.php" ?>