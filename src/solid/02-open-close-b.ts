// import axios from 'axios';
import { HttpClient } from './02-open-close-c';

// Abierto a la extension, pero cerrado a la modificacion
// Tratar de no tener dependencias con terceros

export class TodoService { 

    constructor(
        private http: HttpClient,
    ){}

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor(
        private http: HttpClient,
    ){}

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor(
        private http: HttpClient,
    ){}

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}