import Image from "next/image";

const ImageComponent = ({ src, alt }) => {
    return (
        <div className="px-4 py-4 flex flex-col items-center">
            <Image 
                src={src}
                width={170}
                height={150}
                alt={alt}
                className="rounded"
            />
        </div>
    );
}

export default ImageComponent;