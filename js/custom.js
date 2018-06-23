$(document).ready(function($)
{
	$("select.categories").change(function()
	{

		var select=$(this);
		var value=select.val();
		if(value == 'student' || value == 'teacher')
		{
			$("#sub").css('display','inline-block');
		}
		else{
			$("#sub").css('display','none');
		}
	});
	$("select.selectpicker").change(function()
	{

		console.log(0);
		var select=$(this);

		var value=select.val();

		if(value == "2")
		{
			$("#student").hide().fadeOut(300);
			$("#institute").hide().fadeOut(300);
			$("#faculty").show().fadeIn(300);
		}
		else if(value=="3")
		{
           $("#faculty").hide().fadeOut(300);
           $("#student").hide().fadeOut(300);
           $("#institute").show().fadeIn(300);
		}
		else if(value == "1")
		{
			$("#faculty").hide().fadeOut(300);
			$("#institute").hide().fadeOut(300);
			$("#student").show().fadeIn(300);
		}
		
	});
	function toggleIcon(e) 
	{
    	$(e.target).prev('.panel-heading').find(".more-less").toggleClass('glyphicon-plus glyphicon-minus');
	}

	$('.panel-group').on('hidden.bs.collapse', toggleIcon);
	$('.panel-group').on('shown.bs.collapse', toggleIcon);

		var main_nav = $('#SV-main-nav');

		// $(window).on('scroll',function()
		// {
		// 	var st=$(window).scrollTop();
		// 	if(st > 60)
		// 	{
		// 		main_nav.addClass("fixed-navigation");
		// 	}
		// 	else
		// 	{
		// 		main_nav.removeClass("fixed-navigation");
		// 	}
		// });
		$("input[name=signup_form_select]").on('click',function()
		{
			var value=$("input[name=signup_form_select]:checked").val();
				if (value == 1) 
				{
           			$("#change_placeholder").attr("placeholder", "Enter Full Name");
           		}
           		else if (value == 2) 
           		{
           		    $("#change_placeholder").attr("placeholder", "Enter Full Name ");
           		}
           		else if (value == 3)
           		{
           			$("#change_placeholder").attr("placeholder", "Enter Institute Name ");
           		}
		});

		$(".home-tutor-close").on("click",function()
		{
			$(".home-tutor-image").toggleClass("home-tutor-hidden");
			$(".home-tutor-close").toggleClass("home-tutor-close-visible");
			if($(".home-tutor-close").hasClass("home-tutor-close-visible"))
			{	
				setTimeout(function(){
				       $(".home-tutor-close i").removeClass("fa-times").addClass("fa-angle-double-right");
				   }, 600);
				
			}
			else
			{

				setTimeout(function(){
				       $(".home-tutor-close i").addClass("fa-times").removeClass("fa-angle-double-right");
				   }, 100);
				
			}

		});

		$(".enquiry-form-close").on("click",function()
		{
			$(".enquiry-form-content").toggleClass("enquiry-form-hidden");
			$(".enquiry-form-close").toggleClass("enquiry-form-close-visible");
			if($(".enquiry-form-close").hasClass("enquiry-form-close-visible"))
			{	
				setTimeout(function(){
				       $(".enquiry-form-close i").removeClass("fa-times").addClass("fa-angle-double-left");
				   }, 600);
				
			}
			else
			{
				setTimeout(function(){
				       $(".enquiry-form-close i").addClass("fa-times").removeClass("fa-angle-double-left");
				   }, 100);
				
			}

		});
		// $('[data-toggle="tooltip"]').tooltip('show');   
		// $('#form-register').validate({
		//         framework: 'bootstrap',
		//         icon: {
		//             valid: 'glyphicon glyphicon-ok',
		//             invalid: 'glyphicon glyphicon-remove',
		//             validating: 'glyphicon glyphicon-refresh'
		//         },
		//          err: {
		//             // You can set it to popover
		//             // The message then will be shown in Bootstrap popover
		//             container: 'tooltip'
		//         },
		//         fields: {
  //                   fname: {
  //                       row: '.column',
  //                       validators: {
  //                           notEmpty: {
  //                               message: 'The first name is required'
  //                           }
  //                       }
  //                   },
                    
  //                   email: {
  //                       validators: {
  //                           notEmpty: {
  //                               message: 'The email address is required'
  //                           },
  //                            regexp: {
		//                         regexp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		//                         message: 'The input is not a valid email address'
		//                     },
  //                           emailAddress: {
  //                               message: 'The input is not a valid email address'
  //                           }
  //                       }
  //                   },
  //                   pass1: {
  //                       validators: {
  //                           notEmpty: {
  //                               message: 'The password is required'
  //                           },
  //                             stringLength: {
		//                         min: 8,
		//                         max: 16,
		//                         message: 'The password must be more than 8 and less than 16 characters long'
		//                     },
		//                     regexp: {

		//                         regexp: /^[a-zA-Z0-9_]+$/,
		//                         message: 'The password can only consist of alphabetical, number and underscore'
		//                     },
                           
  //                       }
  //                   },
  //               }
  //           });

		// choosing photo for profile photo submission
		$("#choose-file").click(function()
		{
			
			   $('input[type=file]').change(function() {
			       var filename = $(this)[0].files[0];
			       console.log(filename.name);
			       $('#file').html(filename.name);
			   });

		});
		// Profile Completion Steps

		$(".next").click(function(e)
		{
			var count=0;
			var this_ele=$(this).parent().parent();
			var fields = this_ele.find('div .text-field');
			fields.each(function() {
		        var value = $(this).val();
		        if(value == ''){
		        	
		        	count++;
		        }
		        console.log(value);
		    });
			var next_ele=$(this_ele).next();
			
			if(count==0){
				this_ele.hide();
				next_ele.show();
			}
			else{
				e.preventDefault();
			}
			
		});
		
		$(function()
    {
      var availabelLocality=[
      "Kalyannagar","Hennur Cross","Kasturinagar","Ramamurtynagar","RT Nagar","JP Nagar"
      
      ];
      
      $( "#locality" ).autocomplete(
      {
		source: availabelLocality
      });
            

    });


		$(".previous").click(function(e)
		{
			var this_ele=$(this).parent().parent();
			var prev_ele=$(this_ele).prev();
			this_ele.hide();
			prev_ele.show();
		});
		$("#skip").click(function(e)
		{
			var this_ele=$(this).parent().parent();
			var next_ele=$(this_ele).next();
			this_ele.hide();
			next_ele.show();
		});
		$("#ms-form").submit(function(e){

			var count=0;
			var this_ele1=$('.profile-submit').parent().parent();
			var fields1 = this_ele1.find('div .text-field');
			fields1.each(function(e) {
		        var value = $(this).val();
		        if(value == ''){
		        	count++;
		        }
		        
		    });
		    
			if(count != 0){
				   e.preventDefault();
			}
			
		})

		$('.form-name').on('keypress', function(key) 
		{
		if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) {
			return false;	
		}
	});
		$('form-emailid').on('keypress', function(key) {
        if(key.charCode < 48 || key.charCode > 57) {
			return false;
		}
    });
		$(".form-phoneno").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg").html("Digits Only").show().fadeOut("3000");
               return false;
    }
   });

		
		
});
