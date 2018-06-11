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
	function toggleIcon(e) 
	{
    	$(e.target).prev('.panel-heading').find(".more-less").toggleClass('glyphicon-plus glyphicon-minus');
	}

	$('.panel-group').on('hidden.bs.collapse', toggleIcon);
	$('.panel-group').on('shown.bs.collapse', toggleIcon);

		// var main_nav = $('#SV-main-nav');

		// $(window).on('scroll',function()
		// {
		// 	console.log(09);

		// 	var st=$(window).scrollTop();
		// 	if(st > 10)
		// 	{
		// 		main_nav.addClass("fixed-navigation");
		// 	}
		// 	else
		// 	{
		// 		main_nav.removeClass("fixed-navigation");
		// 	}
		// // });
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
		var url = $('#url_hidden').value();
		






});