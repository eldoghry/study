;(() => {
  enum NotificationType {
    email = 'email',
    sms = 'sms',
    mobile = 'mobile',
  }

  type Payload =
    | { type: NotificationType.email; email: string }
    | { type: NotificationType.sms; phone: string }
    | { type: NotificationType.mobile; deviceToken: string }

  interface Notification {
    send(payload: object): void
  }

  class NotificationEmail implements Notification {
    send(payload: Payload & { type: NotificationType.email }) {
      console.log('sending email')
      console.log(`send EMAIL message to ${payload.email}`)
    }
  }

  class NotificationMobile implements Notification {
    send(payload: Payload & { type: NotificationType.mobile }) {
      console.log(`send MOBILE message to ${payload.deviceToken}`)
    }
  }

  class NotificationSms implements Notification {
    send(payload: Payload & { type: NotificationType.sms }) {
      console.log(`send SMS message to ${payload.phone}`)
    }
  }

  // factory
  class NotificationFactory {
    static createNotificationService(type: NotificationType): Notification | null {
      let service: Notification | null

      switch (type) {
        case NotificationType.email:
          service = new NotificationEmail()
          break
        case NotificationType.sms:
          service = new NotificationSms()
          break
        case NotificationType.mobile:
          service = new NotificationMobile()
          break
        default:
          service = null
      }
      return service
    }
  }

  // client

  let service = NotificationFactory.createNotificationService(NotificationType.email)
  service?.send({ email: 'xxx@xxx.com' })

  // change service type on run time
  service = NotificationFactory.createNotificationService(NotificationType.sms)
  service?.send({ phone: '0123456789' })

  // change service type on run time
  service = NotificationFactory.createNotificationService(NotificationType.sms)
  service?.send({ phone: '0237721450' })

  // change service type on run time
  service = NotificationFactory.createNotificationService(NotificationType.mobile)
  service?.send({ deviceToken: '587295362375487234udgfyweg768' })
})()
