    import { apiId, apiUrl } from "../../utils";

    
    async function utils (metodo , valor){
        const reqMetodo = metodo;
 
        const corpo = JSON.stringify( {
              acoes: [    
                  //  metodo: "cidades",  //  metodo: "bairros",  //  metodo: "valores", 
                  { metodo: reqMetodo, params: [{ registro: valor }]}
              ], id: apiId
            });
          
          const response =  await fetch(
              apiUrl,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: corpo
              }
          
          );
          const list = await response.json()
          return list
    }
    async function getValores(metodo , valor) {
        const reqMetodo = metodo;
          if (valor == "Aluguel"){
           valor =1;
          }
          else valor =2; 
       
       const corpo = JSON.stringify( {
             acoes: [    
                 
                 { metodo: reqMetodo, params: [{finalidade : valor }]}
             ], id: apiId
           });
         
         const response =  await fetch(
             apiUrl,
             {
               method: 'POST',
               headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
               body: corpo
             }
         
         );
         const list = await response.json()
         return list 
     }

     export {
        getValores,
        utils
     }