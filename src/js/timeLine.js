import { validateInput } from "./validate";
export class TimeLine {
    constructor (element){
        this.element = element;
    }
    static createElement(type,className,content){
        let element = document.createElement(type);
        if(className !== null || className !== undefined){
            element.classList.add(className)
        }
        if(content !== null || content !== undefined){
            element.textContent = content;
        }
        return element;
    }
    init(){
        let input = this.element.querySelector('.timeLine-input')
        let form = this.element.querySelector('.timeLine-form')
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition ((data)=>{
                    const { latitude, longitude } = data.coords;
                    let coord = `[${latitude},${longitude}]`
                    let list = this.element.querySelector('.timiLine-list');
                    let date = new Date(2021, 4, 26, 11, 35, 55);
                    date.toLocaleDateString("ru")
                    let message = TimeLine.createElement('div','timeLine-list__item',null);
                    let messageConteiner = TimeLine.createElement('div','timeLine-list__item__conteiner',null);
                    let messageContent = TimeLine.createElement('p','timeLine-list__item__content',input.value);
                    let messageDate = TimeLine.createElement('p','timeLine-list__item__date',date);
                    let messageCoord = TimeLine.createElement('p','timeLine-list__item__date',coord);
                    messageConteiner.appendChild(messageContent)
                    messageConteiner.appendChild(messageDate)
                    message.appendChild(messageConteiner)
                    message.appendChild(messageCoord)
                    list.appendChild(message)
                },(err)=>{
                    let messages = TimeLine.createElement('div','timeLine-list__item__error');
                    let messagesConentHeader = TimeLine.createElement('div','timeLine-list__item__error__header','Что-то пошло не так');
                    let messagesConentDesk = TimeLine.createElement('div','timeLine-list__item__error__header','К сожалению нам не удалось определить геолокацию, укажите ее самии ниже');
                    let messagesConentInput = TimeLine.createElement('input','timeLine-list__item__error__input',null);
                    let messagesConentbtnOK = TimeLine.createElement('button','timeLine-list__item__error__ok','Ок');
                    let messagesConentbtnNull = TimeLine.createElement('button','timeLine-list__item__error__null','Закрыть');
                    messages.appendChild(messagesConentHeader)
                    messages.appendChild(messagesConentDesk)
                    messages.appendChild(messagesConentInput)
                    messages.appendChild(messagesConentbtnOK)
                    messages.appendChild(messagesConentbtnNull)
                    this.element.appendChild(messages);
                    messagesConentbtnOK.addEventListener('click',()=>{
                        let list = this.element.querySelector('.timiLine-list');
                        let date = new Date();
                        let message = TimeLine.createElement('div','timeLine-list__item',null);
                        let messageConteiner = TimeLine.createElement('div','timeLine-list__item__conteiner',null);
                        let messageContent = TimeLine.createElement('p','timeLine-list__item__content',input.value);
                        let messageDate = TimeLine.createElement('p','timeLine-list__item__date',date);
                        let value
                        if(validateInput(messagesConentInput.value)){
                            const {latitude, longitude} = validateInput(messagesConentInput.value);
                            value = `[${latitude}${longitude}]`
                        }else{
                            throw(new Error('Не верный формат координат'))
                        }
                        let messageCoord = TimeLine.createElement('p','timeLine-list__item__date',value);
                        console.log(validateInput(messagesConentInput.value))
                        messageConteiner.appendChild(messageContent)
                        messageConteiner.appendChild(messageDate)
                        message.appendChild(messageConteiner)
                        message.appendChild(messageCoord)
                        list.appendChild(message)
                        messages.remove();
                    })
                    messagesConentbtnNull.addEventListener('click',()=>{
                        messages.remove();
                    })
                })
            }
            console.log(navigator.geolocation.getCurrentPosition)
        })
    }
}