let randomUserUrl = 'https://randomuser.me/api/';
//arreglar llamado de la variable de entorno

export default randomUserUrl;

export function getRandomUser(){
   return fetch(`${randomUserUrl}`,{
        method:'GET',
        mode:'cors',
        headers: {
            "Content-Type": "application/json",
        }
    }).then(resp => resp.json())

}