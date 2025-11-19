import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome deve ter pelo menos 2 caracteres.',
  }),
  contact: z.string().min(5, {
    message: 'Por favor, insira um email ou telefone válido.',
  }),
  message: z.string().min(10, {
    message: 'A mensagem deve ter pelo menos 10 caracteres.',
  }),
})

export function ContactSection() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      contact: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: 'Mensagem enviada!',
      description:
        'Recebemos sua solicitação de orçamento. Entraremos em contato em breve.',
      duration: 5000,
    })
    form.reset()
  }

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border border-border shadow-elevation rounded-2xl overflow-hidden">
            <CardHeader className="bg-slate-50 border-b border-slate-100 py-8 text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                Solicite um Orçamento
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Preencha o formulário abaixo e entraremos em contato.
              </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          Nome Completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome"
                            {...field}
                            className="rounded-lg border-slate-200 focus:ring-accent focus:border-accent transition-all duration-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          E-mail ou Telefone
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="seu@email.com ou (11) 99999-9999"
                            {...field}
                            className="rounded-lg border-slate-200 focus:ring-accent focus:border-accent transition-all duration-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          Mensagem
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva sua necessidade..."
                            className="min-h-[120px] rounded-lg border-slate-200 focus:ring-accent focus:border-accent transition-all duration-200 resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-blue-600 text-white font-semibold py-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-lg"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
