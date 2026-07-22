import { Injectable, Logger } from '@nestjs/common'
import type { CreateContactDto } from './dto/create-contact.dto'

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name)

  async submit(dto: CreateContactDto) {
    // Production: wire to email provider, CRM, or queue.
    this.logger.log(`Contact received from ${dto.email}`)
    return {
      ok: true,
      message: 'Thanks for reaching out. I will get back to you soon.',
    }
  }
}
