$(function(){ //IIFE
	
	//model - name clickcount - img url
	var model = {
        catsId : 0,
		cats : [],
        
        init: function(){
            if(this.cats.length == 0){
                var newId = model.catsId;
                this.cats.push({
                    id : newId,
                    image : './images/cat1.jpg',
                    name : 'Max',
                    clicks : 0
                });
                ++newId;
                this.cats.push({
                    id : newId,
                    image : './images/cat2.jpg',
                    name : 'Juni',
                    clicks : 0
                });
                ++newId;
                this.cats.push({
                    id : newId,
                    image : './images/cat3.jpg',
                    name : 'Toby',
                    clicks : 0
                });
            } //else case: eventually accept new cat input
        },
        
        getAllCats : function() {
            return this.cats;
        },
        
        getCat : function(id){
            return this.cats[id];
        }
        
	};
	
	//2 views - cat list - and cat image w clicks
	var listView = {
		init : function() {
            //get list via id using jquery
            this.catList = $('#catList');
            listView.render();
        },
        
        render : function(){
            var htmlStr = '';

            controller.getCats().forEach(function(cat){
                                            htmlStr += '<li>'+cat.name+'<br>'+'clicks: '+cat.clicks+'<button id='+cat.id+'>View Detail</button></li>';
                                         });

           this.catList.html(htmlStr);
           controller.getCats().forEach(function(cat){
                            this.button = $('#'+cat.id);
                            this.button.click(function(){
                                                controller.getSingleCat(cat);
                                                });
                                        });
        }  
    };
    
    var detailView = {
        init : function(cat){
            this.catDetail = $('#catDetail');
            detailView.render(cat);
        },
        
        render : function(cat){
            var htmlStr = '';
            htmlStr +=   '<img id='+cat.id+'img' +' src='+cat.image+'>'+'<br>';
            this.catDetail.html(htmlStr);
            this.catDetailImg = $('#'+cat.id+'img');
            this.catDetailImg.click(function(){
               controller.setClick(cat.id);
            });
            this.renderClick(cat.clicks);
        },
        
        renderClick : function(clickCount){
            this.catClicks = $('#catClicks');
            this.catClicks.html(clickCount);
        }
        
    };
		
	//controller -init model, tell view to render
		//method that increases the counter in the model, then in the view and rerenders
	var controller = {
        init : function() {
            model.init();
            listView.init();
        },
        
        getCats : function(){
            return model.getAllCats();
        },
        
        getSingleCat : function(cat){
            detailView.init(cat);
        },
        
        setClick : function(id){
            var cat = model.getCat(id);
            detailView.renderClick(cat.clicks++);
        }
    };
    
    //Run first
    controller.init();
    
});