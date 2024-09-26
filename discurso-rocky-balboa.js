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
Discurso do Rocky Balboa

Você não vai acreditar. 
Mas você cabia aqui. 
Eu segurava você e dizia:
“Esse menino vai ser o melhor menino do mundo.
Esse menino vai ser melhor do que qualquer um que conhecemos.”
E você cresceu bom, maravilhoso.

Aí chegou a hora de você ser adulto e conquistar o mundo.
E conquistou.
Mas em algum ponto desse percurso, você mudou.
Você deixou de ser você.

Agora deixa as pessoas botarem o dedo na sua cara e dizer que você não é bom.
Eu vou te dizer uma coisa que você já sabe:
O mundo não é um grande arco-íris.
É um lugar sujo, é um lugar cruel.
Que não quer saber o quanto você é durão.
Vai botar você de joelhos e você vai ficar de joelhos para sempre se você deixar.

Você, eu, ninguém vai bater tão duro como a vida. 
Mas não se trata de bater duro.
Se trata de quanto você aguenta apanhar e seguir em frente.
O quanto você é capaz de aguentar e continuar tentando.
É assim que se consegue vencer.

Agora se você sabe o seu valor, então vá atrás do que você merece.
Mas tem que ter disposição para apanhar.
E nada de apontar dedos, dizer que você não consegue por causa dele, dela ou de quem seja.
Só covardes fazem isso e você não é covarde.
Você é melhor do que isso! 
Rocky Balboa 
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
