$(document).ready(function () {





    var textes = '';
    var repetings = '';
    var repetings2 = '';


    $('.random_window input').fadeOut(0).delay(400).fadeIn(700);
    $('.event .button-event').fadeOut(0).delay(400).fadeIn(1200);
    $('.result').fadeOut(0).delay(400).fadeIn(1600);

    $('.random_window input').on('input',function(){
        $('.button_audio audio:first-of-type').clone().appendTo('.button_audio');
        $('.button_audio audio:last-child').attr('autoplay','');
    })

  
    $('.event .button-event').click(function () {
    
       
        var value_input = $('input').val();
        var array_name = value_input.split(',');
        console.log(array_name)
    
        var index = array_name.length;
        var solve = Math.ceil(index / 2)

        for (var i = 0; i < solve; i++) {

            var randoms = Math.floor(Math.random() * (array_name.length));
            console.log(randoms)


            var forleft = new set_left(randoms);
            forleft.func()


            function set_left(indexes) {
                this.indexes = indexes;
                this.text = array_name[this.indexes];
                
                this.func = function () {
                    $('.result .left .btn-clone:first-of-type').clone().appendTo('.result .left').addClass('btn-clone-add');
                    $('.result .left .btn-clone:last-child').html(this.text);
                   
                    array_name.splice(this.indexes, 1);
                }



            }
           




        }

        var index = array_name.length;



        for (var h = 0; h < (Math.floor(index)); h++) {





            var forright = new set_right(h);
            console.log(h)
            forright.func()


            function set_right(indexes) {
                this.indexes = indexes;

                this.text = array_name[this.indexes];
                this.func = function () {



                    $('.result .right .btn-clone:first-of-type').clone().appendTo('.result .right').addClass('btn-clone-add');
                    $('.result .right .btn-clone:last-child').html(this.text);

                }



            }





        }
        
      
        $('.result .right .btn-clone:last-child').css('border-bottom','5px solid red');
        $('.result .left .btn-clone:last-child').css('border-bottom','5px solid red');

        
      
      










    })


});