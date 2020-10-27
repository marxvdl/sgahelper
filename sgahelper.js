/*
 * Este é o código completo do bookmarklet, em formato amigável e editável.
 * Para gerar a versão de distribuição em formato bookmarklet, use o script build.js.
 */

const trList = document.querySelectorAll('#class-record-presence-table tr');

for (let tr of trList) {
    const tdList = tr.querySelectorAll('td');
    if (tdList.length === 0)
        continue;

    let aluno = tdList[3];
    let checkboxes = tr.querySelectorAll('input[type=checkbox]');

    aluno.style.cursor = 'pointer';

    aluno.addEventListener(
        'click',
        () => {
            for(let cb of checkboxes){
                cb.checked = !cb.checked;
            }
        }
    );

}