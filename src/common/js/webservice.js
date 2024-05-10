var JWT_TOKEN = function() { 
return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0OTM3NzEwLCJpYXQiOjE3MTQ5MjY5MTAsImp0aSI6ImZhYTIwMjM0YmVhNDQyZThhNTk5NTgyNzgxNmU4NzY1IiwidXNlcl9pZCI6MX0.LiAQsSYUHQkZ_LGM7cJ4wMioVn4vCE6xCtU-kGz6kzY"
}
//var JWT_TOKEN = function(){return ""};
const BASE_URL = function() { return process.env.REACT_APP_API_URL };
var HEADERS = { 'Authorization': 'Bearer '+ JWT_TOKEN() }; 

export async function api_get(url) {
    try {
      const response = await fetch(BASE_URL() + url, {
        method: "GET",
        headers: HEADERS
      }); 
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; 
    }
  }
export async function api_post(url, data_obj) {
    try {
      const response = await fetch(BASE_URL() + url, {
        method: "POST",
        headers: HEADERS,
        data: data_obj
      }); 
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; 
    }
}