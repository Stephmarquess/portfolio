import emailjs from "@emailjs/browser";

export class EmailService {
  constructor() {
    this.publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    this.serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;

    this.templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    this.toEmail = import.meta.env.VITE_EMAILJS_TO_EMAIL;

    this.initialized = false;
  }

  async initialize() {
    if (!this.publicKey) {
      console.error("PUBLIC KEY NAO DISPONIVEL");
      return false;
    }

    try {
      if (typeof window !== "undefined") {
        emailjs.init(this.publicKey);
        this.initialized = true;
        return true;
      }
    } catch (error) {
      console.error("Erro ao inicializar o client de e-mail:", error);
      return false;
    }
  }

  async sendEmail(formData) {
    if (!this.initialized) {
      const initialized = await this.initialize();
      if (!initialized) {
        throw new Error("Client de e-mail não pôde ser inicializado");
      }
    }

    const templateParams = {
      to_email: this.toEmail,
      from_name: formData.nome,
      from_email: formData.email,
      subject: formData.assunto,
      message: formData.mensagem,
    };

    try {
      const result = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      if (result.status === 200) {
        return { success: true, message: "Email enviado com sucesso" };
      } else {
        throw new Error(`Erro ao enviar email: ${result.text}`);
      }
    } catch (error) {
      throw new Error("Erro ao enviar email: " + error.message);
    }
  }
}

export default new EmailService();
