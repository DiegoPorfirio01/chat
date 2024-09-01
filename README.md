# Lucy - Chat em Tempo Real

**Lucy** é um aplicativo de chat em tempo real desenvolvido inicialmente em um desafio intenso de 3 dias. Explore a complexidade e inovação desta aplicação, que combina uma série de tecnologias modernas para oferecer uma experiência de usuário envolvente e eficiente!

## 🚀 Tecnologias Utilizadas

Aqui estão as principais ferramentas e bibliotecas que fazem o Lucy funcionar:

- **Framework**: [Next.js 15](https://nextjs.org/) (com utilização de server actions)

- **Frontend**:
  - [React](https://reactjs.org/) 19 (versão experimental)
  - [Prisma ORM](https://www.prisma.io/)
  - [Radix UI](https://radix-ui.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [GSAP](https://greensock.com/gsap)
  - [Ky](https://github.com/sindresorhus/ky)

- **Backend**:
  - [Fastify 4.2](https://www.fastify.io/)
  - [Socket.IO](https://socket.io/)

- **Documentação e UI da API**:
  - [Swagger 8](https://swagger.io/)
- **Outras Dependências**:
  - [Next Intl](https://next-intl.dev/)
  - [Zod](https://zod.dev/)

## 🌟 Funcionalidades

- **Chat em Tempo Real**: Comunicação instantânea entre usuários, proporcionada pelo Socket.IO.
- **Interface Moderna**: Design clean com componentes da Radix UI e estilos responsivos do Tailwind CSS.
- **Formulários Eficientes**: Gerenciados com React Hook Form e validados com Zod.
- **Temas e Internacionalização**: Suporte a temas com Next Themes e tradução com Next Intl.
- **Cache e Performance**: Uso de cache no frontend e Redis no backend para otimizar o desempenho.

## 💻 Como Rodar o Projeto

Para rodar o projeto localmente, siga estes passos:

1. **Instale as dependências:**

   ```bash
   pnpm install
   ```

2. **DevOPS:**
    rodar banco postgre e o redis:

      ```bash
   docker-compose up -d
   ```

3. **Configure as variáveis de ambiente:**

    ```bash
    cp .env.example  .env  
   ```
   Validações estão implementadas para garantir que todas as variáveis estejam corretas.
   
   OBS: - As variaveis relacionadas oa kafka, sugiro que utilize esse serviço para rodar o kafka : https://upstash.com/docs/kafka/overall/getstarted

5. **Gerar schema Prisma:**

   ```bash
   pnpm run db:schema
   ```

6. **Inicie o servidor de desenvolvimento:** Na raiz do projeto, execute:

   ```bash
   pnpm run dev
   ```

7. **Visualize a documentação da API:** Abra o navegador e acesse [http://localhost:3333/docs](http://localhost:3333/docs) para explorar a documentação interativa gerada pelo Swagger.

8. **Acesse o sistema:** Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para usar a aplicação!

## 🛠️ Scripts

- **Desenvolvimento:** `pnpm run dev` - Inicia o servidor de desenvolvimento.
- **Banco:** `pnpm run db:migrate` - Cria schema e atualiza banco
- **Construir:** `pnpm run build` - Gera a versão de produção.
- **Linter:** `pnpm run lint` - Executa o linter para verificar o código.

## Nota

Pode haveer erro no console em função do radix ainda não ter atualizado as referências dos componentes para o novo hook useRef

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.

## 🚀 Desafio Aceito!

Desenvolvido em apenas 3 dias como um grande desafio, o Lucy é um testemunho de paixão por novas tecnologias e criação de aplicações robustas. Espero que você aproveite tanto quanto eu gostei de desenvolvê-la!

**Lucy - Chat em Tempo Real**

Desenvolvido com café ☕ por Diego Vianna Porfírio
