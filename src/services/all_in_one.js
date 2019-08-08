import { post,get } from '../utils/request';

//请求轮播图
export function getBanner() {
  return get('/banner');
}
export function getReco() {
  return get('/top/playlist',{limit:9});
}
//获取精品歌单
export function getNewSong() {
  return get('/top/playlist/highquality',{limit:9});
}
//获取热门话题

export function getHotComment() {
  return get('/hot/topic',{limit:10});
}