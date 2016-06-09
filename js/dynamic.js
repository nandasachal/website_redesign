$(document).ready(function(){

	// $("div.not_clicked").click(function(){
	// 	$("div.clicked").toggleClass(".clicked", ".not_clicked");
	// 	$(this).toggleClass(".not_clicked", ".clicked");
	// })
	// $("#second_tab").click(function(){
	// 	$("main").load("../test.html");
	// });

	function tab_switch(tab, view){
		$(".clicked").addClass("not_clicked");
		$(".clicked").removeClass("clicked");

		$(tab).removeClass("not_clicked");
		$(tab).addClass("clicked");

		$("#work_experience").hide();
		$("#projects").hide();
		$("involvement").hide();
		$(view).fadeIn(400); //400milliseconds
	};

	$("#involvement").hide();
	$("#projects").hide();

	// $("#second_tab").click(function(){
	// 	$(".clicked").addClass("not_clicked");
	// 	$(".clicked").removeClass("clicked");

	// 	$("#second_tab").removeClass("not_clicked");
	// 	$("#second_tab").addClass("clicked");

	// 	$("#work_experience").hide();
	// 	$("#projects").hide();
	// 	$("#involvement").fadeIn(400); //400milliseconds
	// });

	$("#first_tab").click(function(){
		tab_switch("#first_tab", "#work_experience");
	});

	$("#second_tab").click(function(){
		tab_switch("#second_tab", "#involvement");
	});

	$("#third_tab").click(function(){
		tab_switch("#third_tab", "#projects");
	});

	// $("#third_tab").click(function(){
	// 	$(".clicked").addClass("not_clicked");
	// 	$(".clicked").removeClass("clicked");

	// 	$("#third_tab").removeClass("not_clicked");
	// 	$("#third_tab").addClass("clicked");

	// 	$("#work_experience").hide();
	// 	$("#involvement").hide();
	// 	$("#projects").fadeIn(400); //400milliseconds
	// });

	// $("#first_tab").click(function(){
	// 	$(".clicked").addClass("not_clicked");
	// 	$(".clicked").removeClass("clicked");

	// 	$("#first_tab").removeClass("not_clicked");
	// 	$("#first_tab").addClass("clicked");

	// 	$("#involvement").hide();
	// 	$("#projects").hide();
	// 	$("#work_experience").fadeIn(400); //400milliseconds
	// });


	// $("#second_tab").click(function(){
	// 	$('#work_experience').fadeOut("slow", function(){
	// 	    $('#work_experience').load("../test.html", function(){
	// 	        $('#work_experience').fadeIn("slow");
	// 	    });
	// 	});
	// });
});