# Projeto: App de Cadastro de Usuários

## Descrição
Este projeto é um aplicativo mobile desenvolvido em React Native para o curso de DSM - Desenvolvimento de Software Multiplataforma da Fatec de Votorantim.

## Tecnologias Utilizadas
* **React Native:** Framework para desenvolvimento de aplicativos mobile nativos (iOS e Android) utilizando JavaScript e React.
* **Expo:** Plataforma que simplifica o desenvovimento de aplicativos React Native, oferecendo ferramentas e serviços para agilizar o processo, como hot reload e distribuição rápida.
* **Dotenv:**  Biblioteca que facilita o gerenciamento de variáveis de ambiente permitindo que informações sensíveis, como chaves de API e configurações, fiquem armazenadas separadamente do código, melhorando a segurança e a organização.
* **Babel:** Ferramenta que permite a compatibilidade para navegadores antigos.
* **Banco de dados:** Será impletado o Firebase.

## Instalação
1. **Clone o repositório:**

   git clone (https://github.com/LauraJaneAntunes/AppCadastro)

 2. **Instale as dependências:**
     * Em cada pasta: App e Api
    npm i

 3. **Configure variáveis de ambiente:**
      * Renomeie o arquivo **exeploenv** para: .env
      * No arquivo .env, substitua **seu-servidor-aqui** por seu endereço Endereço IPv4;
      - Para conseguir seu IPv4 siga os passos:
      * Abra seu promtp de comando ou digite cmd no explorer ou executar (windows + r);
      * Digite ipconfig e pressione enter;
      * Verifque se esta conectado a internet pelo wi-fi ou pelo ethernet e busque seu IPv4 correspondente.
         ex.:
            Adaptador de Rede sem Fio Wi-Fi:
            Endereço IPv4. . . . . . . .  . . . . . . . : 123.456.7.890

 4. **Execute o projeto:**
     * Primeiro a Api: de um cd Api no terminal
    node index.js

     * Em seguida App: abra outra janela do terminal, de um cd App
    npx expo start

 5. Acessar a Aplicação:
    * É necessário usar o celular e escanear o QRCode com o aplicativo expo go (https://expo.dev/go)
