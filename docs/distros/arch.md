# Arch

Site oficial: [https://archlinux.org/](https://archlinux.org/)

Por que utilizar o Arch Linux? Essa é uma pergunta que muita gente faz e a muitos não sabem responder, mas, as principais características do Arch Linux é ser um sistema rolling release, ou seja, ele está sempre atualizado. Outro ponto muito forte no Arch é a sua documentação. A Wiki do arch é uma das mais (se não a mais) completa entre as distribuições Linux, além do fórum ser muito ativo. Muita gente quando enfrenta alguma situação díficil de resolver, pesquisa na internet pelo problema e quase sempre tem uma página do arch linux no topo dos resultados ajudando a resolver tal problema.

O instalador do Arch Linux não é dos mais amigáveis, mas, o processo já foi bem mais penoso do que é atualmente com o archinstall, de todo modo, ainda há a forma mais "raiz" de fazer a instalação que é totalmente via linha de comando.

## Foco
O foco do Arch Linux é a simplicidade, minimalismo e versatilidade. Adepto a filosofia KISS (Keep it Simple, Stupid) e DIY (faça você mesmo), onde o usuário tem controle enorme em como o sistema deve ser construído.

## Gerenciador de pacotes
O Arch Linux utiliza o formato `.pkg.tar.zst` como pacote e que contém os binários e os metadados. Quem cuida do gerenciamento dos pacotes é o `pacman` (Package Manager).

O processo  de instalação é simples, caso baixe um arquivo `.pkg.tar.zst`, para instalá-lo, basta rodar o comando:
`sudo pacman -U nome_pacote.pkg.tar.zst`

Para instlar diretamente dos repositórios do arch:
`sudo pacman -S nome_pacote`

Alguns comandos úteis do pacman:
```bash
sudo pacman -Syu # Sincroniza os pacotes e atualiza (pode demorar um pouco pra baixar tudo)
sudo pacman -Sy # Sincroniza os pacotes (caso não queira atualizar na hora)
sudo pacman -Su # Atualiza os pacotes sincronizados anteriormente
sudo pacman -Rs nome_pacote # remove o pacote
sudo pacman -Ss nome_pacote # pesquisa pelo pacote nos repositórios
sudo pacman -Sc # limpar o cache de pacotes
sudo pacman -Si pacote # exibe informações do pacote
sudo pacman -Qs pacote/termo # pesquisa nos pacotes instalados pelo pacote/termo pesquisado
sudo pacman -Qi pacote # Exibe informações sobre o pacote instalado
sudo pacman -Ql pacote # Exibe os arquivos do pacote e onde estão
```

## Filosofia
Como dito anteriormente a filosifia principal do Arch é o KISS (Keep it Simple, Stupid) e DIY, acho que o mais visível é o DIY, apesar que o KISS muita gente acredita, que por conta do termo "Simple" é sinônimo de facilidade, mas não necessariamente. E sim no que diz respeito ao desenvolvimento e aplicação do sistema em si, de ser direta ao ponto e principalmente eficiente no que se propõe.

## Arquitetura
É desenvolvido apenas para versões x86/64 bits, mas existem forks para outras arquiteturas.

## Versões
Como o arch é rolling release, não há lançamentos de versões igual ocorre com outras distro, ela está sempre em constante atualização. Normalmente após alguns dias do lançamento de uma atualização do kernel, essa nova versão já fica disponível para todos os usuários, assim claro, como de outros pacotes.

## Comunidade
O Arch Linux é um projeto comunitário, ele é liderado por **Levente Polyak** (conhecido como *anthraxx*). Ele é quem toma as decisões finais e coordena as equipes, mas o processo de desenvolvimento é bem democrático. O trabalho de manutenção é basicamente dividido entre três grupos:

- Core Team (desenvolvedores): Grupo com mais de 30 pessoas que tem acesso de escrita nos repositórios principais (core e extra), eles que decidem quais pacotes entram/saem do sistema.
- Package Mainteners (mantenedores de pacotes): Responsáveis por manter os pacotes atualizados, corrigir bugs de empacotamentos e garantindo estabilidade das builds.
- Equipe de Segurança (Arch Testing Team): Voluntários que testam novos pacotes em um repositório separado para garantir que nada "quebre" quando for lançado ao público geral.

O projeto não tem fins lucrativos e não tem nenhuma empresa por trás, logo, ele se mantém através de doações de usuários e empresas que queiram contribuir de alguma forma (financeira, infra, etc.).

## Segurança

Por ser uma distro `rolling release` a segurança do arch pode ser considerada um ponto forte já que está sempre com pacotes atualizados, porém, ao mesmo tempo, pode ter casos em que um pacote foi pouco testado e apresente alguma vulnerabilidade que em outras distribuições poderia ser barrado por ter testes mais exaustivos antes do lançamento para o público geral. Além disso, um dos trunfos do arch que é o repositório "AUR", como ele é mantido totalmente pela comunidade, os pacotes enviados para esse repositório não passam pela curadoria da equipe oficial do Arch, podendo ter algum script malicioso no código. Claro, se algum usuário notar alguma irregularidade, ele pode denunciar para que o pacote seja removido do repositório, porém, já vai ter ocorrido um estrago.

Alguns pontos interessantes a se considerar é que a instalação do Arch é "limpa", logo, o usuário é responsável por adicionar algumas camadas de segurança como por exemplo **Firewall, Controle de Acesso, Criptografia, etc**.
