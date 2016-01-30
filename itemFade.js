$(document).ready(function () {
				var item1 = "active";
				var item2 = "unactive";
				var item3 = "unactive";
				var item4 = "unactive";
				var item5 = "unactive";
				$("#ITEM1").click(function () {
					if (item2 = "active") {
						$("#item1").fadeIn(1000);
						$("#item2").fadeOut(0);
						item2 = "unactive";
						item1 = "active";
					}
					
					if (item3 = "active") {
						$("#item1").fadeIn(1000);
						$("#item3").fadeOut(00);
						item1 = "active";
						item3 = "unactive";
					}
					
					if (item4 = "active") {
						$("#item1").fadeIn(1000);
						$("#item4").fadeOut(00);
						item1 = "active";
						item4 = "unactive";
					}
					
					if (item5 = "active") {
						$("#item1").fadeIn(1000);
						$("#item5").fadeOut(00);
					}
					
				});
				$("#ITEM2").click(function () {
					if (item1 = "active") {
						$("#item2").fadeIn(1000);
						$("#item1").fadeOut(0);
					}
					
					if (item3 = "active") {
						$("#item2").fadeIn(1000);
						$("#item3").fadeOut(0);
					}
					
					if (item4 = "active") {
						$("#item2").fadeIn(1000);
						$("#item4").fadeOut(0);
					}
					
					if (item5 = "active") {
						$("#item2").fadeIn(1000);
						$("#item5").fadeOut(0);
					}
				});
				
				$("#ITEM3").click(function () {
					if (item1 = "active") {
						$("#item3").fadeIn(1000);
						$("#item1").fadeOut(00);
					}
					
					if (item2 = "active") {
						$("#item3").fadeIn(1500);
						$("#item2").fadeOut(00);
					}
					
					if (item4 = "active") {
						$("#item3").fadeIn(1000);
						$("#item4").fadeOut(00);
					}
					
					if (item5 = "active") {
						$("#item3").fadeIn(1000);
						$("#item5").fadeOut(00);
					}
				});
				
				$("#ITEM4").click(function () {
					if (item1 = "active") {
						$("#item4").fadeIn(1000);
						$("#item1").fadeOut(00);
					}
					
					if (item2 = "active") {
						$("#item4").fadeIn(1000);
						$("#item2").fadeOut(00);
					}
					
					if (item3 = "active") {
						$("#item4").fadeIn(1000);
						$("#item3").fadeOut(00);
					}
					
					if (item5 = "active") {
						$("#item4").fadeIn(1000);
						$("#item5").fadeOut(00);
					}
				});
				
				$("#ITEM5").click(function () {
					if (item1 = "active") {
						$("#item5").fadeIn(1000);
						$("#item1").fadeOut(00);
					}
					
					if (item2 = "active") {
						$("#item5").fadeIn(1000);
						$("#item2").fadeOut(0);
					}
					
					if (item3 = "active") {
						$("#item5").fadeIn(1000);
						$("#item3").fadeOut(0);
					}
					
					if (item4 = "active") {
						$("#item5").fadeIn(1000);
						$("#item4").fadeOut(0);
					}
				});
			});
