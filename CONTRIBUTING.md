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

## Regras de ouro
* **Commits atômicos**: Tente fazer commits que mexam em uma coisa por vez.
* **Mensagens dos commits**: Sejam claros e objetivos. Use algo como: `Criação da página...`, `Adição ...`, `Edição/Correção...`
* **Pull Requests**: Todos os PRs passam por revisão da equipe do projeto
  * Usamos **Squash and Merge** para manter o histórico da branch `main` linear e limpo.
  * Por favor, use o campo de descrição da PR para detalhar o que foi alterado.

## Código de Conduta
Ao participar deste projeto, você concorda em manter um ambiente respeitoso e colaborativo.
