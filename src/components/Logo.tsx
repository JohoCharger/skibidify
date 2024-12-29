import Image from "next/image";

export default function Logo() {
    return (
        <span
            className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
            <Image className="img-fluid" src="/assets/icon.svg" alt={"logo"} width={32} height={32}/>
        </span>
    )
}