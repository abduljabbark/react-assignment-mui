import { AppBar, Box, Button, formControlClasses, Icon, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LOGO from './images/Logo.png'
import Hero from './images/Illustration.png'
export const Header = () => {
    return (
        <>
            <Box className='' sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "#f5f7fa" }} >
                    <Toolbar className='d-flex align-items-center justify-content-between container '>

                        <img src={LOGO} alt="" />
                        <Box>



                            <Link className='mx-4 text-decoration-none text-black' href="#" color="inherit">
                                Home
                            </Link>

                            <Link className='mx-4 text-decoration-none text-black' href="#" color="inherit">
                                Service
                            </Link>

                            <Link className='mx-4 text-decoration-none text-black' href="#" color="inherit">
                                Feature
                            </Link>

                            <Link className='mx-4 text-decoration-none text-black' href="#" color="inherit">
                                Product
                            </Link>

                            <Link className='mx-4 text-decoration-none text-black' href="#" color="inherit">
                                Testimonial
                            </Link>

                            <Link className='mx-4 text-decoration-none text-black' href="#" color="inherit">
                                FAQ
                            </Link>
                        </Box>
                        <Box>
                            <Button color="inherit text-success">Login</Button>
                            <Button className='bg-success text-white' >Sign up</Button>
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>
<Box className="container mt-5">
    <Box className="row align-items-center">
        <Box className="col-lg-7 col-md-6 col-sm-12">
            <h1 className='display-4 fw-bold'>Lessons and insights <br/> <span className='text-success'>from 8 years</span></h1>
            <p className='text-secondary'>Where to grow your business as a photographer: site or social media?</p>
            <button className='py-3 px-4 fs-5 border-0 text-white bg-success'>Register</button>
        </Box>
        <Box className="col-lg-5 col-md-6 col-sm-12">
            <img src={Hero} alt="" />
        </Box>
    </Box>
</Box>
        </>
    )
}
