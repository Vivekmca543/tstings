var sectionList = $('[id^=section]').map((index, item) => { return {top: $(item).offset().top, element: item}});
var lastScrollTop = 0;
window.addEventListener('scroll', ()=> {

	var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      	let withinView = sectionList.filter((index,item)=> (item.top < (window.innerHeight + window.scrollY)) && item.top > window.scrollY );
      	console.log(withinView.length);
		if(withinView.length) {
			let cur = window.location.hash.replace('#', ''),
				elementId = withinView[0].element.id;

			if(cur !== elementId) {
				window.location.hash = elementId
				// withinView[0].element.scrollIntoView(true)
			}
		}
   } else {
      // upscroll code
   }
    
});
