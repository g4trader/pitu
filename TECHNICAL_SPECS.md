# Ficha Técnica: Banner Interativo Pitú (Quiz)

## 1. Informações Gerais
*   **Anunciante:** Pitú
*   **Campanha:** "Onde anda meu amor?"
*   **Formato:** IAB Medium Rectangle (Retângulo Médio)
*   **Dimensões:** 336px (largura) x 280px (altura)
*   **Peso Máximo Recomendado (Zip):** 150KB
*   **Tecnologia:** HTML5, CSS3, JavaScript

## 2. Dinâmica do Criativo (Quiz)
O banner possui 3 estados de navegação (Fluxo Interativo):

### Estado 1: Pergunta (Intro)
*   **Headline:** "ONDE ANDA MEU AMOR?"
*   **Interação:** O usuário deve clicar em uma das 3 opções:
    1.  NO CARNAVAL
    2.  NO TINDER
    3.  EM CASA

### Estado 2: Loading
*   Transição curta simulando "procura" para gerar expectativa.

### Estado 3: Resultado (Resposta)
Exibição condicionada à escolha do usuário:
*   **Opção 1 (Carnaval):** "A FOLIA PEDE PITÚ!" + Imagem de festa + CTA "CAIA NA FOLIA".
*   **Opção 2 (Tinder):** "DEU MATCH COM PITÚ!" + Imagem de drinks + CTA "PEÇA AGORA".
*   **Opção 3 (Casa):** "RELAX COM PITÚ!" + Imagem relax/sofá + CTA "RECEBA EM CASA".

## 3. Assets e Identidade Visual
*   **Paleta de Cores:**
    *   Vermelho Pitú: `#d42426`
    *   Amarelo Institucional: `#fbbf24`
    *   Texto Escuro/Preto: `#1f2937`
*   **Tipografia:**
    *   Títulos: *Bebas Neue* (Google Fonts)
    *   Corpo: *Poppins* (Google Fonts)
*   **Imagens:** Devem ser otimizadas (WEBP ou JPG) para não exceder o peso limite.

## 4. Requisitos de Implementação (Ad Server)
*   **ClickTag:** O banner deve suportar a variável `clickTag` padrão para contabilização de cliques.
*   **Responsividade:** O banner possui tamanho fixo (336x280), não deve ser redimensionado.
*   **Fallback:** Deve ser gerada uma imagem estática (JPG/Backup) de 336x280 para navegadores antigos.
