import AbstractView  from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super()
        this.setTitle('Contact')
    }
    async getHtml(){
         return `
        <h1 class="text-info display-2"> Contact, Dom </h1>
        <p>
        <a href='/posts' data-link>Call me to this number 303 320 3000</a>
        </p>
        `
    }
}