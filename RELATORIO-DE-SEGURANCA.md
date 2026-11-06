# OrçaFácil — privacidade e segurança

## Mudanças feitas na cópia local

- Novas propostas e campos não são gravados em `localStorage`; ficam apenas na memória da página.
- A página usa arquivos locais separados e uma política CSP que permite scripts/estilos locais e bloqueia conexões, plugins e código inline.
- O texto de serviço/nome é inserido com `textContent`. O telefone é reduzido a dígitos e só é usado no link fixo `wa.me` depois do clique do usuário.
- Ao abrir WhatsApp, número e mensagem entram no serviço externo. O app não envia a mensagem automaticamente; revise e só então envie.
- A versão antiga pode ter deixado um rascunho em texto legível. O app mostra um aviso, permite recuperar o rascunho só na sessão atual e apagar a cópia mediante confirmação. A cópia antiga permanece enquanto a pessoa não escolher apagá-la.

## Verificações realizadas

- Sintaxe do JavaScript e revisão estática para ausência de gravação de novos campos, HTML executável e scripts externos.
- Simulação da recuperação do rascunho antigo, exibição de conteúdo malicioso como texto e remoção somente após a ação explícita.

## Limites e estado da publicação

- A versão anterior salvava os campos em texto legível. A versão atual não cria novos rascunhos persistentes; quem já usou a anterior pode ainda ter a cópia antiga neste navegador.
- Se o navegador ainda tiver a chave antiga `orcafacil`, ela fica em texto legível até a pessoa clicar em **Apagar cópia antiga** no aviso.
- O botão **Abrir WhatsApp** é uma ação externa escolhida pelo usuário. Não informe dados que não queira colocar na mensagem.
- A CSP em meta tag não define proteção contra enquadramento da página; esse controle exigiria um cabeçalho de hospedagem. Não é uma auditoria profissional.

## Testes e publicação

- JavaScript verificado com `node --check` e fluxo de migração revisado com navegador simulado.
- Repositório público: [luizscatena/orca-facil](https://github.com/luizscatena/orca-facil). Aguarde o GitHub Pages concluir a implantação antes de informar dados no site atualizado.
- Não foi feita auditoria independente nem teste visual em todos os navegadores.

