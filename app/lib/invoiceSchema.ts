// invoiceSchema.ts
import { z } from 'zod';

export const CreateInvoice = z.object({
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
});
