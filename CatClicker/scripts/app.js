/*~~~~~~~~~~~~~Model ~~~~~~~~~~~~~*/
var model = {
    catsId : 0,
    currentCat : null,
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
           this.currentCat = this.cats[0];
        } //else case: eventually accept new cat input
    },

    getAllCats : function() {
        return this.cats;
    },

    getCat : function(id){
        return this.cats[id];
    }

};


/*~~~~~~~~~~~~~Views ~~~~~~~~~~~~~*/
var listView = {
    init : function() {
        this.catListElem = document.getElementById('catList');
        this.render();
    },

    render : function(){
        var cat, elem, i;

        this.catListElem.innerHTML = '';
        var cats = controller.getCats();

        for(i = 0; i < cats.length; i++){
            cat = cats[i];
            elem = document.createElement('li');
            elem.textContent = cat.name;

            elem.addEventListener('click',(function(catCopy){
                return function(){
                    controller.setCurrentCat(catCopy);
                    detailView.render();
                };
            })(cat));
            this.catListElem.appendChild(elem);
        }
    }  
};

var detailView = {
    init : function(){
        //Cat detail div
        this.catElem = document.getElementById('catDetail')
        this.catNameElem = document.getElementById('catName');
        this.catImgElem = document.getElementById('catImg');
        this.catCountElem = document.getElementById('catCount');

        //register clicker
        this.catImgElem.addEventListener('click', function(){
            controller.setClick();
        })
        this.render();
    },

    render : function(){
        var currentCat = controller.getCurrentCat();
        this.catCountElem.textContent = currentCat.clicks;
        this.catNameElem.textContent = currentCat.name;
        this.catImgElem.src = currentCat.image;
    }

};


/*~~~~~~~~~~~~~Controller~~~~~~~~~~~~~*/
var controller = {
    init : function() {
        model.init();
        listView.init();
        detailView.init();
    },

    getCats : function(){
        return model.getAllCats();
    },

    getCurrentCat : function(){
        return model.currentCat;
    },

    setCurrentCat : function(cat){
      model.currentCat = cat;  
    },

    setClick : function(){
        model.currentCat.clicks++;
        detailView.render();
    }
};

//Run first
controller.init();
