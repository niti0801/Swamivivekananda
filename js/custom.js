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
            
      $( "#locality" ).autocomplete(
      {
      	minLength: 3,
      	classes: {
          "ui-autocomplete": "highlight"
        },
       autoFocus: true,
		source: 'js/location.json'
      });
            

    });
	$('.ui-menu li div').on( 'click',function() {
		    // $.getJSON("demo_ajax_json.js",
		    // });
		    console.log(1);

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
		
		$(".get_start_btn").click(function()
		{
			$(".get_info_intro").hide();
			$(".get_start_btn").hide();
			$(".get_info_student_1").show();
			$(".next-modal").show();
		});
		// $(".get_start_btn").click(function()
		// {
		// 	$(".get_info_intro").hide();
		// 	$(".get_start_btn").hide();
		// 	$(".get_info_tutor").show();
		// 	$(".next-modal").show();
		// });


		$(".next-modal").click(function()
		{
			$(".get_info_intro").hide();
			$(".get_start_btn").hide();
			$(".get_info_student_1").hide();
			$(".next-modal").hide();
			$(".get_info_student_2").show();
			$(".next-modal1").show();
		});
		$(".next-modal1").click(function()
		{
			$(".get_info_intro").hide();
			$(".get_start_btn").hide();
			$(".get_info_student_1").hide();
			$(".next-modal").hide();
			$(".get_info_student_2").hide();
			$(".next-modal1").hide();
			$(".get_info_student_3").show();
			$(".next-modal2").show();
		});
		$(".next-modal2").click(function()
		{
			$(".get_info_intro").hide();
			$(".get_start_btn").hide();
			$(".get_info_student_1").hide();
			$(".next-modal").hide();
			$(".get_info_student_2").hide();
			$(".next-modal1").hide();
			$(".get_info_student_3").hide();
			$(".next-modal2").hide();
			$(".get_info_student_4").show();
			$(".next-modal3").show();
		});
		$(".next-modal3").click(function()
		{
			$(".get_info_intro").hide();
			$(".get_start_btn").hide();
			$(".get_info_student_1").hide();
			$(".next-modal").hide();
			$(".get_info_student_2").hide();
			$(".next-modal1").hide();
			$(".get_info_student_3").hide();
			$(".next-modal2").hide();
			$(".get_info_student_4").hide();
			$(".next-modal3").hide();
			$(".get_info_student_5").show();
			$(".next-modal4").show();
		});
		$(".next-modal4").click(function()
		{
			$(".get_info_intro").hide();
			$(".get_start_btn").hide();
			$(".get_info_student_1").hide();
			$(".next-modal").hide();
			$(".get_info_student_2").hide();
			$(".next-modal1").hide();
			$(".get_info_student_3").hide();
			$(".next-modal2").hide();
			$(".get_info_student_4").hide();
			$(".next-modal3").hide();
			$(".get_info_student_5").hide();
			$(".next-modal4").hide();
			$(".get_info_student_6").show();
			$(".next-modal5").show();

		});
		$(".next-modal5").click(function()
		{
			$(".get_info_intro").hide();
			$(".get_start_btn").hide();
			$(".get_info_student_1").hide();
			$(".next-modal").hide();
			$(".get_info_student_2").hide();
			$(".next-modal1").hide();
			$(".get_info_student_3").hide();
			$(".next-modal2").hide();
			$(".get_info_student_4").hide();
			$(".next-modal3").hide();
			$(".get_info_student_5").hide();
			$(".next-modal4").hide();
			$(".get_info_student_6").hide();
			$(".next-modal5").hide();
			$(".get_info_student_7").show();
			$(".next-modal6").show();


		});

	$(".next-modal6").click(function()
		{
			$(".get_info_intro").hide();
			$(".get_start_btn").hide();
			$(".get_info_student_1").hide();
			$(".next-modal").hide();
			$(".get_info_student_2").hide();
			$(".next-modal1").hide();
			$(".get_info_student_3").hide();
			$(".next-modal2").hide();
			$(".get_info_student_4").hide();
			$(".next-modal3").hide();
			$(".get_info_student_5").hide();
			$(".next-modal4").hide();
			$(".get_info_student_6").hide();
			$(".next-modal5").hide();
			$(".get_info_student_7").hide();
			$(".next-modal6").hide();
			$(".get_info_student_8").show();
			$(".next-modal7").show();


		});
	$(".next-modal7").click(function()
		{
			$(".get_info_intro").hide();
			$(".get_start_btn").hide();
			$(".get_info_student_1").hide();
			$(".next-modal").hide();
			$(".get_info_student_2").hide();
			$(".next-modal1").hide();
			$(".get_info_student_3").hide();
			$(".next-modal2").hide();
			$(".get_info_student_4").hide();
			$(".next-modal3").hide();
			$(".get_info_student_5").hide();
			$(".next-modal4").hide();
			$(".get_info_student_6").hide();
			$(".next-modal5").hide();
			$(".get_info_student_7").hide();
			$(".next-modal6").hide();
			$(".get_info_student_8").hide();
			$(".next-modal7").hide();
			$(".get_info_student_9").show();
			$(".next-modal8").show();
		});
			




		$('.form-name').on('keypress', function(key) 
		{

		if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) 
		{
			return false;	
		}
	});
		
		  

	
		





		

		
		
});
