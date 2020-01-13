/*global $*/
$(document).ready(function(){
    showCategories()
    showProducts()
})

function showCategories() {
    $.get( "/categories", function( data ) {
        var html = ''
        data.forEach(function(category) {
            html = html + '<li><a href="#" onClick="showProducts('+category.id+')">'+category.name+'</a></li>'
        })
        $('#categories').html(html)
    });
}

//todo: implement showProducts method
function showProducts(categoryId) {
    if(categoryId) {
        var url = '/categories/'+ categoryId +'/products';
    } else {
        var url = '/products'   
    }
    $.get(url, function(data) {
        var html = '';
        data.forEach(
            function(product) {
                html = html + '<div class="product">'
                  
                  +  '<h2>'+product.name+'</h2>'
                  +  '<h2>Id: '+product.id+'</h2>'
                  +  '<p>Descriere: '+product.description+'</p>'
                  +  '<p>Pret: '+product.price+'</p>'
                  +  '<p>Categorie: '+product.category.name+'</p>'
                + '</div>';
                
                html = html + '<button id="button" type="button" style="padding: 10px; margin-left: 30px; " onclick="myFunction('+product.id+','+categoryId+')">Adauga in cos</button>'
                
                if(product.reviews) {
                    product.reviews.forEach(
                        function(reviewData) {
                            html = html + reviewData.name + ' ' + reviewData.content;
                            html = html + '<br>';
                        }
                    )
                }
                
                
            }
        )
        $('#content').html(html);
    })
}

function myFunction(productId,categoryId){
   if(categoryId && productId) {
        var url = '/categories/'+ categoryId +'/products/'+productId;
    } else {
        var url = '/products/'   +productId
    }
    
    alert(productId);
}