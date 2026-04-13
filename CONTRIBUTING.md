# Guia de Contribuição

Agradecemos pelo tempo que dedicou a vir até o projeto e chegar nessa página. Criamos algumas "regras" para contribuição para que o projeto mantenha-se o mais organizado possível e também para facilitar não só para quem contribui, mas para a equipe que acaba tendo que revisar as alteraçõs/adições sugeridas por todos vocês.

## Como contribuir


### Membros da equipe do projeto
1. **Não** faça commits direto na `main`.
2. Crie uma branch diretamente no repositório da organização:
  `git checkout -b feature/nome-da-pagina`
3. Após terminar, abra um **Pull Request**
4. Não precisa deletar a branch do repositório remoto, ela será deletada automaticamente após o merge.
5. Sincronize o repositório local 
```bash
git checkout main # volta para a branch main
git pull origin main # sincroniza o repositório local com o que acabou de ser atualizado no repositório remoto 
git branch -D feature/nome-da-pagina # deleta a branch do repositório local
```

PS.: Para membros da equipe, é necessário criar uma chave GPG (orientações no final do artigo) para assinar os commits.

### Contribuidor externo 
1. Faça um **fork** do projeto para a sua conta pessoal.
2. Cria uma branch em seu fork no formato "feature/pagina-ou-assunto":
```bash
git checkout -b feature/nome-da-pagina ## se alterar mais de um arquivo, se possivel crie branches separadas
```
3. Faça o push para seu repositório normalmente
  `git push origin features/nome-da-pagina`
4. Envie um **Pull Request** para a nossa branch `main`.
5. Sincronize o repositório local
```bash
git checkout main # volta para a branch main
git pull origin main # sincroniza o repositório local com o que acabou de ser atualizado no repositório remoto 
git branch -D feature/nome-da-pagina # deleta a branch do repositório local
```

PS.: Para os forks, não é necessária a chave GPG para assinar os commits, mas, daremos prioridade em aceitar contribuições de commits assinados. 

## Regras de ouro
* **Commits atômicos**: Tente fazer commits que mexam em uma coisa por vez.
* **Mensagens dos commits**: Sejam claros e objetivos. Use algo como: `Criação da página...`, `Adição ...`, `Edição/Correção...`
* **Pull Requests**: Todos os PRs passam por revisão da equipe do projeto
  * Usamos **Squash and Merge** para manter o histórico da branch `main` linear e limpo.
  * Por favor, use o campo de descrição da PR para detalhar o que foi alterado.

## Código de Conduta
Ao participar deste projeto, você concorda em manter um ambiente respeitoso e colaborativo.


## Chave GPG

A Chave GPG (GNU Privacy Guard) é basicamente uma identidade digital criptográfica. Ela funciona baseada em um par de chaves (pública e privada) que trabalham juntas:
- Chave Pública: É como se fosse um e-mail, número de conta, usuário. Todo mundo pode ter acesso a ela sem problema algum e com ela as outras pessoas conseguem criptografar arquivos para você, ou, nesse caso, verificar que o commit foi feito realmente por você.
- Chave Privada: É o equivalente a sua assinatura física ou a chave do seu cofre. Não a compartilhe com ninguém e mantenha a senha segura. Com ela você assina digitalmente seus trabalhos e consegue descriptografar o que enviarem para você.

Serve para garantir que o arquivo não foi alterado por ninguém após sair do seu computador e chegar até o servidor.

**Criação**

Rode no terminal `gpg --full-generate-key`.
Vai cair num menu, digite 1 (RSA and RSA), depois digite o tamanho (de preferência 4096) e se quiser, escolha a validade (pode deixar sem validade). Confirme a criação digitando seus dados como **Nome e E-mail** (o mesmo do Github). Cadastre uma senha.

Com a chave criada, mantenha o terminal aberto e no navegador vá até a página do github, acesse seu perfil e vá em Settings > SSH and GPG Keys e na categoria **GPG Keys** clique na opção New GPG Key, dê um nome e cole o conteúdo que irá obter com o método abaixo.

No terminal, rode o comando `gpg --list-secret-keys --keyid-format LONG`, note que você receberá uma saída similar a essa:

```bash
❯ gpg --list-secret-key --keyid-formato LONG
/home/USUARIO/.gnupg/pubring.kbx
-----------------------------
sec   rsa4096/59DC7FFED727BEEF 2026-04-13 [SC]
      11359CCA9139D964BABACAEE59DC7FFED727BEEF
uid               [   plena  ] Nome Informado <email@dominio.xyz>
ssb   rsa4096/116DEBA3939DABFA 2026-04-13 [E]
```

Em seguida, rode o comando `gpg --armor --export SEU_ID`, onde o SEU ID é o valor após o **rsa4096** na linha sec, nesse exemplo o `59DC7FFED727BEEF`.

Ele vai exibir um texto enorme comando com `-----BEGIN PGP PUBLIC KEY BLOCK-----` e terminando com `-----END PGP PUBLIC KEY BLOCK-----`, copie todo o conteúdo e cole no github e em seguida clique em Add GPG Key.

Feito isso, agora basta configurar dentro do repositório local para assinar os commits:

Se você quiser assinar apenas esse repositório, troque a flag --global por --local
```bash
git config --global user.signingkey SEU_ID
git config --global commit.gpgsign true
```

Faça um teste tentando commitar, se pedir a senha, tudo certo. Se der erro, pode ser que que seja necessário cadastrar o comando abaixo no arquivo de configuração do shell que você utiliza (.bashrc, .zshrc, etc.)

```bash
echo "export GPG_TTY=\$(tty)" >> ~/.bashrc # troque por .zshrc ou o que utiliza por padrão
source ~/.bashrc # idem acima
```

Ele vai pedir a senha dentro do próprio terminal que está rodando.

Se você utiliza o fish, a configuração é ligeiramente diferente. Atualize o arquivo *~/.config/fish/config.fish* com a linha abaixo no final do arquivo:
`set -gx GPG_TTY (tty)`

Em seguida, rode o comando `source ~/.config/fish/config.fish` para aplicar as alterações sem precisar fechá-lo.
