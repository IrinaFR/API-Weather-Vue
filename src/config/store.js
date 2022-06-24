import { createStore } from 'vuex'
import axios from 'axios'

const test = createStore({
	state () {
		return {
			API_key: 'X-Yandex-API-Key:666b0be3-fb56-4287-b453-7ca72829cb6a',
			url: 'https://api.weather.yandex.ru/v2/informers?',
			lat: 'lat=45.04',
			lon: 'lon=38.98',
			lang: 'lang=ru_RU',
			wheather: [],
			isLoad: true
		}
	},
	getters:{
		getUrl(state){
			return state.url
		}
	},
	mutations:{
		setWheather(state,data){
			for(let city in data){
				state.wheather.push(data[city])
			}
			state.isLoad = false
		}
	}, 
	actions: {
		async loadWheather(){
			const data = await axios.get('https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393&extra=true',{
				headers: {
					'X-Yandex-API-Key': '666b0be3-fb56-4287-b453-7ca72829cb6a',
					'content-type': 'application/x-www-form-urlencoded',
					'Access-Control-Allow-Origin': '*'
				},
				responseType: 'json'
			})
			this.commit('setWheather',data)
			console.log(data)
		}
	}
})

export default test