// var ul = document.getElementsByTagName('ul')[0];
// var ul = document.querySelectorAll('ul')[0];
// var ul = document.getElementsByClassName('ul-class')[0];

// for (var i = 0; i < ul.children.length; i++)
//     console.log(ul.children[i].textContent);

    
// var padre = ul.firstElementChild.parentElement;
// var hijo = document.createElement('li');

// hijo.textContent = 'item nuevo';
// var hermano = padre.firstChild;

// padre.insertBefore(hijo, hermano);

// Insertamos un nuevo elemento hijo 'LI'

var padre = document.querySelector('ul');

 /* var padre = ul.firstElementChild.parentElement; */
 
 var hijo = document.createElement('li');
 hijo.textContent ='nuevo item';
 
 var hermano =padre.children[2];
 padre.insertBefore(hijo,hermano);