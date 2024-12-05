import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Wishlist } from '../common/Wishlist';
import { AccountIcon } from '../common/AccountIcon';
import { CartIcon } from '../common/CartIcon';
import Logo from '../../assets/Logo.png';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

function NavScroll() {
    
    return (
        <Navbar expand="lg" className="nav-bar">
            <Container fluid>
                <Navbar.Brand href="#" className='logo'><img src={Logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 g-5 d-flex align-items-center custom-navbar"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink
                            className={({ isActive }) =>
                                `mx-5  text-decoration-none ${isActive ? "active-link" : "text-custom"}`
                            }
                            to="/"
                        >
                            Shop
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `mx-5  text-decoration-none ${isActive ? "active-link" : "text-custom"}`
                            }
                            to="/mens"
                        >
                            Man
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `mx-5   text-decoration-none ${isActive ? "active-link" : "text-custom"}`
                            }
                            to="/womens"
                        >
                            Women
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `mx-5  text-decoration-none ${isActive ? "active-link" : "text-custom"}`
                            }
                            to="/kids"
                        >
                            Kid
                        </NavLink>

                        {/* <NavLink
                            className={({ isActive }) =>
                                `mx-5 fw-bold text-decoration-none ${isActive ? "active-link" : "text-muted"}`
                            }
                            to="/hello"
                        >
                            Hello
                        </NavLink> */}

                        {/* <NavDropdown className="mx-5 fw-bolder" title="Categories" id="navbarScrollingDropdown">
                            <NavDropdown.Item
                                as={NavLink}
                                to="/mens"
                                className={({ isActive }) =>
                                    isActive ? "text-primary fw-semibold" : "text-muted fw-light"
                                }
                            >
                                Men
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={NavLink}
                                to="/womens"
                                className={({ isActive }) =>
                                    isActive ? "text-primary fw-semibold" : "text-muted fw-light"
                                }
                            >
                                Women
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={NavLink}
                                to="/kids"
                                className={({ isActive }) =>
                                    isActive ? " fw-semibold" : "text-muted fw-light"
                                }
                            >
                                Kids
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>



                    <div className="d-flex align-items-center ms-auto me-5">
                        <div className=" me-4">
                            <Search
                                placeholder="Search text"
                                onSearch={onSearch}
                                style={{
                                    width: 250,
                                }}
                                size={'large'}
                            />
                        </div>
                        <div>
                            <Button variant="link" className="wishlist-btn">
                                <Wishlist />
                            </Button>
                        </div>
                        <div className="">
                            <Button variant="link" className="wishlist-btn">
                                <AccountIcon />
                            </Button>
                        </div>
                        <div className="">
                            <Button variant="link" className="wishlist-btn">
                                <CartIcon />
                            </Button>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScroll;
