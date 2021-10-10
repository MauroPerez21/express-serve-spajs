import Dashboard from './views/Dashboard.js'
import Posts from './views/Posts.js'
import Contact from './views/Contact.js'
console.log('JS is loaded!');
const pathToRegex = path => new RegExp('^'+ path.replace(/\//g, '\\/').replace(/:\w+/g,'(.+)') +'$')
//import Dashboard from "./views/Dashboard";
const navigateTo = url =>{
    history.pushState(null, null, url)
    router()
};
//Test each route for potential match
const router = async () =>{
  console.log(pathToRegex('/posts/:id'))
    const routes = [
    { path: '/',        view: Dashboard},
    { path: '/profile', view: Posts },
    { path: '/contact', view: Contact },
    ];
const potentialMatches = routes.map(route =>{
  return{
        route: route,
        isMatch: location.pathname === route.path
  }; 
}); 
let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
//Not found route
  if(!match){
    match = {
        route: routes[0],
        isMatch: true
    }
  }
  //console.log(match.route.view())
  const view = new match.route.view()
   console.log(view.getHtml())
  document.querySelector('#app').innerHTML = await view.getHtml()
  
}
//Actives router history
window.addEventListener('popstate',router);

document.addEventListener('DOMContentLoaded',()=>{
    document.body.addEventListener('click', e => {
        if(e.target.matches('[data-link]')){
            e.preventDefault();
            navigateTo(e.target.href)
        }
    });
    router()
});