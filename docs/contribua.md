# Contribua com a nossa Megathread.

## Como contribuir?

O projeto será sempre mais forte com a contribuição de todos, para isso, caso queira contribuir conosco, sua contribuição será muito bem vinda. Há basicamente duas formas de contribuir, a primeira e mais indicada envolve um pouco de conhecimento de git e também markdown para editar os conteúdos. A segunda é via abrindo uma "issue" dentro do github do projeto, mas, nessa opção, ficará a cargo de outros usuários lerem e implementarem o que for solicitado, o ideal é se possível fazer pelo primeiro método.

### Método 1 - Pull requests

Algumas das etapas abaixo envolve conhecimento de git, os principais comandos para que consigam colaborar será detalhado no final da página.

1. Entre no github do repositório e faça um fork dele.
2. Crie uma branch para as alterações.
3. Faça as edições necessárias no(s) arquivo(s) markdown (extensão .md) que ficam dentro da pasta /docs.
4. Envie um pull request para esse repositório.
5. Detalhe as alterações realizadas e se possível o motivo dessa adição/alteração ser importante.
6. Sempre que possível, use conteúdos em português para enviar ao nosso projeto ou tente traduzir o conteúdo caso não seja em pt, nem que seja um resumo do conteúdo e do que cada comando realiza.
7. Verifique se o conteúdo já não existe, talvez seja melhor editar um conteúdo existente, deixando ele mais rico de informações do que criar um similar para que concorram entre si.
8. Depois que fizer o pull request, sempre que for realizar novas alterações não esqueça de atualizá-lo.


### Método 2 - Issue

Essa etapa é mais fácil, porém, não garante que será implementada pois dependerá de algum usuário ver a issue aberta, entender o que está sendo solicitado e tirar um tempo para implementá-la. Seja o mais claro possível na hora de solicitar para evitar que quem queira ajudar não precise ficar fazendo perguntas tentando entender o que desejas.

1. Vá na página **Issues** do projeto
2. Clique em **New issue**
3. Adicione um título e na descrição seja o mais sucinto possível com o que deseja que seja adicionado. 
4. Use tags/labels sempre que possível para ficar mais fácil filtrar o tipo de conteúdo na busca.
5. Ao concluir, clique em **Create**.

Após isso, a issue ficará aberta e qualquer usuário que queira contribuir pela Etapa 1 consegue trabalhar nela.

## Básico de git para contribuir.

Para contribuir  diretamente, você precisa ter o git instalado. A maioria das distribuições linux já vem com ele instalado, para testar, basta rodar dentro do terminal o comando

```bash
git -v
```
Esse comando deve retornar algo como:
```bash
git version 2.47.3
```

Se não retornar nada, você pode rodar um dos comandos abaixo (a depender da distribuição que utiliza):
```bash
sudo apt install git # debian e derivados (ubuntu/mint/zorin)
sudo pacman -S git # arch e derivados
sudo dnf install git # fedora e derivados
sudo zypper install git # opensuse e derivados
```

Ok, agora que temos o git instalado, vamos aos principais comandos de acordo com as etapas na hora de contribuir com o projeto.

fork:
Após realizar o fork dentro do site do github, um repositório com uma "cópia" dele será criada em sua conta, mas essa cópia é do momento que foi criado, se novas alterações forem realizadas no original, o seu não estará mais igual.

Vamos sincronizar o conteúdo do seu repositório remoto (conteúdo do site) com o repositório local (sua máquina).<br>
Encontre uma pasta em sua máquina onde ficará salvo o conteúdo, acesse o terminal e navegue até essa página e em seguida rode o comando abaixo:

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_PROJETO.git
```
Substituia o SEU_USUARIO pelo seu nome de usuario no github e NOME_DO_PROJETO pelo nome do repositório que foi salvo no git.

Em seguida, entre na pasta que foi criada:
```bash
cd NOME_DO_PROJETO
```

Você já tem uma cópia do seu repositório em sua máquina, mas lembra que eu disse que no repositório original caso ele seja atualizado o seu não estará mais? Pois bem, para contornar isso, precisamos adicionar o repositório oficial como "upstream", para isso, rode o comando abaixo:
```bash
git remote add upstream https://github.com/nulljao/linuxbr.git
```

Para confirmar, você pode rodar o comando: git remote -v <br>
Ele exibirá ao menos duas saídas, uma chamada origin com o seu repositório e a upstream com o projeto original.

Agora, vamos supor que você fez esse processo num determinado dia, mas não editou nenhum arquivo ainda e agora que está pensando em atualizar você quer garantir que seu repositório esteja sincronizado com o original, o que fazer?

Rode o comando abaixo para buscar as alterações:
```bash
git fetch upstream 
```

Feito isso, ele ainda não foi totalmente sincronizado, você vai precisar rodar um dos comandos abaixo (no final vou deixar links para explicação da diferenças entre ambos):

```bash
git merge upstream/main 
git rebase upstream/main
```
E se desejar, pode enviar as alterações para o repositório do fork no github:
```bash
git push origin main 
```

Agora você pode editar o conteúdo que desejar. Para alterações nos arquivos, é recomendada a criação de uma branch separada, isso fará com que tenha duas versoes do repositório em sua máquina:

- Uma com a branch main (principal) e que terá os arquivos intactos.
- Outra com a branch nova, que terá as alterações. 

Aqui eu não vou detalhar esse processo, mas no final do artigo terá alguns links com dicas extras de git e conteúdo específico sobre branch, só vai precisar rodar alguns comandos antes de começar as alterações e no final do processo pro push pro git e na hora do pull request

Feita as devidas alterações, se você rodar um git status, você verá uma lista com o(s) arquivo(s) alterados e uma mensagem parecida com essa:
```bash
➜ git status
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        docs/.vitepress/
        docs/contribua.md
        docs/index.md
        docs/sobre.md
        package-lock.json
        package.json
```

Se você quiser submeter apenas um arquivo para atualização, rode o comando git add nome_arquivo. Se quiser adicionar outros (mas não todos), você adicionar os demais arquivos na sequência dando um espaço entre o nome de cada arquivo.

Se quiser enviar todos de uma vez, rode:
```bash
git add .
```
Isso fará com que todos os arquivos sejam adicionados. 

Em seguida, para enviar as alterações para o github precisamos primeiro "commitar", que é criar uma mensagem curta e sucinta do que foi feito e depois enviar as atualizações.

```bash
git commit -m "mensagem resumida do que foi realizado/alterado"
git push origin main # enviar as alterações pro github
```

Agora vem o processo do **pull request**.
Entre no seu repositório, provavelmente vai ter alguma mensagem no topo da tela de algo tipo **"Compare & pull-request"**, pode clicar nele. Se não aparecer, vá em Pull requests > New Pull Request > 
- Em repositório base (base repository) vai ficar o repositório original
- Em head repository o seu repositório

Preencha o título e descrição e depois clique em criar/enviar.

O conteúdo vai pra revisão no repositório original, podendo ou não ser aprovada. 

Você pode ver se foi aprovada acessando a página do repositório oficial e indo em pull requests, a página carrega com a lista de pull requests em aberto, se a sua não aparecer na lista ou a lista estiver vazia, filtre pelas pull requests fechadas (closed) e localize a sua. Você pode clicar nela que terá o detalhamento e no final você verá algo como: 


<blockquote>
Pull request successfully merged and closed<br>
You're all set — the branch has been merged.
</blockquote>

Esse foi o básico do git para contribuição com o projeto, para mais dicas sobre utilização do git, segue alguns links:

- [Merge vs Rebase](https://www.atlassian.com/br/git/tutorials/merging-vs-rebasing) Artigo da Atlassian 
- [Dicas commit](https://www.atlassian.com/br/git/tutorials/saving-changes/git-commit) Artigo da Atlassian
- [Sobre branches](https://git-scm.com/book/pt-br/v2/Branches-no-Git-O-b%C3%A1sico-de-Ramifica%C3%A7%C3%A3o-Branch-e-Mesclagem-Merge) Artigo do site oficial do git-scm
- [Ainda sobre branches](https://www.hostinger.com/br/tutoriais/git-branch) Artigo da Hostinger 


## Acesso SSH

Talvez você não consiga submeter alterações para o github pois ele não costuma aceitar envio pelo protocolo HTTP/HTTPS.

Caso isso ocorrá, precisamos criar uma chave SSH, adicionar ao repositório do github e atualizar o link do repositório remoto com o link vinculada ao protocolo SSH.

### Criando a chave SSH

Entre na pasta .ssh:
```bash
cd ~/.ssh
```
Rode o comando **ls**, se aparecer algo como id_rsa, id_ed25519... você já tem chaves criadas e pode pular para a próxima etapa, caso contrário, siga os passos a seguir.

**Gerando uma chave**

```bash
ssh-keygen -t ed25519 -C "seu_email_cadastrado_no_github@dominio.com"
```
Se der algum erro por seu sistema não suportar chaves ed25519, use RSA:
```bash
ssh-keygen -t rsa -b 4096 -C "email...@..."
```

Em qualquer uma das formas, ele vai questionar onde salvar, pode apertar enter que vai salvar no diretório .ssh (diretório padrão). Vai perguntar se deseja cadastrar uma senha, se não quiser, aperte enter (sempre que for acessar algo usando o SSH com essa chave, será solicitada a senha).

**Iniciar o agente SSH e adicionar a chave**

Rode o comando abaixo para "adicionar" a chave no terminal e conseguir usá-la
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_25519 
```

No último comando você pode substituir o nome de acordo com o que foi salvo. Na dúvida, rode o comando "ls ~/.ssh" que ele irá listar os nomes. Terá um arquivo sem extensão e outro com a extensão .pub (será usada a seguir).

Agora, copie o conteúdo da chave pública com o comando:
```bash
cat ~/.ssh/id_ed25519.pub
```
Copie o conteudo completo (começando pelo ssh... até o final do e-mail cadastrado)

Vá no site do github, clique na foto de perfil > Settings > SSH and GPG Keys > New SSH Key.

Cadastre um nome e no campo chave, cole o conteudo que você copiou no comando anterior e clique em **Add SSH Key**.

Se quiser testar, você pode rodar o comando abaixo no terminal:
```bash
ssh -T git@github.com
```

Se der certo, verá uma mensagem como:
> Hi, seu_usuario. You've successfully authenticated...

Agora, para fazer com que seu repositório utilize o protocolo SSH para se conectar ao invés do HTTPS, entre na pasta do seu projeto pelo terminal e rode:

```bash
git remote add origin git@github.com:seu_usuario/nome_repositorio.git 

```

Se der algum erro informando que já existe um origin... rode:
```bash 
git remote set-url origin git@github.com:seu_usuario/nome_repositorio.git
```

Em seguida quando você for rodar o comando push, ele irá usar o protocolo SSH. Lembrando que caso tenha definido uma senha, ele irá solicitar essa senha toda vez que rodar qualquer comando que envie dados para o servidor.
