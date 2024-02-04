import React from 'react'
import './Footer.css'
import footlogo from '../../images/footer.png'
const Footer = () => {


  return (
    <>
<footer class="footer">
    <div class="container footer__container">
        <div class="footer__1">
            <h4>Tropical Pools</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius, facilis quasi dolores qui iure esse!</p>
        </div>
        <div class="footer__2">
            <h4>Login/Signup</h4>
            <ul class="permalinks">
                <li><p>Login</p></li>
                <li><p>Signup</p></li>
                
            </ul>
        </div>
        
        <div class="footer__4">
            <h4>Contact us</h4>
            <div >
                <p>1234567</p>
                <p>tropical@gmail.com</p>
            </div>
            <ul class="footer__socials">
                <li><p><i class="fa-brands fa-facebook"></i></p></li>
                <li><p><i class="fa-brands fa-instagram"></i></p></li>
                <li><p><i class="fa-brands fa-square-x-twitter"></i></p></li>
                <li><p><i class="fa-brands fa-linkedin"></i></p></li>
            </ul>
        </div>

    </div>
    
</footer>

    
    </>
  )
}

export default Footer
