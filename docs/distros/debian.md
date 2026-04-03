# Debian

Site oficial: [www.debian.org](https://www.debian.org)

Por que utilizar o Debian? O próprio site tem uma página dedicada a isso: [Por que Debian](https://www.debian.org/intro/why_debian)

O instalador do Debian não é tão amigável como o instalador de outras distribuições mais populares e amigavéis como o Ubuntu, Fedora, Mint por exemplo, mas, o instalador gráfico dela facilita bastante as coisas.

## Foco 
O foco principal do Debian é estabilidade. É uma das distribuições mais antigas (a 2ª mais antiga das ativas), ele passa por processos rigorosos de teste antes do lançamento das versões estáveis (stable), não a toa, é uma das distribuições preferidas para utilização em servidores e quaisquer sistemas críticos onde erros não são toleráveis. 

## Gerenciador de pacotes
Ele utiliza o formato `.deb` que é o pacote em si, um arquivo compactado com os binários, scripts de configuração e metadados (arquivos contendo informações sobre o autor, versão, dependências, etc.) e a ferramenta `apt` (Advanced Package Tool), que é quem faz a parte inteligente de gerenciar os pacotes instalados e também permitindo instalar, atualizar e remover programas de forma extremamente simples, além de resolver problemas com dependências automaticamente.

O processo de instalação é simples. Se você baixar o arquivo *.deb* e precisa instalá-lo, rode o comando:
`sudo dpkg -i nome_do_pacote.deb`

Para instalar usando o apt também é super simples:
`sudo apt install nome do pacote`

Você pode adicionar a flag `-y` no final do comando acima para responder automaticamente à todas as confirmações da instalação dos pacotes.

Outros comandos úteis:
```bash
sudo apt update # baixa a lista de softwares disponíveis para atualizar
sudo apt install ./nome_do_pacote.deb # outra forma de instalar pacotes .deb, mas precisa passar o ./ antes do nome do arquivo
sudo apt remove nome_do_pacote
sudo apt install nome_do_pacote # além de instalar, ele atualiza para uma nova versão caso já tenha instalado
apt search nome_pacote # pesquisa por pacotes com o nome informado (não precisa do sudo para rodar)
apt show nome_pacote # exibe informações sobre o pacote (aquelas dos metadados)
apt list --installed # exibe a lista dos apps instalados. caso queira saber se um pacote especifico está instalado, use o comando abaixo
apt list --installed | grep "nome do pacote" # pesquisa apenas o pacote especifico na lista acima
sudo apt clean # remove os arquivos baixados pelo apt e que estáo em cache
sudo apt upgrade # atualiza todos os pacotes disponíveis (rode o sudo apt update antes)
sudo apt update && sudo apt upgrade -y # atualiza a lista de pacotes disponíveis e em seguida os atualiza
```

## Filosofia
O Debian segue a filosofia de sistema livre, eles tem [constituição](https://www.debian.org/devel/constitution), [código de conduta](https://www.debian.org/code_of_conduct), [contrato social](https://www.debian.org/social_contract), [política Debian](https://www.debian.org/doc/debian-policy/) e outros documentos a respeito da sua filosofia que estão disponíveis em seu [site oficial](https://www.debian.org/intro/philosophy).

## Arquitetura
O Debian tem versões não apenas para as arquitetura x86/64, mas também para ARM, MIPS, Power PC e sistemas 32 bits.

## Versões

Ele tem três versões:

Versão | Descrição | Público-alvo
  --   |    --     |  --
Stable |  pacotes mais antigos, porém testados exaustivamente | servidores e uso profissional
Testing | Pacotes mais recentes que o Stable e que estão em processo de triagem | Usuários domésticos que desejam novidades
Unstable (Sid) | Onde as novidades chegam primeiro | Desenvolvedores e entusiastas (pode apresentar bugs)

## Comunidade

O Debian não é controlado por uma empresa como o Ubuntu ou o Fedora por exemplo, e sim por uma comunidade de voluntários.

## Segurança
Apesar da versão Stable não ter pacotes tão recentes, no quesito segurança eles sempre tentam lançar tão rápido quanto for possível para garantir que o sistema permaneça estável e seguro.
