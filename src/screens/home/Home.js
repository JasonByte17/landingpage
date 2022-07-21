import React from 'react'
import { Button } from 'reactstrap';
import { FaArrowRight } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import Carousel from '../../components/carousel/CarouselComponent';
import Header from '../../components/header/Header';

import "./Home.styles.scss";
import Footer from '../../components/footer/Footer';
import { subscribeSchema } from '../../helpers/SchemaValidations';
import { subscribeRequested } from '../../redux/actions/subscribeAction';

const Home = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(subscribeSchema)
  });

  const onSubmit = (data) => {
      data.message = 'Deseo Subscribirme a su página';

      dispatch(subscribeRequested(data));
  }


  return (
    <>
    <Header/>
    <Carousel/>
    <div className="mainContent">
      <div className='mainContent__content'>
        <div className='mainContent__content__row'>
          <div className='column'>
            <img className='columnImg' src='https://fondosmil.com/fondo/84031.jpg'/>
            <Button className='buttonImg' size="lg" outline>
              Shop
            </Button>
          </div>

          <div className='column'>
            <img className='imgText' src='https://img.freepik.com/vector-premium/paraguas-rojo-aislado-sobre-fondo-blanco-abrio-parasol-proteccion-mano-contra-lluvia-o-cortavientos_93083-1008.jpg?w=2000'/>
            <h2>Pufi RAIN</h2>
            <hr/>
            <div className='paragraph'>
              <p>Descripción del producto. Este es un texto simulado</p>
            </div>
            <Button className='buttonTxt' size="lg" outline>
              Ver Más
            </Button>
          </div>
        </div>

        <div className='mainContent__content__rowReverse'>
          <div className='column'>
            <img className='columnImg' src='https://wallpaperaccess.com/full/2076086.jpg'/>
          </div>

          <div className='column'>
            <img className='imgText' src='https://cdn.pixabay.com/photo/2015/12/13/13/11/pouffe-1091069_960_720.jpg'/>
            <h2>Pufi PUFF</h2>
            <hr/>
            <div className='paragraph'>
              <p>Descripción del producto. Este es un texto simulado</p>
            </div>
            <Button className='buttonTxt' size="lg" outline>
              Ver Más
            </Button>
          </div>
        </div>

        <div className='mainContent__content__row'>
          <div className='column'>
            <img className='columnImg' src='https://wallpaperaccess.com/full/1455385.jpg'/>
          </div>

          <div className='column'>
            <img className='imgText' src='https://st4.depositphotos.com/14787348/38621/i/450/depositphotos_386214368-stock-photo-paper-bag-isolated-white-background.jpg'/>
            <h2>Pufi CART</h2>
            <hr/>
            <div className='paragraph'>
              <p>Descripción del producto. Este es un texto simulado</p>
            </div>
            <Button className='buttonTxt' size="lg" outline>
              Ver Más
            </Button>
          </div>
        </div>

        <div className='mainContent__content__rowReverse'>
          <div className='column'>
            <img className='columnImg' src='https://www.sheknows.com/wp-content/uploads/2020/06/best-customized-pillows-amazon.jpg?w=1920'/>
          </div>

          <div className='column'>
            <img className='imgText' src='https://img.freepik.com/vector-premium/plantilla-almohada-almohada-rectangular-sobre-fondo-blanco_255767-467.jpg'/>
            <h2>Pufi NAP</h2>
            <hr/>
            <div className='paragraph'>
              <p>Descripción del producto. Este es un texto simulado</p>
            </div>
            <Button className='buttonTxt' size="lg" outline>
              Ver Más
            </Button>
          </div>
        </div>
        <div className='mainContent__content__gallery'>
          <p>INSTRAGRAM</p>
          <h2>#ESPUFI</h2>
          <div className='galleryImg'>
            <img className='imgGallery' src='https://fondosmil.com/fondo/85095.jpg'/>
            <img className='imgGallery' src='https://fondosmil.com/fondo/85159.jpg'/>
            <img className='imgGallery' src='https://fondosmil.com/fondo/85149.jpg'/>
            <img className='imgGallery' src='https://fondosmil.com/fondo/84031.jpg'/>
            <img className='imgGallery' src='https://wallpaperaccess.com/full/2076086.jpg'/>
            <img className='imgGallery' src='https://wallpaperaccess.com/full/1455385.jpg'/>
          </div>
        </div>
        <div className='mainContent__content__subscribe'>
          <p>NEWSLETTER</p>
          <h2>SUSCRIBETE</h2>
          <h5>Y enterate de todas las novedades</h5>
          <div className='subscribeContainer'>
          <input className='subscribeContainer__input form-control' {...register("email")} placeholder="Ingresa tu email" type="email"/>
          <div style={{width:"100%", marginTop: 1, color:'red'}}>
          <p>{errors.email?.message}</p>
          </div>
            <span onClick={handleSubmit(onSubmit)}>
              <div>
                <FaArrowRight/>
              </div>
            </span>
          </div>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
