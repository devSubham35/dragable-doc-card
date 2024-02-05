'use client'
import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CancelIcon from '@mui/icons-material/Cancel';
import { motion } from 'framer-motion';
import { Scale } from '@mui/icons-material';

const Card = (props) => {
    return (

        <motion.div drag dragConstraints={props.referance} whileDrag={{scale: 1.1}} className='m-4 relative flex flex-col justify-between items-center h-[300px] w-[250px] border-[1px] border-[#333333] rounded-[50px] bg-[#1f1f1f] bg-opacity-50 text-white p-8 overflow-hidden'>

            <div>
                <DescriptionIcon className='text-[25px]' />
                <p className='text-sm mt-4'>{props.description}</p>
            </div>

            <div className='w-full flex flex-col items-center justify-between'>
                <div className={`w-full flex items-center justify-between ${props.button ? "mb-10" : "mb-0"}`}>
                    <h3 className={`${props.button ? "text-[#2eb382]" : "text-white"} ${props.loader ? "text-[#3f3bff]" : null}`}>{props.size}</h3>
                    {props.button ? <CancelIcon className='text-[25px] cursor-pointer' /> : <FileDownloadIcon className='text-[25px] cursor-pointer' />}
                </div>

                {props.button && <div className={`absolute bottom-0 w-full h-[55px] cursor-pointer flex items-center justify-center font-[500] 
                    ${props.loader ? "bg-[#3f3bff]" : "bg-[#2eb382]"}`}>
                    {props.loader ? <div className='w-[70%] h-[8px] rounded-full bg-[#979797]'><div className='w-[60%] h-full bg-white rounded-full'></div></div> : "Download Now"}
                </div>}

            </div>

        </motion.div>

    )
}

export default Card
