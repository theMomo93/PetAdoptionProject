import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";


const prisma = new PrismaClient();

export async function POST(request){
    const { email, password} = await request.json();

    const user = await prisma.user.create({
        data:{
           email,
           password 
        },
        
    });

    return NextResponse.json ({message: "User was created successfully", user})
}