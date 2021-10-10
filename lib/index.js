
console.log('JS is loaded!');
//import Dashboard from "./views/Dashboard";
const navigateTo = url =>{
    history.pushState(null, null, url)
    router()
};

const router = async () =>{
    const routes = [
    { path: '/', view: ()=>console.log('Viewing dashboard') },
    { path: '/profile', view: ()=>console.log('Viewing profile') },
    { path: '/contact', view: ()=>console.log('Viewing contact') },
    ];
  //Test each route for potential match
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
  console.log(match)
  console.log(match.route.view())
}

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