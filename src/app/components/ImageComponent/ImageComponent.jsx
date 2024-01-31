import Image from "next/image";

const ImageComponent = ({ src, alt }) => {
    return (
        <div className="w-100 h-100">
            <Image 
                src={src}
                width={100}
                height={100}
                alt={alt}
            />
        </div>
    );
}

export default ImageComponent;