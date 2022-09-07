import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 3, name: 'Лампи'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Liebherr'}
        ]
        this._devices = [
            {id: 1, name: "10W", price: 15, rating: 0, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 2, name: "CNef", price: 12999, rating: 0, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 3, name: "newss", price: 15999, rating: 0, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 4, name: "testik", price: 3422, rating: 0, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'}

        ]
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(device){
        this._devices = device
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
}