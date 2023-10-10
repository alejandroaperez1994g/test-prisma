import {Request, Response} from "express";
import prismaClient from "../db/db";
import fs from "fs-extra";
import {uploadImage} from "../utils/cloudinary";

export const getAllUsers = async (req:Request, res:Response) => {
    try {

        const users = await prismaClient.user.findMany()

        res.status(200).json(users)
    }catch (e) {
        res.status(500).json(e)
    }
}

export const createUser = async (req:Request, res:Response) => {
    try {

        const user = await prismaClient.user.create({
            data: req.body
        })

        res.status(200).json(user)
    }catch (e) {
        res.status(500).json(e)
    }
}

export const uploadRequest = async (req: Request, res: Response) => {
    const image = req.files?.image
    let imageUploaded = null
    console.log(image)

    if (image) {
        if ("tempFilePath" in image) {
            imageUploaded = await uploadImage(image.tempFilePath)
            await fs.unlink(image.tempFilePath)
        }
    }
    console.log(imageUploaded)

    res.send({message: "Upload Request Success", data: imageUploaded})
}
