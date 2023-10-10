import {v2 as cloudinary} from 'cloudinary'

import config from '../config/config'


cloudinary.config(config.cloudinary)

export const uploadImage = async (imagePath: string) => {
    console.log({cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET})
    return await cloudinary.uploader.upload(imagePath,
        {
            resource_type: 'image',
            folder: 'profilePictures/',
            gravity: 'east',
            height: 300,
            width: 300,
            crop: 'scale',
            overwrite: true
        })
}
export const uploadAudioFile = async (audioPath: string, name: string) => {
    return await cloudinary.uploader.upload(audioPath,
        {resource_type: 'video', public_id: name, folder: 'audioFiles/', overwrite: true})
}
