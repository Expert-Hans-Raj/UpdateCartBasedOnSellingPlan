
 $('.dogs-review-spacing').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     arrows: false,
     autoplay: true,
     autoplaySpeed: 2000,
     responsive: [{
             breakpoint: 1100,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
             },
         },
         {
             breakpoint: 767,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 arrows: true,
                 prevArrow: '<button type="button" class="slick-custom-arrow slick-prev"><svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/> </svg></button>',
                 nextArrow: '<button type="button" class="slick-custom-arrow slick-next"><svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/> </svg></button>',
             },
         },
         {
             breakpoint: 200,
             settings: 'unslick',
         },
     ],
 })

 if (window.matchMedia("(max-width: 767px)").matches) {
     $('.mobile-crousal .product-detail__imagess').slick({
         infinite: true,
         slidesToShow: 1,
         dots: true,
         slidesToScroll: 1,
         arrows: false,
         autoplay: false,
     })
 }

 $('.target_size_chart').click(function() {

     $(this).parents('.size-chart-link').find('.size_chart_popup').addClass('active_popup');
     $('#overlay').show();
 })

 $('.cross_popup').click(function() {
     $(this).parent().removeClass('active_popup');
     $('#overlay').hide();
 })

$('.subscribe_heading').click(function() {
    // Remove 'active_radio' class from all siblings and add it to the clicked element's parent
    $(this).parents('.Parent_toggle').children().removeClass('active_radio');
    $(this).parent().addClass('active_radio');

    // Scroll to the element with the 'active_radio' class
    var scrollToElement = $('.active_radio');

    if (scrollToElement.length > 0) {
        $('html, body').animate({
            scrollTop: scrollToElement.offset().top
        }, 500); // Adjust the duration as needed
    }
});





 $('.New-product-template .option-selector__btns label.opt-label').click(function() {
     $(this).addClass('active_label').siblings().removeClass('active_label');
     var selling_id = $(this).find('select#sellings_id_select option:selected').val();
     $(".Parent_toggle form input[name='selling_plan']").val(selling_id);
 })
 $('.All-products-details  #sellings_id_select').change(function() {
     var selling_id = $(this).val();
     $(".Parent_toggle form input[name='selling_plan']").val(selling_id);
 });

 $(document).ready(function() {
     $('.New-product-template .All-products-details .option-selector__btns input:first-of-type').prop("checked", true);
 });


 /* Js for New-Main-product jan 11*/
 /* correct-ammount */
 $(document).ready(function() {
     $('.target_size_chart p').click(function(e) {
         e.preventDefault();
         $('.correct-ammount-pop-content').show();
         $('.correct-ammount-pop-content-wrap').addClass('no-scroll addoverlay');
     });

     $('.correct-ammount-pop-content .close, .addoverlay').click(function(e) {
         e.preventDefault();
         $('.correct-ammount-pop-content').hide();
         $('.correct-ammount-pop-content-wrap').removeClass('no-scroll addoverlay');
     });

     $(document).mouseup(function(e) {
         var popupContainer = $('.correct-ammount-pop-content');
         if (!popupContainer.is(e.target) && popupContainer.has(e.target).length === 0) {
             popupContainer.hide();
             $('.correct-ammount-pop-content-wrap').removeClass('no-scroll addoverlay');

         }
     });
 });

 /* correct-ammount */

 /* First Image Popup js */
 $(document).ready(function() {
     $('.first_image div').click(function(e) {
         e.preventDefault();
         $('.f-popup-container').show();
         $('.f-popup-container-wrap').addClass('no-scroll addoverlay');
     });

     $('.f-popup-container .close, .addoverlay').click(function(e) {
         e.preventDefault();
         $('.f-popup-container').hide();
         $('.f-popup-container-wrap').removeClass('no-scroll addoverlay');
     });

     $(document).mouseup(function(e) {
         if (!$('.f-popup-container').is(e.target) && $('.f-popup-container').has(e.target).length === 0) {
             $('.f-popup-container').hide();
             $('.f-popup-container-wrap').removeClass('addoverlay');
         }
     });
 });

 /* First Image Popup js */
 /* second Image Popup js */
 $(document).ready(function() {
     $('.second_image div').click(function(e) {
         e.preventDefault();
         $('.s-popup-container').show();
         $('.s-popup-container-wrap').addClass('addoverlay');
     });

     $('.s-popup-container .close, .addoverlay').click(function(e) {
         e.preventDefault();
         $('.s-popup-container').hide();
         $('.s-popup-container-wrap').removeClass('addoverlay');
     });

     $(document).mouseup(function(e) {
         if (!$('.s-popup-container').is(e.target) && $('.s-popup-container').has(e.target).length === 0) {
             $('.s-popup-container').hide();
             $('.s-popup-container-wrap').removeClass('addoverlay');
         }
     });
     $('.ingredients-button .custom_button').click(function(e) {
         e.preventDefault();
         $('.s-popup-container').hide();
         $('.s-popup-container-wrap').removeClass('addoverlay');

         // Trigger click on #Ingredients .cc-accordion-item__title
         $('#Ingredients .cc-accordion-item__title').trigger('click');

         // Optionally, scroll to the Ingredients section
         $('html, body').animate({
             scrollTop: $('#Ingredients').offset().top
         }, 500);
     });



 });
 /* second Image Popup js */
 /* third Image Popup js */
 $(document).ready(function() {
     $('.third_image div').click(function(e) {
         e.preventDefault();
         $('.t-popup-container').show();
         $('.t-popup-container-wrap').addClass('no-scroll addoverlay');
     });

     $('.t-popup-container .close, .addoverlay').click(function(e) {
         e.preventDefault();
         $('.t-popup-container').hide();
         $('.t-popup-container-wrap').removeClass('no-scroll addoverlay');
     });

     $(document).mouseup(function(e) {
         var popupContainer = $('.t-popup-container');
         if (!popupContainer.is(e.target) && popupContainer.has(e.target).length === 0) {
             popupContainer.hide();
             $('.t-popup-container-wrap').removeClass('no-scroll addoverlay');

         }
     });
 });

 /* third Image Popup js */

 /* cancel with ease Popup js */
 $(document).ready(function() {
     $('p.cancel_with_ease').click(function(e) {
         e.preventDefault();
         $('.c-popup-container').show();

         $('.c-popup-container-wrap').addClass('addoverlay');
     });

     $('.c-popup-container .close, .addoverlay').click(function(e) {
         e.preventDefault();
         $('.c-popup-container').hide();
         $('.c-popup-container-wrap').removeClass('addoverlay');

     });
 });
 $('a.new_mian_faq').click(function(e) {
     e.preventDefault();

     // Hide the popup container and remove overlay
     $('.c-popup-container').hide();
     $('.c-popup-container-wrap').removeClass('addoverlay');

     // Show the #faq-faq-s-with-dr-dench div
     $('#faq-faq-s-with-dr-dench').show();

     // Scroll to the #faq-faq-s-with-dr-dench element
     $('html, body').animate({
         scrollTop: $('#faq-faq-s-with-dr-dench').offset().top - 50 // Adjust the value as needed
     }, 1000, function() {
         // Focus on the #faq-faq-s-with-dr-dench element after scrolling
         $('#faq-faq-s-with-dr-dench').focus();
     });
 });




 /* cancel with ease Popup js */

 $(document).ready(function() {
     $(".subscribe_heading").click(function() {
         var clickedSrc = $(this).data("src");

         $("#FeaturedMedia-template--15337120464985__main-24646557204569-wrapper .rimage__image").attr("src", clickedSrc);
         $("#FeaturedMedia-template--15337120464985__main-24646557204569-wrapper .rimage__image").attr("srcset", clickedSrc);
     });
 });

 $(document).ready(function() {
     $(".get_one_time").click(function() {
         var clickedSrc = $(this).data("src");
         console.log(clickedSrc);
         var $targetImage = $("#FeaturedMedia-template--15337120464985__main-24646557204569-wrapper .rimage__image");

         // Preload the image
         var tempImage = new Image();
         tempImage.onload = function() {
             // Replace the image source once it's loaded
             $targetImage.attr("src", clickedSrc);
             $targetImage.attr("srcset", clickedSrc);
         };
         tempImage.src = clickedSrc;
     });
 });


 $(document).ready(function() {
     $("img.get_one_time_img").click(function() {
         var getsrc = $(".get_one_time").attr("data-src");
         console.log('getsrcgetsrcgetsrc' + getsrc);
         $("img.pswp__img").attr("src", getsrc);
         $("img.pswp__img").addClass("one-time-up");
     });
 });

 /* Add Free product */

$(document).ready(function() {
    $(".subscribe_add").click(function() {
        var freeGiftItems = $(".free_gift_item");
        var currentIndex = 0;

        function processNextItem() {
            if (currentIndex < freeGiftItems.length) {
                var productId = freeGiftItems.eq(currentIndex).attr('id');
setTimeout(function() { 
                checkIfProductInCart(productId, function(isProductInCart) {
                    if (!isProductInCart) {
                        addProductToCart(productId, function() {
                            // Process the next item after adding the current product
                            currentIndex++;
                            processNextItem();
                        });
                    } else {
                        console.log('Product with ID ' + productId + ' already exists in the cart.');
                        // Process the next item if the current product already exists
                        currentIndex++;
                        processNextItem();
                    }
                });
     }, 500);

            } else {
                // Trigger click event only when all items are processed
                $(".hide-default-subscribe").trigger("click");
            }
          
        }

        // Start processing the items
        processNextItem();
    });

    // Function to check if a product with a given ID is in the cart
    function checkIfProductInCart(productId, callback) {
        $.ajax({
            type: 'GET',
            url: '/cart.js',
            dataType: 'json',
            success: function(cartData) {
             // var isProductInCart = true;
               var isProductInCart = cartData.items.some(item => item.variant_id == productId);
              console.log("isProductInCart="+isProductInCart);
              console.log("cartproductId"+productId)
                callback(isProductInCart);
            }
        });
    }

    // Function to add a product with a given ID to the cart
    function addProductToCart(productId, callback) {
        $.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data: {
                quantity: 1,
                id: productId
            },
            dataType: 'json',
            success: function(response) {
                if (response) {
                    console.log('Product added to cart:', response.product_id);
                    callback(); // Continue processing the next item after adding the current product
                } else {
                    console.log('Failed to add product to cart.');
                    // Continue processing the next item even if the current product fails to add
                    callback();
                }
            }
        });
    }
});




 /* Add Free Product */
 /* Remove Free Product */


/* Remove product on key-press */
$(document).on("keypress", "input.upcart-product-quantity-inputcart", function (event) {
   var productIds = [];
    var freeGiftItems = $(".free_gift_item");

    setTimeout(function () {
        freeGiftItems.each(function () {
            var productId = $(this).attr('id');
            productIds.push(productId);
        });

        if (productIds.length > 0) {
            updateCartBasedOnSellingPlan(productIds, 0);
        }
    }, 8000);
});
/* Remove product on key-press */ 
/* Remove Form Cart Drawer */
$(document).on("blur", ".styles_ProductRow__stepper__Cs6Bw", function () {
  var productIds = [];
    var freeGiftItems = $(".free_gift_item");

    setTimeout(function () {
        freeGiftItems.each(function () {
           
            var productId = $(this).attr('id');
            productIds.push(productId);
        });

        if (productIds.length > 0) {
            updateCartBasedOnSellingPlan(productIds, 0);
        }
    
    }, 1000);
})
/* Remove Form Cart Drawer */ 
/* Remove From Cart on click remove icon */


$(document).on("click", ".quantity__remove_custom", function (event) {
    var currentUrl = window.location.href;

    var removeId = $(this).attr("remove_var_id");
 var recartUpdates = { [removeId]: 0 };
 var removeparams = {
        type: "POST",
        url: "/cart/update.js",
        data: {
            updates: recartUpdates
        },
        dataType: "json",
        success: function (stuff) {
           $.ajax({
        url: window.location.href,
        type: 'GET',
        success: function (data) {
            console.log('Received data:', data);  // Log the received data to the console

            // Extract HTML directly from the #MainContent element
            var mainContentHtml = $(data).filter('#MainContent').html();

            if (mainContentHtml) {
                // If #MainContent exists, log its HTML and replace the content
                console.log('Extracted HTML:', mainContentHtml);
                $('#MainContent').html(mainContentHtml);

                // You can do further processing with the updated content here
            } else {
                console.error('#MainContent not found in the received data.');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error fetching cart HTML:', status, error);
        }
    });
            console.log('=====delete product ids===', removeId);
            
        },
    };

    $.ajax(removeparams);

    setTimeout(function () {
     
        var productIds = [];
  
        var freeGiftItems = $(".free_gift_item");
        freeGiftItems.each(function () {
            var productId = $(this).attr('id');
            productIds.push(productId);
        });

        if (productIds.length > 0) {
            removeCartBasedOnSellingPlan(productIds, 0);
        }
    }.bind(this), 1500);  
});




/* Remove From Cart on click remove icon */
// 
$(document).on("click", ".styles_TrashButton__deleteButton__8uIHq", function () {
 
    var productIds = [];
    var freeGiftItems = $(".free_gift_item");

    setTimeout(function () {
        freeGiftItems.each(function () {
           
            var productId = $(this).attr('id');
            productIds.push(productId);
        });

        if (productIds.length > 0) {
            updateCartBasedOnSellingPlan(productIds, 0);
        }
    
    }, 1000);
 
});

function updateCartBasedOnSellingPlan(productIds, index) {
    var freeGiftItems = $(".free_gift_item");

    if (index < freeGiftItems.length) {
        var productId = productIds[index];
        var cartUpdates = { [productId]: 0 };

        $.ajax({
            type: 'GET',
            url: '/cart.js',
            dataType: 'json',
            success: function (cartData) {
                if (cartData.items.length > 0) {
                    // Check if any item has selling_plan_allocation defined
                    const hasSellingPlanAllocation = cartData.items.some(item => item.selling_plan_allocation !== undefined);

                    // Displaying a console log with the result of the check
                    console.log("hasSellingPlanAllocation=" + hasSellingPlanAllocation);

                    if (!hasSellingPlanAllocation) {
                        // If selling_plan_allocation does not exist, remove the products
                        removeProductFromCart(productId, function () {
                            // Move to the next item in the array
                            updateCartBasedOnSellingPlan(productIds, index + 1);
                        });
                    } else {
                        // Selling plan allocation exists, move to the next item
                        updateCartBasedOnSellingPlan(productIds, index + 1);
                    }
                }
            }
        });
    } else {
        // All items processed, update the cart for testing
        updateCartForTesting();
    }
}

function removeCartBasedOnSellingPlan(productIds, index) {
    var freeGiftItems = $(".free_gift_item");

    if (index < freeGiftItems.length) {
        var productId = productIds[index];
        var cartUpdates = { [productId]: 0 };

        $.ajax({
            type: 'GET',
            url: '/cart.js',
            dataType: 'json',
            success: function (cartData) {
                if (cartData.items.length > 0) {
                    // Check if any item has selling_plan_allocation defined
                    const hasSellingPlanAllocation = cartData.items.some(item => item.selling_plan_allocation !== undefined);

                    // Displaying a console log with the result of the check
                    console.log("hasSellingPlanAllocation=" + hasSellingPlanAllocation);

                    if (!hasSellingPlanAllocation) {
                        // If selling_plan_allocation does not exist, remove the products
                        removeProductFromCart(productId, function () {
                            // Move to the next item in the array
                            removeCartBasedOnSellingPlan(productIds, index + 1);
                        });
                    } else {
                        // Selling plan allocation exists, move to the next item
                        removeCartBasedOnSellingPlan(productIds, index + 1);
                    }
                }
            }
        });
    } else {
        // All items processed, update the cart for testing
       $.ajax({
        url: window.location.href,
        type: 'GET',
        success: function (data) {
            console.log('Received data:', data);  // Log the received data to the console

            // Extract HTML directly from the #MainContent element
            var mainContentHtml = $(data).filter('#MainContent').html();

            if (mainContentHtml) {
                // If #MainContent exists, log its HTML and replace the content
                console.log('Extracted HTML:', mainContentHtml);
                $('#MainContent').html(mainContentHtml);

                // You can do further processing with the updated content here
            } else {
                console.error('#MainContent not found in the received data.');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error fetching cart HTML:', status, error);
        }
    });
       location.reload(true);
    }
}

function removeProductFromCart(productId, callback) {
    var cartUpdates = { [productId]: 0 };

    var params = {
        type: "POST",
        url: "/cart/update.js",
        data: {
            updates: cartUpdates
        },
        dataType: "json",
        success: function (stuff) {
            console.log('=====delete product ids===', productId);
            callback();
        },
    };

    $.ajax(params);
}

function updateCartForTesting() {
    // Update cart for testing purposes
    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: {
            quantity: 1,
            id: null
        },
        dataType: 'json',
        success: function (response) {
            if (response) {
                console.log('Product added to cart:', response.product_id);
            } else {
                console.log('Refresh to add product to cart.');
            }
        }
    });
}

 /* Remove Free Product */
/* Add sellings_id on subscription Product by default */ 

var btnInputs = document.querySelectorAll(".option-selector__btns input.opt-btn");

btnInputs.forEach(function(btnInput) {
    btnInput.addEventListener("click", function() {
        var selectElement = document.getElementById("sellings_id_select");
        var sellingPlansValue = selectElement.getAttribute("data-selling-plans").trim();
        var inputElement = document.querySelector("input[name='selling_plan']");
        inputElement.value = sellingPlansValue;
        // console.log('Updated selling_plan value:', sellingPlansValue);
    });
});
/* Add sellings_id on subscription Product by default */




$(document).ready(function() {
    /* add checked attribuite on clicked element */
    $(".one-time-opt-label").click(function() {
      
        $(".opt-label").removeClass("selected_item active_label");
        $(".option-selector__btns input").removeClass("checked");
        var selectedIdc =   $(this).attr("data_variant_id");
        var clsname = ".selected_"+selectedIdc;
        var inputCls =".inputselected_"+selectedIdc;
        $(clsname).addClass("selected_item active_label");
        $(inputCls).addClass("checked");
       var selectedUpPrice =   $(this).attr("dis_updated_price");
        setTimeout(function () {
        $('.subscription-u-p').find('.large-title').text(selectedUpPrice);
        }, 0);
    });
   $(".subscribe-opt-label").click(function() {
     $(".opt-label").removeClass("selected_item active_label");
     $(".option-selector__btns input").removeClass("checked");
        var selectedIdc =   $(this).attr("data_variant_id");
        var clsname = ".selected_"+selectedIdc;
        var inputCls =".inputselected_"+selectedIdc;
        $(clsname).addClass("selected_item active_label");
        $(inputCls).addClass("checked");
       var selectedUpPrice =   $(this).attr("dis_updated_price");
        setTimeout(function () {
        $('.subscription-u-p').find('.large-title').text(selectedUpPrice);
        }, 0);
     
    });

    /* add checked attribuite on clicked element */

    /* addtoCartOneTime Purchase */
    $(".one_time_addto_cart").click(function() {
        var selectedId = $(".selected_item").attr("data_variant_id");
        $.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data: {
                quantity: 1,
                id: selectedId
            },
            dataType: 'json',
            success: function(response) {
                if (response) {
                    console.log('One Time Product added to cart:', response.selectedId);
                   
                } else {
                    console.log('Failed to add One Time product to cart.');
                   
                }
            }
        });
    });



    /* addtoCartOneTime Purchase */
/* Remove Free Product Quantity */
  $(".subscribe_add").click(function() {

      setTimeout(function () {
       
   var freeGiftItems = $(".free_gift_item");
    var upCartProductItems = $(".upcart-product-item");

    upCartProductItems.each(function() {
        var upCartItem = $(this);
        var upCartItemId = upCartItem.attr("id");

        freeGiftItems.each(function() {
            var freeGiftItemId = $(this).attr("id");

            if (upCartItemId.includes(freeGiftItemId)) {
                var quantityField = upCartItem.find("div .styles_QuantityField__SXbrJ");
                 quantityField.remove();
            }
        });
    });
         
      }, 5000);
 
});
function processItems() {
    var freeGiftItems = $(".free_gift_item");
    var upCartProductItems = $(".upcart-product-item");

    upCartProductItems.each(function() {
        var upCartItem = $(this);
        var upCartItemId = upCartItem.attr("id");

        freeGiftItems.each(function() {
            var freeGiftItemId = $(this).attr("id");

            if (upCartItemId.includes(freeGiftItemId)) {
                var quantityField = upCartItem.find("div .styles_QuantityField__SXbrJ");
                quantityField.remove();
            }
        });
    });
}

// Call the function after a delay of 5000 milliseconds
setTimeout(processItems, 1000);

// Call the function on window load
$(window).on("load", function() {
    processItems();
});

/* Remove Free Product Quantity */ 
  
});




 /* Js for New-Main-product jan 11*/
