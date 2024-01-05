import axios from "axios";

export const BaseUrl = axios.create({
    baseURL: 'https://one-api.ir/cook'
})


export const getRandomFood = ()=>{
    return BaseUrl({
        method:'post',
        url:`/?token=${'219612:6595ea8994722'}&action=rand`,
    })
}

export const getAllFood = ()=>{
    return BaseUrl({
        method:'post',
        url:`/?token=${'219612:6595ea8994722'}&action=search&q=${'خورش قیمه قارچ'}`,
    })
}