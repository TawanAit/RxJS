import {Observable} from 'rxjs';

const observable = Observable.create((observer:any)=>{
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.next('Bye');
    observer.complete();

    // setInterval(()=>{
    //     observer.next('Helooo')
    // },1000)

})

function logItem(value:any){
    const li = document.createElement('li');
    const text = document.createTextNode(value);
    li.appendChild(text);

    document.getElementById('list').appendChild(li)
}

observable.subscribe(
    (value:any) => logItem(value)
)