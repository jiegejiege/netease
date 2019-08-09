

export default{
    namespace:'audioResource',
    state:{
        audioResource:[],
        songDetail:[{name:'',picUrl:''}],
    },
    reducers:{
        setAudioResource(state,action){
            return {...state,...{audioResource:[...state.audioResource,action.payload]}}
        },
        setSongDetail(state,action){
            return {...state,...{songDetail:[...state.songDetail,action.payload]}}
        }
    },
    effects:{
        
    }
}