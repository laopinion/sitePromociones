import React from 'React';
import Layout from './layouts/default';

const Prueba = (props) => {
  console.log(props)
  return (
    <Layout>
      <div className='hola'>
        <h4>Hola mundo prueba {props.name} </h4>
      </div>
    </Layout>
  );
};

export default Prueba;
