$(document).ready(function(){

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

	$("#first_tab").click(function(){
		tab_switch("#first_tab", "#work_experience");
	});

	$("#second_tab").click(function(){
		tab_switch("#second_tab", "#involvement");
	});

	$("#third_tab").click(function(){
		tab_switch("#third_tab", "#projects");
	});

});