import React, { useEffect } from 'react';
import emailService from '../../services/emailService';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => {

  useEffect(() => {
    const initializeEmailService = async () => {
      try {
        const initialized = await emailService.initialize();
        if (initialized) {
          console.log('Serviço de email inicializado com sucesso');
        }
      } catch (error) {
        console.error('Erro ao inicializar serviço de email:', error);
      }
    };

    initializeEmailService();
  }, []);

  return (
    <section id="contato" className='mt-2 efeito p-3'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <ContactForm />

            <div className="contact-info mt-5">
              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <div className="contact-item">
                    <i className="fas fa-envelope mb-2" style={{ color: '#ff5757', fontSize: '2rem' }}></i>
                    <h5>E-mail</h5>
                    <p>smouramkt@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt mb-2" style={{ color: '#ff5757', fontSize: '2rem' }}></i>
                    <h5>Localização</h5>
                    <p>Juazeiro do Norte - CE</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="contact-item">
                    <i className="fas fa-clock mb-2" style={{ color: '#ff5757', fontSize: '2rem' }}></i>
                    <h5>Resposta</h5>
                    <p>Em até 24 horas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
