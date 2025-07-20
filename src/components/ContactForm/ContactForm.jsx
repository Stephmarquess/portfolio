import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import './ContactForm.css';

const ContactForm = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit
  } = useContactForm();

  return (
    <div className="contact-form-container">
      <h2 className="text-center mb-4" style={{ color: "#ff5757" }}>
        Entre em Contato
      </h2>

      {submitStatus === 'success' && (
        <div className="alert alert-success" role="alert">
          <i className="fas fa-check-circle me-2"></i>
          Mensagem enviada com sucesso! Entrarei em contato em breve.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="alert alert-danger" role="alert">
          <i className="fas fa-exclamation-circle me-2"></i>
          Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form" id='contact-form' data-netlify="true">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="nome" className="form-label">
              <i className="fas fa-user me-2"></i>Nome *
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              <i className="fas fa-envelope me-2"></i>E-mail *
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="assunto" className="form-label">
            <i className="fas fa-tag me-2"></i>Assunto *
          </label>
          <input
            type="text"
            className="form-control"
            id="assunto"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            required
            placeholder="Qual o motivo do contato?"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mensagem" className="form-label">
            <i className="fas fa-comment me-2"></i>Mensagem *
          </label>
          <textarea
            className="form-control"
            id="mensagem"
            name="mensagem"
            rows="5"
            value={formData.mensagem}
            onChange={handleChange}
            required
            placeholder="Conte-me sobre seu projeto, proposta ou dúvida..."
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={isSubmitting}
            style={{
              backgroundColor: '#ff5757',
              borderColor: '#ff5757',
              padding: '12px 40px',
              fontSize: '1.1rem'
            }}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Enviando...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane me-2"></i>
                Enviar Mensagem
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm; 