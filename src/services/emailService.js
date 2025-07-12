import emailjs from '@emailjs/browser';

class EmailService {
  constructor() {
    this.publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
    this.serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    this.templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID 
    this.toEmail = process.env.REACT_APP_EMAILJS_TO_EMAIL
    this.initialized = false;
  }

  async initialize() {
    try {
      
      emailjs.init(this.publicKey);
      
      this.initialized = true;
      return true;
    } catch (error) {
      console.error('Erro ao inicializar o client de e-mail:', error);
      return false;
    }
  }

  async sendEmail(formData) {
    if (!this.initialized) {
      const initialized = await this.initialize();
      if (!initialized) {
        throw new Error('Client de e-mail não pôde ser inicializado');
      }
    }
    const templateParams = {
      to_email: this.toEmail,
      from_name: formData.nome,
      from_email: formData.email,
      subject: formData.assunto,
      message: formData.mensagem
    };

    try {
      const result = await emailjs.send(
        this.serviceId,
        this.templateId, 
        templateParams
      );

      if (result.status === 200) {
        return { success: true, message: 'Email enviado com sucesso' };
      } else {
        return { success: false, message: 'Erro no envio do email' };
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      throw new Error('Erro ao enviar email: ' + error.message);
    }
  }
}

export default new EmailService(); 