document.querySelector('.accept-button').addEventListener('click', function(){alert("Vous avez accepté les cookies!");
//document.getElementById('remove-button').style.display="none"});  (ce code marche aussi )//
document.getElementById('remove-button').remove()});

document.querySelector('.refuse-button').addEventListener('click', function(){alert("Vous avez refusé les cookies");});

document.querySelector('.survolez-moi').addEventListener('mouseover', function(){alert("J'ai été survolé!");});

//document.querySelector('.color-title').addEventListener('click', blue); function blue(){document.querySelector('h1').style.color='blue';}; ce code est faut mais il fonctionne.//


document.querySelector('.color-title').addEventListener('click', function(){document.querySelector('h1').style.color='blue';});


document.querySelector('.bkcolor').addEventListener('click', function() {document.querySelector('body').style.backgroundColor='green';});

//document.querySelector('.bkcolor').addEventListener('click', function(){document.body.style.backgroundColor='green';)};//
