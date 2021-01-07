window.onload = function(){
	let burgerButton = document.getElementById('burger-button');
	let navigation = document.getElementById('navigation');
	let isOpen = false;
	burgerButton.onclick = function(){
		navigation.classList.toggle('active');		
	}


	let links = document.querySelectorAll('.navigation-link');

	links.forEach(link => {
		link.addEventListener('click', function(e){
			e.preventDefault();
			const blockID = this.getAttribute('href');
    
		    document.querySelector(blockID).scrollIntoView({
		      behavior: 'smooth',
		      block: 'start'
		    });
		});
	});
}

let tabNavs = document.querySelectorAll(".tab-link");
let tabPanes = document.querySelectorAll(".content-tab");

for (let i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    let activeTabAttr = e.target.getAttribute("data-tab");

    for (let j = 0; j < tabNavs.length; j++) {
      let contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active-tab-link");
        tabPanes[j].classList.add("content-tab-active"); 
      } else {
        tabNavs[j].classList.remove("active-tab-link");
        tabPanes[j].classList.remove("content-tab-active");
      }
    };
  });
}