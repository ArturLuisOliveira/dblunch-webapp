import querystring from 'querystring';
export const getQueryParams = location => querystring.parse(location.search.substring(1, location.search.length));
export const generateQueryString = object =>
    Object.keys(object)
        .map(key => `${key}=${object[key]}`)
        .join('&');
