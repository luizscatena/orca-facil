# OrçaFácil

Calculadora gratuita de preço e gerador de mensagem de orçamento para prestadores de serviço. Funciona como uma página estática, sem cadastro, servidor, banco de dados ou mensalidade. Na versão local atual, os campos ficam apenas na memória desta página e não são salvos.

## Abrir

Abra `index.html` em um navegador atualizado. Se aparecer o aviso de rascunho antigo, uma versão anterior deixou campos em texto sem criptografia no navegador. Recupere o rascunho para usá-lo nesta sessão e depois apague a cópia antiga, ou apague-a sem recuperar. Para compartilhar a versão local atual, publique `index.html`, `app.css` e `app.js` em hospedagem estática.

## Como a estimativa é calculada

`(horas × valor da hora + materiais e custos) × (1 + reserva percentual)`

É uma referência simples, não orientação contábil. O usuário precisa considerar impostos, deslocamento, taxas, custos indiretos e regras próprias do seu setor.

## Caminho de receita sem investimento inicial

1. Publicar a ferramenta em hospedagem estática gratuita e divulgar em comunidades onde prestadores de serviço já participam, respeitando as regras de cada comunidade.
2. Conversar com 10 a 20 prestadores antes de acrescentar recursos. Perguntar como formam preços e se pagariam por histórico de clientes, PDF com identidade visual, lembretes de retorno e catálogo de serviços.
3. Só construir uma versão paga depois de obter sinais concretos de interesse. Uma hipótese para validar é cobrar R$ 19/mês por recursos de organização; para faturar R$ 4.000/mês seriam necessários cerca de 211 assinantes, antes de taxas, impostos e cancelamentos.

## Limites e próximos passos

- A mensagem só é copiada ou aberta no WhatsApp quando você clica. Ao abrir WhatsApp, o número e o texto entram no serviço; revise antes de enviar.
- A página não tem cadastro, pagamentos, nuvem nem sincronização entre dispositivos.
- A ferramenta sozinha não traz visitantes nem receita. O principal trabalho inicial é encontrar prestadores, ouvir o que precisam e testar canais gratuitos de divulgação.
- Hospedagem pode ser gratuita, mas depende de conta em provedor e pode ter limites ou mudar as condições.
- Antes de coletar dados de clientes, adicionar analytics ou pagamentos, revisar privacidade, segurança, termos e obrigações aplicáveis.

Veja `RELATORIO-DE-SEGURANCA.md` para os controles, testes e limites conhecidos da versão atual.

