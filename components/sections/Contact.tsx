"use client"

import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { AtSign, ChevronRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact"
import { sendContactEmail } from "@/app/actions/contact"
import { siteConfig } from "@/config/site"

export function Contact() {
  const [isPending, startTransition] = useTransition()

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = (data: ContactFormData) => {
    startTransition(async () => {
      const result = await sendContactEmail(data)
      if (result.success) {
        toast.success(
          "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        )
        form.reset()
      } else {
        toast.error("Erro ao enviar mensagem. Por favor, tente novamente.")
      }
    })
  }

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Vamos conversar?
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground mb-6 text-balance">
                Talvez você não precise ter todas as respostas para começar
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Se existe algo que tem pesado, incomodado ou feito você sentir
                que precisa olhar para si com mais cuidado, a psicoterapia pode
                ser um espaço para começar esse processo. Estou aqui para
                acompanhar você nessa caminhada.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">WhatsApp</p>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">E-mail</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-foreground font-medium hover:text-primary transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <AtSign className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Instagram</p>
                  <a
                    href={siteConfig.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {siteConfig.instagram.handle}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Agende seu atendimento
              </h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu nome"
                              className="bg-background border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sobrenome</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu sobrenome"
                              className="bg-background border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="seu@email.com"
                            className="bg-background border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="(11) 99000-0000"
                            className="bg-background border-border"
                            {...field}
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
                        <FormLabel>Como posso te ajudar?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Conte um pouco sobre o que te traz aqui e o que você gostaria de trabalhar..."
                            className="bg-background border-border min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                    disabled={isPending}
                  >
                    {isPending ? "Enviando..." : "Enviar Mensagem"}
                    {!isPending && <ChevronRight className="ml-2 h-4 w-4" />}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Use este formulário para solicitar contato. Não é necessário
                    relatar informações sensíveis ou toda a sua história aqui.
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
