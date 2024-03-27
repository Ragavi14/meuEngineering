import React from "react";

export class ApiService {
    public getBaseUrl(): string {
        if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
           
           return "https://wp.hadeeforge.in/";
        }
       else if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         
         return "http://localhost/hadeeforge/wp-hadeeforge/";
          
        }
        else{
            return "http://localhost/hadeeforge/wp-hadeeforge/";
        }
           
      }
      public getSiteUrl(): string {
        if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
           
           return "https://www.hadeeforge.in/";
        }
       else if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         
         return "http://localhost:3000/";
          
        }
        else{
          return "https://www.hadeeforge.in/";
        }
           
      }
}