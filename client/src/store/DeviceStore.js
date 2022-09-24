import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor(){
        this._types = []
        this._brands = []
        this._devices = []
        this._baskets = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 2
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
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
    setPage(page){
        this._page = page
    }
    setTotalCount(count){
        this._totalCount = count
    }
    setBaskets(basket){
        this._baskets = basket
    }

    get basket() {
        return this._baskets
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
    get selectedType(){
        this.setPage(1)
        return this._selectedType
    }
    get selectedBrand(){
        this.setPage(1)
        return this._selectedBrand
    }
    get totalCount(){
        return this._totalCount
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }
}