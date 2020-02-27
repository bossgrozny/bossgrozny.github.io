window.addEventListener('load', function (e) {


    var header_text = document.querySelector('header .bottom h1');
    console.log(header_text);
    var btn_header = document.querySelector('header .bottom .btn');
    console.log(btn_header);
    console.log(window)


  
    // var first =  header_text.innerHTML.substr(0,0);
    // var second =  header_text.innerHTML.substr(0,3);
    // var third = header_text.innerHTML.substr(18,16);
    var text =  header_text.innerHTML;

    header_text.innerHTML = '';

 
    var i = 0;

    function header_write(){
        header_text.innerHTML += text.charAt(i);

        i++;
    }

    setInterval(header_write,150);

    btn_header.addEventListener('click',function(){
    
    })
   
});
