import axios from 'axios';

// const API_BASE_URL = 'http://www.mypress.jp:3003'; // json-server用
// const API_BASE_URL = 'http://www.mypress.jp:8080'; // Django用
const API_BASE_URL = 'http://localhost:8000' // Django用

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function getRequest(url, params) {
  return client.get(url, params);
}

export function postRequest(url, params) {
  return client.post(url, params);
}

export function fetchDate(url, params) {
  return client.get(url, params);
}

export async function createDate(url, params) {
  try {
    console.log(params);
    const response = await client.post(url, params);
    return response.data;
  } catch (error) {
    console.error('データ作成エラー:', error);
    throw error;
  }
}

export function editDate($url, params) {
  return client.put($url, params);
}

export function deleteDate($url) {
  return client.delete($url);
}

