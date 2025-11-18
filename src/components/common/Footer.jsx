import { IoLogoGoogle, IoLogoGithub, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

function Footer() {
    return (
        <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-3 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                </a>
                <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
            </div>
            
            <div class="col-md-4">
                <ul class="list-unstyled d-flex justify-content-center align-items-center m-0 p-0">
                    <li class="ms-3">
                        <a class="text-muted text-decoration-none" href="#">About /</a>
                    </li>
                    <li class="ms-3">
                        <a class="text-muted text-decoration-none" href="#">Service /</a>
                    </li>
                    <li class="ms-3">
                        <a class="text-muted text-decoration-none" href="#">Blog</a>
                    </li>
                </ul>
            </div>


            <ul className="nav col-md-3 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted" href="#" > <IoLogoGoogle /> </a></li>
                <li className="ms-3"><a className="text-muted" href="#" > <IoLogoGithub /> </a></li>
                <li className="ms-3"><a className="text-muted" href="#" > <IoLogoFacebook /> </a></li>
                <li className="ms-3"><a className="text-muted" href="#" > <IoLogoInstagram /> </a></li>
            </ul>
        </footer>
    )
}

export default Footer;