import { vi, describe, it, expect, beforeEach } from "vitest";
import { EmailService } from "../emailService.js";

vi.mock("@emailjs/browser", () => {
  const mockEmailJS = {
    init: vi.fn().mockReturnValue(undefined),
    send: vi.fn().mockResolvedValue({ status: 200, text: "OK" }),
    sendForm: vi.fn().mockResolvedValue({ status: 200, text: "OK" }),
  };

  return {
    default: mockEmailJS,
  };
});

describe("EmailService", () => {
  let emailService;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();

    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "test-public-key");
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "test-service-id");
    vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "test-template-id");
    vi.stubEnv("VITE_EMAILJS_TO_EMAIL", "test@example.com");

    // eslint-disable-next-line no-undef
    global.window = {}; 

    emailService = new EmailService();
  });

  it("deve inicializar o cliente de email corretamente", async () => {
    const initializeService = await emailService.initialize();

    expect(initializeService).toBe(true);
    expect(emailService.initialized).toBe(true);
  });

  it("deve retornar false se não houver PUBLIC_KEY válido", async () => {
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "");

    const { EmailService } = await import("../emailService.js");
    const emailService = new EmailService();

    const result = await emailService.initialize();

    expect(result).toBe(false);
  });

  it("deve enviar email com sucesso", async () => {
    await emailService.initialize();

    const formData = {
      nome: "Teste",
      email: "teste@example.com",
      assunto: "Assunto Teste",
      mensagem: "Mensagem de teste",
    };

    const result = await emailService.sendEmail(formData);

    expect(result.success).toBe(true);
    expect(result.message).toBe("Email enviado com sucesso");
  });

  it("deve retornar erro ao receber 400", async () => {
    await emailService.initialize();

    const emailjs = await import("@emailjs/browser");
    vi.mocked(emailjs.default.send).mockRejectedValue({
      status: 400,
      text: "Erro aleatório",
      message: `Erro simulado com status 400`,
    });

    await emailService.initialize();

    const formData = {
      nome: "Teste",
      email: "teste@example.com",
      assunto: "Assunto de Teste",
      mensagem: "Mensagem de teste",
    };

    await expect(emailService.sendEmail(formData)).rejects.toThrow(
      `Erro ao enviar email: Erro simulado com status 400`
    );
  });
});
