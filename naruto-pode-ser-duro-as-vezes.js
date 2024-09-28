async function enviarScript(scriptText){

    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)
    
    if(!textarea) throw new Error("Não há uma conversa aberta")
    
    for(const line of lines){
        console.log(line)
    
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);
        
        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }
    
    return lines.length;
}

enviarScript(`
O Naruto pode ser um pouco duro às vezes
talvez você não saiba disso
mas o Naruto também cresceu sem pai.
Na verdade ele nunca conheceu nenhum de seus pais
e nunca teve nenhum amigo em nossa aldeia.
Mesmo assim eu nunca vi ele chorar
ficar zangado ou se dar por vencido
ele está sempre disposto a melhorar
ele quer ser respeitado
é o sonho dele
e o Naruto daria a vida por isso sem hesitar.
Meu palpite é que ele se cansou de chorar
e decidiu fazer alguma coisa a respeito!
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
