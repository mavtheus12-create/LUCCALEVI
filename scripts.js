/**
 * ============================================================
 * Projeto: Convite Digital - Lucca Levi 1 Aninho
 * Descrição: Scripts de interação do convite de aniversário
 * Autor: William Santos
 * Data: 2025
 * ============================================================
 */

/**
 * @description Confirma a presença do convidado abrindo o WhatsApp
 * com uma mensagem pré-preenchida para o número do anfitrião.
 * @param {Event} e - O evento de clique do elemento acionador.
 * @returns {void}
 */
function confirmPresence(e) {
  e.preventDefault();

  const numero = '5511975768208';
  const mensagem = encodeURIComponent(
    'Olá! Confirmo minha presença na festa de 1 aninho do Lucca Levi! 🏎️🎉 Nos vemos dia 11 de Julho às 15h!'
  );
  const url = `https://wa.me/${numero}?text=${mensagem}`;

  // Tenta abrir em nova aba; se bloqueado, redireciona na mesma aba
  const novaAba = window.open(url, '_blank');
  if (!novaAba || novaAba.closed || typeof novaAba.closed === 'undefined') {
    window.location.href = url;
  }
}

/**
 * @description Inicializa os event listeners após o carregamento do DOM.
 * Garante que todas as interações sejam vinculadas apenas quando
 * os elementos HTML estiverem disponíveis.
 * @returns {void}
 */
document.addEventListener('DOMContentLoaded', function () {
  // Splash screen: desaparece após 2.5 segundos
  const splash = document.getElementById('splashScreen');
  if (splash) {
    setTimeout(function () {
      splash.classList.add('fade-out');
      // Remove do DOM após a transição terminar
      setTimeout(function () {
        splash.remove();
      }, 1000);
    }, 2500);
  }
});

// Expor função no escopo global para compatibilidade com onclick inline
window.confirmPresence = confirmPresence;
