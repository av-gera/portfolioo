/*FILTER*/
$(function() {
	let filter = $ ("[data-filter]");
	filter.on("click", function(event) {
		event.preventDefault();
		
		let cat = $(this).data('filter');

		if(cat == 'all') {
			$("[data-cat").removeClass("hide");
		} else {
			$("[data-cat]").each(function(){
				let workCat = $(this).data('cat');
	
				if(workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			});
		}		
	});


/*Modal*/
	let modalCall = $("[data-modal]");
	let modalClose = $("[data-close]");

	modalCall.on("click", function(event){
		event.preventDefault()
		let $this = $(this);
		let modalId = $this.data('modal');
		$(modalId).addClass('show');
		setTimeout(function() {
			$(modalId).find(".modal__dialog").css({
				transform: "rotateX(0)"
			});
		}, 200);
	});

	modalClose.on("click", function(event){
		event.preventDefault()
		let $this = $(this);
		let modalParent = $this.parents('.modal');
		modalParent.removeClass('show');
	});



/*Mobile nav*/

const navToggle = $("#navToggle");
const nav = $("#nav");

navToggle.on("click", function(event) {
				event.preventDefault();

				nav.toggleClass("show");
});

});




