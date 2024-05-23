import {Request,Response, NextFunction } from "express";



export const soloLogin =(req:Request,res:Response, next:NextFunction)=>{
        console.log("COOKIE",req.headers.cookie )
        const jwtCookie = req.headers.cookie?.split("; ").find(cookie => cookie.startsWith("jwt="))        
        console.log("COOKIE",jwtCookie)

}        