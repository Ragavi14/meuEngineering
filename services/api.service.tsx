import React from "react";

export class ApiService {
    public getBaseUrl(): string {
        if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
           
          return "https://wpmeu.netiapps.com/";
        }
       else if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         
         return "http://localhost/MeuEngineering/wp-meu/";
          
        }
        else{
          return "https://wpmeu.netiapps.com/";
        }
           
      }
      public getSiteUrl(): string {
        if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
           
          return "https://meuengineering.com/";
        }
       else if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         
         return "http://localhost:3000/";
          
        }
        else{
          return "https://meuengineering.com/";
        }
           
      }
}
