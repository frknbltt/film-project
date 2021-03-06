import { getSearchParams } from '../helpers';

export const API_URL = 'https://api.themoviedb.org/3';

const contentTypes = {
  json: 'application/json; charset=utf-8',
  urlEncoded: 'application/x-www-form-urlencoded;charset=UTF-8',
  isMultiPart: 'application/json; charset=utf-8',
};

const Post = (endpoint, body = {}, token, isUrlEncoded) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': isUrlEncoded ? contentTypes.urlEncoded : contentTypes.json,
      // token,
    },
    body: JSON.stringify(body),
  };
  const response = fetch(apiUrl, requestOptions)
    .then(fetchResponse => fetchResponse.json())
    .catch(error => error);
  return response;
};

const PostFormData = (endpoint, body = {}, token) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const bodyAsFormData = new FormData();
  Object.keys(body).forEach(key => bodyAsFormData.append(key, body[key]));
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      // token,
    },
    body: bodyAsFormData,
  };
  const response = fetch(apiUrl, requestOptions)
    .then(fetchResponse => fetchResponse.json())
    .catch(error => error);
  return response;
};

const PutFormData = (endpoint, body = {}, token) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const bodyAsFormData = new FormData();
  Object.keys(body).forEach(key => bodyAsFormData.append(key, body[key]));
  const requestOptions = {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      // token,
    },
    body: bodyAsFormData,

  };
  const response = fetch(apiUrl, requestOptions)
    .then(fetchResponse => fetchResponse.json())
    .catch(error => error);
  return response;
};


const Delete = (endpoint, body = {}, token, isUrlEncoded) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const requestOptions = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': isUrlEncoded ? contentTypes.urlEncoded : contentTypes.json,
      token,
    },
    body: isUrlEncoded ? getSearchParams(body) : JSON.stringify(body),
  };
  const response = fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .catch(error => error);
  return response;
};

const Put = (endpoint, body = {}, token, isUrlEncoded) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const requestOptions = {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': isUrlEncoded ? contentTypes.urlEncoded : contentTypes.json,
      token,
      "X-API-KEY": "5f6dfd4cbbe3778697b2287c28081cc5",
      "Authorization": token,
    },
    body: isUrlEncoded ? getSearchParams(body) : JSON.stringify(body),

  };
  const response = fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .catch(error => error);
  return response;
};

const Get = (endpoint, body = {}, token, isUrlEncoded) => {
  const apiUrl = isUrlEncoded
    ? `${API_URL}${endpoint}${getSearchParams(body)}`
    : `${API_URL}${endpoint}`;
  const requestOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': isUrlEncoded ? contentTypes.urlEncoded : contentTypes.json,
       // token, 
    },
    data: isUrlEncoded ? getSearchParams(body) : JSON.stringify(body),
  };
  const response = fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .catch(error => error);
  return response;
};

export {
  Post, Get, Put, Delete,
  PostFormData,
  PutFormData
};