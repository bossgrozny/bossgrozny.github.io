$(document).ready(function () {


    $('.alert-sound').delay(10000).fadeOut(600)

    var randoms = Math.floor(1 + (Math.random() * 7));
    $(`.body_sound .body-voice:nth-child(${randoms})`).attr('autoplay', '')
    $('.inputs').animate({
        top: "150px",
    }, 700)

    $('.start-battle').animate({
        top: "300px",
    }, 500);
    $('input').each(function () {
        $('input').on('input', control)
        function control() {
            $('.input_sound .input-voice:first-child').clone().appendTo('.input_sound');
            $('.input_sound .input-voice:last-child').attr('autoplay', '')
            var pattern = /^([0-9])*$/; // 


            if (!pattern.test(this.value)) {
                var numDots = this.value.replace(/[^0-9]/g, '')
                if (pattern.test(numDots)) {   ///  
                    this.value = numDots;
                }
                else {
                    this.value = numDots.substr(0, 6);
                }
            }


        }





    })


    $('.progress').css("opacity", 0);


    $('.btn').on('click', function (e) {
        $('.start_voice').attr('autoplay', '');
        $('.progress').animate({
            opacity: 1,
        }, 500)

        var power1 = $('.team-1 .box_power input').val();
        var health1 = $('.team-1 .box_health input').val();

        var power2 = $('.team-2 .box_power input').val();
        var health2 = $('.team-2 .box_health input').val();
        if ($('input').val() == "") {
            e.preventDefault();
        }
        else {
            $(this).fadeOut();
        }



        function soliders(power, health) {

            this.power = +(power);
            this.health = +(health);

        }

        var team_1 = new soliders(power1, health1);
        var team_2 = new soliders(power2, health2);
        var each_t1_solider_power = Math.floor(team_1.power / 4);
        var each_t2_solider_power = Math.floor(team_2.power / 4);
        var each_t1_solider_health = Math.floor(team_1.health / 4);
        var each_t2_solider_health = Math.floor(team_2.health / 4);
        $('.left .solider .progress-bar').html(each_t1_solider_health)

        $('.right .solider .progress-bar').html(each_t2_solider_health);

        $('.left .solider .progress-bar-striped').animate({
            width: "100%",
        }, 700)
        $('.right .solider .progress-bar-striped').animate({
            width: "100%",
        }, 700)

        $('.attack').css("display","flex").animate({opacity : 1},700)

        $('.left .soliders .solider').attr('power', each_t1_solider_power);
        $('.right .soliders .solider').attr('power', each_t2_solider_power);

    })


    $('.attack').on('click', function (e) {


        $(this).addClass('bakcground_changing')
        var rand = Math.floor(1 + (Math.random() * 4));

        $(`.weapons:nth-child(${rand})`).clone().appendTo('.attack-group-sound');
        $(`.weapons:last-child`).attr('autoplay', '');



        function each_solider(object, health, power, attack) {

            this.object = object;
            this.power = +(power);
            this.health = +(health);
            this.attack = +(attack);
            this.rand_power = Math.floor((this.attack - 8) + (Math.random() * 7));

            this.attack = function () {


                this.health -= this.rand_power;
                $(`${this.object} .progress-bar`).html(this.health);

                if (this.health <= 0) {
                    $(`${this.object}`).animate({
                        opacity: 0,
                    }, 500);
                }


                this.width_back = Math.floor((this.health * 100) / (health));



                $(`${this.object} .progress-bar-striped`).css('background-color', 'background: linear-gradient(90deg, rgba(222,223,18,1) 37%, rgba(33,182,40,0.9359944661458334) 37%);').animate({
                    width: `${(this.width_back)}%`
                }, 500).css('background-color', 'rgba(75, 167, 22, 0.74) !important');




            }





        }

        var team_each_1 = new each_solider(`.left   .soliders .solider:nth-child(${rand})`, $(`.left .solider:nth-child(${rand}) .progress-bar`).html(), $('.left .soliders .solider').attr('power'), $('.right .soliders .solider').attr('power'));
        var team_each_2 = new each_solider(`.right  .soliders .solider:nth-child(${rand})`, $(`.right .solider:nth-child(${rand}) .progress-bar`).html(), $('.right .soliders .solider').attr('power'), $('.left .soliders .solider').attr('power'));
        $('.flash-l').animate({ opacity: 1 }, 400)
        team_each_2.attack();
        $('.flash-l').animate({ opacity: 0 }, 400)
        $('.flash-r').animate({ opacity: 1 }, 400)
        $('.flash-r').animate({ opacity: 0 }, 400)
        team_each_1.attack();

        if ($('.left   .soliders .solider:nth-child(1) .progress-bar').html() < 0 && $('.left   .soliders .solider:nth-child(2) .progress-bar').html() < 0 && $('.left   .soliders .solider:nth-child(3) .progress-bar').html() < 0 && $('.left   .soliders .solider:nth-child(4) .progress-bar').html() < 0) {
            $('.left .solider').animate({
                opacity: 0,
            }, 500).css("display", "none");
            e.preventDefault();
            $(this).fadeOut();
            $('.winnerss p').css("color", "rgba(172, 27, 83, 0.842)")
            $('.winnerss').animate({
                top: '20%',

            }, 700);
            var rand_lose = Math.floor(1 + (Math.random() * 2));
            $(`.lose:nth-child(${rand_lose})`).attr('autoplay', '');
            $('.winnerss .boxes p').html('Computer Win !!!');
            $('.replay .replay-btn').css("display","flex").animate({opacity : 1},700)


        }
        else if ($('.right .soliders .solider:nth-child(1) .progress-bar').html() < 0 && $('.right  .soliders .solider:nth-child(2) .progress-bar').html() < 0 && $('.right   .soliders .solider:nth-child(3) .progress-bar').html() < 0 && $('.right   .soliders .solider:nth-child(4) .progress-bar').html() < 0) {
            $('.right .solider').animate({
                opacity: 0,
            }, 500).css("display", "none");
            e.preventDefault();
            $(this).fadeOut();
            $('.winnerss p').css("color", "rgba(33,182,40,0.9359944661458334)")
            $('.winnerss').animate({
                top: '20%',

            }, 700);
            $(`.win_audio:first-child`).clone().appendTo('.win-sound');
            $(`.win_audio:last-child`).attr('autoplay', '');

            $('.winnerss .boxes p').html('You Win !!!');
            $('.replay .replay-btn').css("display","flex").animate({opacity : 1},700)
        }
       




    })





});