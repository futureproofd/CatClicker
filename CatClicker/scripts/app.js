$(function(){ //IIFE
	
	//model - name clickcount - img url
	var model = {
        catsId : 0,
		cats : [],
        
        init: function(){
            if(this.cats.length == 0){
                var newId = ++model.catsId;
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
                                         htmlStr += '<li onclick=catClicked()>'+cat.name+'<br>'+'clicks: '+cat.clicks+
                                                    '<br>'+'<img src='+cat.image+'>'+
                                                    '</li>';
                                         });
            this.catList.html(htmlStr);
        }  
    };
    
    var detailView = {
        init : function(){
            //get 
        }
        
    };
		
	//controller -init model, tell view to render
		//method that increases the counter in the model, then in the view and rerenders
	var controller = {
        init : function() {
            model.init();
            listView.init();
            detailView.init();
        },
        
        getCats : function(){
            return model.getAllCats();
        }
    };
    
    //Run first
    controller.init();
    
});