import AbstractView  from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super()
        this.setTitle('Posts')
    }
    async getHtml(){
         return `
        <h1 class="text-info display-2"> Posts, Dom </h1>
        <p>
        <a href='/posts' data-link>You are viewing the posts</a>
        </p>
        `
    }
}