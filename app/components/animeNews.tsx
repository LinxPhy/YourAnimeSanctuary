'use client'
import Image from 'next/image';
import { useState } from "react";

export default function LoadImage(imageURL: any){

    const [imageLoadError, setImageLoadError] = useState(false)

    return (
        <>
            {!imageLoadError ? (
                <Image
                    src={imageURL.data}
                    width={300}
                    height={300}
                    alt="Article Image"
                    onError={() => setImageLoadError(true)}
                >
                </Image>
            ) : (
                <div className='placeholder_div'>

                </div>
            )}
        </>
    )

}

