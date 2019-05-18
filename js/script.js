
function day2() {
    let day2 = document.querySelectorAll('#calendar2 tbody td');
    for (let i = 0; i < day2.length; i++) {

        day2[i].onclick = function() {
            let addLocalStorage = i-1 +'.' + parseFloat(parseFloat(this.parentNode.parentNode.parentNode.querySelector('thead td:nth-child(2)').dataset.month) + 1) + '.' + this.parentNode.parentNode.parentNode.querySelector('thead td:nth-child(2)').dataset.year;
            let event = prompt('Введите событие','Событие 1');
            localStorage.setItem(addLocalStorage,event);
            window.location.reload();
        }

    }

}
localStorage.removeItem(event);
function Calendar2(id, year, month) {
    let lastDay = new Date(year, month+1 ,0).getDate(); // узнаем количество дней в месяце
    let D = new Date(year, month, lastDay); //полная дата последнего дня месяца
    let lastDayOfWeek = new Date(D.getFullYear(),D.getMonth(),lastDay).getDay(); // день недели ПОСЛЕДНЕГО дня месяца
    let firstDayOfWeek = new Date(D.getFullYear(),D.getMonth(),1).getDay();
    let calendar = '<tr>';
    // TODO: кнопка сегодня
    var month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];


    if (firstDayOfWeek !== 0) {
        for(let i = 1; i < firstDayOfWeek; i++) calendar += '<td>';
    }else{
        for(let i = 0; i < 6; i++) calendar += '<td>';
    }
    for(let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && D.getFullYear() === new Date().getFullYear() && D.getMonth() === new Date().getMonth()) {
            let dateEventToday = (i+'.'+(D.getMonth()+1)+'.'+D.getFullYear());

            if(localStorage.getItem(dateEventToday)){
                calendar += '<td class="today">' + i + '<p>' + localStorage.getItem(dateEventToday) + '</p>';

            }else {
                calendar += '<td class="today">' + i;
            }




        }else{
            let dateEventToday = (i+'.'+(D.getMonth()+1)+'.'+D.getFullYear());

            if(localStorage.getItem(dateEventToday)){
                calendar += '<td class="add-event">' + i+ '<p>' + localStorage.getItem(dateEventToday)+ '</p>';

            }else {
                calendar += '<td>' + i;
            }
        }
        if (new Date(D.getFullYear(),D.getMonth(),i).getDay() === 0) {
            calendar += '<tr>';
        }
    }

    for(let i = lastDayOfWeek; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#'+id+' tbody').innerHTML = calendar;
    document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#'+id+' tbody tr').length < 5) { // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#'+id+' tbody').innerHTML += '<tr><td><td><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }



}


document.querySelector('#today').onclick = function(){
    window.location.reload();
}


Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());

day2();

// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
day2()
}

// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
    day2()
}



