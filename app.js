(()=>{
  'use strict';
  const inputIds=['service','hours','hourly','materials','margin','client','phone'];
  const $=id=>document.getElementById(id),money=n=>Number(n||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
  let legacyDraft=null,legacyExists=false;
  function safeNumber(id,max){const value=Number($(id).value);return Number.isFinite(value)?Math.max(0,Math.min(max,value)):0}
  function update(){
    const hours=safeNumber('hours',10000),hourly=safeNumber('hourly',100000000),costs=safeNumber('materials',100000000),pct=safeNumber('margin',100)/100;
    const labor=hours*hourly,buffer=(labor+costs)*pct,total=labor+costs+buffer;
    $('price').textContent=money(total);$('labor').textContent=money(labor);$('costs').textContent=money(costs);$('buffer').textContent=money(buffer);
    const service=$('service').value.trim().slice(0,120)||'o serviço combinado',client=$('client').value.trim().slice(0,80),hi=client?`Olá, ${client}!`:'Olá!';
    $('preview').textContent=`${hi} Segue meu orçamento para ${service}: ${money(total)}.\n\nO valor considera o serviço e os custos informados. Se estiver de acordo, podemos combinar a melhor data.\n\nObrigado pela preferência!`;
  }
  function inspectOldDraft(){try{const raw=localStorage.getItem('orcafacil');if(raw===null)return;legacyExists=true;try{const value=JSON.parse(raw);if(value&&typeof value==='object'&&!Array.isArray(value))legacyDraft=value}catch{legacyDraft=null} $('legacyNotice').hidden=false}catch{}}
  $('loadLegacyDraft').addEventListener('click',()=>{if(!legacyDraft){$('legacyStatus').textContent='A cópia antiga não pôde ser lida. Apague-a para remover o texto sem criptografia.';return}for(const id of inputIds){const value=legacyDraft[id];if(typeof value==='string'||typeof value==='number')$(id).value=String(value).slice(0,id==='service'?120:id==='client'?80:id==='phone'?30:20)}update();$('legacyStatus').textContent='Rascunho recuperado nesta sessão. Ele continua salvo em texto legível até você apagar a cópia antiga.'});
  $('deleteLegacyDraft').addEventListener('click',()=>{if(!legacyExists)return;if(!confirm('Apagar a cópia antiga sem criptografia deste navegador?'))return;try{localStorage.removeItem('orcafacil');legacyExists=false;legacyDraft=null;$('legacyNotice').hidden=true;$('legacyStatus').textContent='A cópia antiga foi apagada.'}catch{$('legacyStatus').textContent='Não consegui apagar a cópia antiga. Revise os dados do navegador manualmente.'}});
  inputIds.forEach(id=>$(id).addEventListener('input',update));
  $('copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('preview').textContent);$('copy').textContent='Mensagem copiada!';setTimeout(()=>$('copy').textContent='Copiar mensagem',1800)}catch{$('copy').textContent='Selecione e copie a mensagem acima'}});
  $('whatsapp').addEventListener('click',()=>{const phone=$('phone').value.replace(/\D/g,'');if(phone&&(phone.length<10||phone.length>13)){$('legacyStatus').textContent='Confira o DDD e o número do WhatsApp.';return}const text=encodeURIComponent($('preview').textContent),url=`https://wa.me/${phone}?text=${text}`;window.open(url,'_blank','noopener,noreferrer')});
  inspectOldDraft();update();
})();

