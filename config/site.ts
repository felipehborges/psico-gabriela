export const siteConfig = {
  // Identity
  name: "Gabriela Almeida",
  tagline: "Psicóloga Clínica",
  credentials: "Psicóloga clínica desde 2021",

  // Contact
  phone: "(11) 99123-4567",
  email: "contato@gabrielaalmeida.com.br",
  address: {
    street: "Rua das Flores, 123 - Sala 200",
    city: "São Paulo",
    state: "SP",
    zip: "01234-000",
    full: "Rua das Flores, 123 - Sala 200, São Paulo, SP - 01234-000",
  },

  // Operating hours
  hours: [
    { days: "Segunda a Quinta", time: "9h00 - 18h00" },
    { days: "Sexta", time: "9h00 - 15h00" },
    { days: "Sábados", time: "mediante agendamento" },
  ],

  // SEO
  url: "https://www.gabrielaalmeida.com.br",
  description:
    "Psicoterapia para adultos e idosos, online e presencial, com escuta acolhedora e abordagem fundamentada na Logoterapia.",
  ogImage: "/og-image.jpg",

  // Trust indicators row
  stats: [
    { value: "Desde 2021", label: "Atuação clínica" },
    { value: "Adultos", label: "Atendimento individual" },
    { value: "Idosos", label: "Diferentes momentos da vida" },
    { value: "Online e presencial", label: "Formatos de atendimento" },
  ],

  // Credential badges in About section
  badges: [
    "Formada pela UMC em 2020",
    "Atuação clínica desde 2021",
    "Abordagem em Logoterapia",
    "Atendimento individualizado",
  ],

  // Services — icon must be a key in the iconMap defined in Services.tsx
  services: [
    {
      icon: "Brain",
      title: "Ansiedade e preocupações",
      description:
        "Um espaço para compreender preocupações excessivas, dificuldades emocionais e momentos de sofrimento.",
    },
    {
      icon: "Heart",
      title: "Autoestima e autoconhecimento",
      description:
        "Olhar para si com mais consciência, reconhecendo valores, experiências, autocobranças e possibilidades de escolha.",
    },
    {
      icon: "Users",
      title: "Relacionamentos e família",
      description:
        "Compreender conflitos nos relacionamentos e questões familiares ou afetivas a partir da sua própria história.",
    },
    {
      icon: "Leaf",
      title: "Luto e processos de perda",
      description:
        "Acolhimento para atravessar perdas, mudanças e experiências que transformam a maneira como você vive.",
    },
    {
      icon: "Calendar",
      title: "Mudanças e escolhas",
      description:
        "Reflexão diante de transições de vida, decisões importantes, conflitos profissionais e projetos pessoais.",
    },
    {
      icon: "Brain",
      title: "Sentido e projetos de vida",
      description:
        "Investigar sentimentos de vazio, questões de identidade e aquilo que possui significado para você.",
    },
  ],

  // Therapeutic approach steps
  approach: [
    {
      number: "01",
      title: "Escuta e acolhimento",
      description:
        "Um espaço profissional, sigiloso e sem julgamentos para falar sobre o que você está vivendo.",
    },
    {
      number: "02",
      title: "Compreensão integral",
      description:
        "Um olhar para sua história, seus valores, escolhas, relacionamentos, sofrimentos e o que importa para você.",
    },
    {
      number: "03",
      title: "Construção conjunta",
      description:
        "Um processo individualizado, construído no seu tempo e de acordo com suas necessidades e objetivos.",
    },
  ],

  // Footer navigation links
  footerLinks: [
    { label: "Sobre", href: "#sobre" },
    { label: "Abordagem", href: "#abordagem" },
    { label: "Contato", href: "#contato" },
  ],

  copyrightYear: 2026,
}
