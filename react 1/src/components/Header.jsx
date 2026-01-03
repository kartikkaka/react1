 const Header = ({ title = " Movie showcase"}) => {
    return(
        <Header className=" site-header">
            <h1>{title}</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Movies</a>
            </nav>
        </Header>
    );
 };

 export default Header;