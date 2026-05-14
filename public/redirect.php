<?php
$phone = '5511955893906';

$messagesByOrigem = [
  'home'                    => 'Quero conversar com um especialista em Direito de Família',
  'pensao-alimenticia'      => 'Quero conversar sobre pensão alimentícia',
  'pensao-atrasada'         => 'Quero conversar sobre pensão atrasada',
  'revisao-de-pensao'       => 'Quero conversar sobre revisão de pensão',
  'paternidade-e-pensao'    => 'Quero conversar sobre paternidade e pensão',
  'alimentos-gravidicos'    => 'Quero conversar sobre alimentos gravídicos',
  'guarda-e-convivencia'    => 'Quero conversar sobre guarda e convivência',
  'como-funciona'           => 'Quero entender como funciona o atendimento',
  'sobre'                   => 'Quero conversar com a Bonvenuto Advocacia',
  'faq'                     => 'Quero tirar dúvidas sobre meu caso',
  'contato'                 => 'Quero falar com um especialista',
  'politica-de-privacidade' => 'Quero conversar com um especialista',
  'site'                    => 'Quero conversar com um especialista em Direito de Família',
  'google-ads'              => 'Quero conversar com um especialista em Direito de Família',
];

$origem = $_GET['origem'] ?? 'home';

if (!array_key_exists($origem, $messagesByOrigem)) {
  $origem = 'home';
}

$text = rawurlencode($messagesByOrigem[$origem]);
$whatsappUrl = "https://api.whatsapp.com/send/?phone={$phone}&text={$text}&type=phone_number&app_absent=0";
?>
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Redirecionando para o WhatsApp...</title>
  <meta name="robots" content="noindex,nofollow">

  <!-- Google Tag Manager -->
  <script>
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WD8KRWWJ');
  </script>
  <!-- End Google Tag Manager -->

  <script>
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'whatsapp_redirect',
      origem: '<?php echo htmlspecialchars($origem, ENT_QUOTES, "UTF-8"); ?>',
      destino: 'whatsapp',
      pagina: 'redirect.php'
    });

    setTimeout(function () {
      window.location.href = '<?php echo $whatsappUrl; ?>';
    }, 1200);
  </script>

  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: #f8f6f1;
      color: #111827;
      text-align: center;
      padding: 24px;
    }

    .box {
      max-width: 480px;
    }

    a {
      color: #111827;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <!-- Google Tag Manager noscript -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WD8KRWWJ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <!-- End Google Tag Manager noscript -->

  <div class="box">
    <h1>Redirecionando para o WhatsApp...</h1>
    <p>Você será encaminhado para o atendimento em instantes.</p>
    <p>
      Se não abrir automaticamente,
      <a href="<?php echo htmlspecialchars($whatsappUrl, ENT_QUOTES, 'UTF-8'); ?>">
        clique aqui para falar pelo WhatsApp.
      </a>
    </p>
  </div>
</body>
</html>
