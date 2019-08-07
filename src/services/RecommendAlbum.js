import { get } from '../utils/request';

export function getRecommendAlbum() {
  return get('/personalized');
}

/**
 * 根据id获取详情
 * @param {*} id
 */
export function getMovieDetail(id) {
  return post('/api/v2/proxy', {
    url:
      'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=' +
      id,
  });
}
