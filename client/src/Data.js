import config from './config';

export default class Data {
  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    const url = config.apiBaseUrl + path;
  
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    if (requiresAuth) {    
      const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }
    return fetch(url, options);
  }

//Function gets user from db using email and password
  async getUser(emailAddress, password) {
    const response = await this.api(`/users`, 'GET', null, true, { emailAddress, password });
    if (response.status === 200) {
      return response.json().then(data => data);
    }
    else if (response.status === 401) {
      return null;
    }
    else {
      throw new Error();
    }
  }
 
//Function creates a new user in the db or returns validation errors
  async createUser(user) {
    const response = await this.api('/users', 'POST', user);
      if (response.status === 201) {
        return [];
      }
      else if (response.status === 400) {
        return response.json().then(data => {
          return data;
        });
      }
      else {
        throw new Error();
      }
  }

//Function creates a course in the db or return validation errors
  async createCourse(course, emailAddress, password) {
    const response = await this.api('/courses', 'POST', course, true, {emailAddress, password});
      if(response.status === 201){
        return []
      }else if (response.status === 400) {
        return response.json().then(data => {
          return data;
        });
      }else {
        throw new Error();
      }
  }

//Function updates course from db using courseId
  async updateCourse(courseId, course, emailAddress, password) {
    const response = await this.api(`/courses/`+ courseId, 'PUT', course, true, {emailAddress, password});
    if(response.status === 204){
      return []
    }else if (response.status === 400) {
      return response.json().then(data => {
        return data;
      });
    }else {
      throw new Error();
    }
  }

//Function gets and returns course from the db
  async getCourse(courseId) {
    const response = await this.api('/courses/' + courseId, 'GET', null);
    if (response.status === 200) {
      return response.json().then(data =>  {
        return data;
      });
    }
    else if (response.status === 401) {
      return null;
    }
    else {
      throw new Error();
    }
  }

//Function Deletes a course from the db
  async deleteCourse(courseId, emailAddress, password) {
    const response = await this.api(`/courses/`+ courseId, 'DELETE', null, true, {emailAddress, password});
    if(response.status === 204){
      return []
    }else if (response.status === 400) {
      return response.json().then(data => {
        return data;
      });
    }else {
      throw new Error();
    }
  }
}


