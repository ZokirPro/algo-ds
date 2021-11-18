// Bad

{
  class SMSService {
    public send(): void {
      // logic
    }
  }

  class EmailService {
    public send(): void {
      // logic
    }
  }

  class Notification {
    public send() {
      const smsService = new SMSService();
      const emailService = new EmailService();

      <void>smsService.send();
      <void>emailService.send();
    }
  }

  const notification = new Notification();
  notification.send();
}

// Good

{
  interface Service {
    send(): void;
  }

  class SMSService implements Service {
    public send(): void {
      // logic
    }
  }

  class EmailService implements Service {
    public send(): void {
      // logic
    }
  }

  class Notification {
    public send(service: Service) {
      <void>service.send();
    }
  }

  const notification = new Notification();
  notification.send(new SMSService());
  notification.send(new EmailService());
}
