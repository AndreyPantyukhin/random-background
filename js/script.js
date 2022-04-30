//Изменение градиента на фоне по клику
function changeColors(){
    //перечисляем используемые в Hex - кодах символы
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    //1-я часть градиента
    var hexcode = '';
    
    //выбираем рандомную комбинацию
    for(var i=0;i < 6;i++){
        var random_index = Math.floor(Math.random() * hex_numbers.length);
        
        hexcode += hex_numbers[random_index]
    }

    //2-я часть градиента
    var hexcode_2 ='';

    //выбираем рандомную комбинацию. Да, второй раз.
    for(var i=0;i < 6;i++){
        var random_index_2 = Math.floor(Math.random() * hex_numbers.length);
    
        hexcode_2 += hex_numbers[random_index_2]
    }

    //привязываем переменную к id в HTML
    document.getElementById("hex-code-1").innerHTML = hexcode;
    document.getElementById("hex-code-2").innerHTML = hexcode_2;

    //меняем CSS
    document.getElementsByTagName("body")[0].style.background = `linear-gradient(#${hexcode}, #${hexcode_2}`
}


