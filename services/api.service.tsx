import React from "react";

export class ApiService {
    public getBaseUrl(): string {
        if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
           
          //  return "https://wp.hadeeforge.in/";
          return "http://localhost/MeuEngineering/wp-meu/";
        }
       else if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         
         return "http://localhost/MeuEngineering/wp-meu/";
          
        }
        else{
            return "http://localhost/MeuEngineering/wp-meu/";
        }
           
      }
      public getSiteUrl(): string {
        if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
           
          //  return "https://www.hadeeforge.in/";
          return "http://localhost:3000/";
        }
       else if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         
         return "http://localhost:3000/";
          
        }
        else{
          // return "https://www.hadeeforge.in/";
          return "http://localhost:3000/";
        }
           
      }
}