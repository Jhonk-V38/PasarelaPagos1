var stripe = Stripe('your-publishable-key');

fetch('/create-checkout-session', {
    method: 'POST',
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(session) {

    return stripe.redirectToCheckout({ sessionId: session.id });
  })
  .then(function(result) {
    // Si redirectToCheckout falla debido a un error en el navegador o bloqueo de red, muestra el error al cliente.
    if (result.error) {
      alert(result.error.message);
    }
  })
  .catch(function(error) {
    console.error('Error:', error);
  });