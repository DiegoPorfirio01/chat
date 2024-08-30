# Lucy - Chat em Tempo Real

**Lucy** é um aplicativo de chat em tempo real desenvolvido como um desafio intenso de 3 dias. Explore a complexidade e inovação desta aplicação, que combina uma série de tecnologias modernas para oferecer uma experiência de usuário envolvente e eficiente!

## 🚀 Tecnologias Utilizadas

Aqui estão as principais ferramentas e bibliotecas que fazem o Lucy funcionar:

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Frontend**:
  - [React](https://reactjs.org/) 19 (versão experimental)
  - [Radix UI](https://radix-ui.com/)
  - [Tailwind CSS](https://tailwindcss.com/) com [Tailwind CSS Animate](https://github.com/andrew-codes/tailwindcss-animate)
  - [GSAP](https://greensock.com/gsap)
- **Backend**:
  - [Fastify 4.2](https://www.fastify.io/)
  - [Socket.IO](https://socket.io/)
  - [Ky](https://github.com/sindresorhus/ky)
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

2. **Configure as variáveis de ambiente:** Copie e renomeie o arquivo `.env.example` para `.env` na raiz do projeto e preencha as variáveis necessárias. Validações estão implementadas para garantir que todas as variáveis estejam corretas.
  OBS:  - sugiro que utilize esse serviço para rodar o kafka : https://upstash.com/docs/kafka/overall/getstarted
        - sugiro que utilize esse serviço para o banco postgre : https://neon.tech/app
        - ambos são init free (como não tive tempo de fazer a infra, utilizei eles)

3. **Inicie o servidor de desenvolvimento:** Na raiz do projeto, execute:

    ```bash
    pnpm run dev
    ```

4. **Visualize a documentação da API:** Abra o navegador e acesse [http://localhost:3333/docs](http://localhost:3333/docs) para explorar a documentação interativa gerada pelo Swagger.

5. **Acesse o sistema:** Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para usar a aplicação!

## 🛠️ Scripts

- **Desenvolvimento:** `pnpm run dev` - Inicia o servidor de desenvolvimento.
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
